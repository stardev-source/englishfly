import { useCallback, useEffect, useRef, useState } from 'react';
import { LEVELS, SECONDS_PER_QUESTION, findTest } from './data/tests.js';
import {
  loadSession,
  saveSession,
  clearSession,
  loadProfile,
  saveProfile,
} from './storage.js';
import { submitResult, flushPending } from './results.js';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

function formatTime(total) {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

function describeDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s ? `${m} min ${s} sec` : `${m} min`;
}

function computeResult(test, session) {
  const total = test.questions.length;
  let correct = 0;
  let wrong = 0;
  let unanswered = 0;
  for (const q of test.questions) {
    const a = session.answers[q.id];
    if (a === undefined || a === null) unanswered += 1;
    else if (a === q.correct) correct += 1;
    else wrong += 1;
  }
  return {
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    studentName: session.name,
    groupName: session.group || '',
    level: test.levelId,
    testId: test.id,
    testTitle: test.title,
    total,
    answered: total - unanswered,
    correct,
    wrong,
    unanswered,
    percent: Math.round((correct / total) * 100),
    answers: session.answers,
    startedAt: new Date(session.startedAt).toISOString(),
    finishedAt: new Date().toISOString(),
  };
}

export default function App() {
  const [session, setSession] = useState(() => loadSession());
  const sessionRef = useRef(session);
  const [view, setView] = useState({ page: 'home' });

  const update = useCallback((next) => {
    sessionRef.current = next;
    setSession(next);
    if (next) saveSession(next);
    else clearSession();
  }, []);

  useEffect(() => {
    flushPending();
  }, []);

  const finish = useCallback(() => {
    const s = sessionRef.current;
    if (!s || s.stage !== 'running') return;
    const test = findTest(s.testId);
    const result = computeResult(test, s);
    update({ ...s, stage: 'finished', result });
    submitResult(result);
  }, [update]);

  const exitToHome = () => {
    update(null);
    setView({ page: 'home' });
  };

  if (session && session.stage === 'running') {
    return <Runner session={session} update={update} finish={finish} />;
  }
  if (session && session.stage === 'finished') {
    return <Review session={session} onExit={exitToHome} />;
  }

  if (view.page === 'level') {
    return (
      <Shell>
        <LevelPage
          level={LEVELS.find((l) => l.id === view.levelId)}
          onBack={() => setView({ page: 'home' })}
          onOpen={(testId) => setView({ page: 'intro', testId })}
        />
      </Shell>
    );
  }
  if (view.page === 'intro') {
    const test = findTest(view.testId);
    return (
      <Shell>
        <Intro
          test={test}
          onBack={() => setView({ page: 'level', levelId: test.levelId })}
          onStart={(profile) => {
            saveProfile(profile);
            const now = Date.now();
            const seconds = test.questions.length * SECONDS_PER_QUESTION;
            update({
              stage: 'running',
              testId: test.id,
              name: profile.name,
              group: profile.group,
              startedAt: now,
              endsAt: now + seconds * 1000,
              answers: {},
              current: 0,
            });
          }}
        />
      </Shell>
    );
  }
  return (
    <Shell>
      <Home onOpen={(levelId) => setView({ page: 'level', levelId })} />
    </Shell>
  );
}

function Shell({ children }) {
  return (
    <div className="page">
      <header className="brand">EnglishFly</header>
      <main className="card">{children}</main>
    </div>
  );
}

function Home({ onOpen }) {
  return (
    <>
      <h1>English Tests</h1>
      <p className="muted">Choose your level</p>
      <div className="list">
        {LEVELS.map((l) => (
          <button key={l.id} className="item" onClick={() => onOpen(l.id)}>
            <span>🌸 {l.name}</span>
            <span className="muted">
              {l.tests.length ? `${l.tests.length} sections` : 'Coming soon'}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}

function LevelPage({ level, onBack, onOpen }) {
  return (
    <>
      <button className="link" onClick={onBack}>
        ← Back
      </button>
      <h1>{level.name}</h1>
      {level.tests.length === 0 ? (
        <p className="muted">Tests for this level are coming soon.</p>
      ) : (
        <div className="list">
          {level.tests.map((t) => (
            <button key={t.id} className="item" onClick={() => onOpen(t.id)}>
              <span>{t.title}</span>
              <span className="muted">{t.questions.length} questions</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function Intro({ test, onBack, onStart }) {
  const saved = loadProfile();
  const [name, setName] = useState(saved.name || '');
  const [group, setGroup] = useState(saved.group || '');
  const [error, setError] = useState('');
  const seconds = test.questions.length * SECONDS_PER_QUESTION;

  const start = () => {
    if (name.trim().length < 3) {
      setError('Please enter your full name.');
      return;
    }
    onStart({ name: name.trim(), group: group.trim() });
  };

  return (
    <>
      <button className="link" onClick={onBack}>
        ← Back
      </button>
      <h1>{test.title}</h1>
      <div className="stats">
        <div>
          <b>{test.questions.length}</b>
          <span>questions</span>
        </div>
        <div>
          <b>{describeDuration(seconds)}</b>
          <span>total time</span>
        </div>
      </div>
      <p className="muted small">
        The time limit applies to the whole test. You can move freely between questions and change your answers
        until you finish. Refreshing the page will not restart the timer.
      </p>
      <label className="field">
        Full name
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Ali Valiyev" />
      </label>
      <label className="field">
        Group (optional)
        <input value={group} onChange={(e) => setGroup(e.target.value)} placeholder="e.g. GR-1" />
      </label>
      {error && <p className="error">{error}</p>}
      <button className="primary" onClick={start}>
        Start test
      </button>
    </>
  );
}

function Runner({ session, update, finish }) {
  const test = findTest(session.testId);
  const qs = test.questions;
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 500);
    return () => clearInterval(t);
  }, []);

  const remaining = Math.max(0, Math.ceil((session.endsAt - now) / 1000));

  useEffect(() => {
    if (remaining <= 0) finish();
  }, [remaining, finish]);

  const q = qs[session.current];
  const selected = session.answers[q.id];

  const choose = (idx) =>
    update({ ...session, answers: { ...session.answers, [q.id]: idx } });
  const go = (i) => update({ ...session, current: Math.min(Math.max(i, 0), qs.length - 1) });

  const answeredCount = Object.keys(session.answers).length;

  const confirmFinish = () => {
    const left = qs.length - answeredCount;
    const msg = left
      ? `${left} question${left === 1 ? '' : 's'} not answered. Finish the test?`
      : 'Finish the test?';
    if (window.confirm(msg)) finish();
  };

  return (
    <div className="page">
      <div className="topbar">
        <span>
          {test.title} · {session.current + 1}/{qs.length}
        </span>
        <span className={`timer ${remaining <= 60 ? 'danger' : ''}`}>⏱ {formatTime(remaining)}</span>
      </div>
      <main className="card">
        <p className="section">{q.section}</p>
        <p className="muted small">{q.instruction}</p>
        {q.image && <img className="pic" src={q.image} alt="" />}
        {q.text && (
          <p className="qtext">
            <span className="qnum">{q.id}.</span> {q.text}
          </p>
        )}
        {!q.text && <p className="qtext"><span className="qnum">{q.id}.</span></p>}
        <div className="options">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={`option ${selected === i ? 'selected' : ''}`}
              onClick={() => choose(i)}
            >
              <span className="letter">{LETTERS[i]}</span>
              {opt}
            </button>
          ))}
        </div>
        <div className="nav">
          <button onClick={() => go(session.current - 1)} disabled={session.current === 0}>
            ← Previous
          </button>
          <button onClick={() => go(session.current + 1)} disabled={session.current === qs.length - 1}>
            Next →
          </button>
        </div>
        <div className="grid">
          {qs.map((x, i) => (
            <button
              key={x.id}
              className={`dot ${i === session.current ? 'current' : ''} ${
                session.answers[x.id] !== undefined ? 'done' : ''
              }`}
              onClick={() => go(i)}
            >
              {x.id}
            </button>
          ))}
        </div>
        <button className="finish" onClick={confirmFinish}>
          Finish test ({answeredCount}/{qs.length})
        </button>
      </main>
    </div>
  );
}

function Review({ session, onExit }) {
  const test = findTest(session.testId);
  const r = session.result;
  const [filter, setFilter] = useState('all');

  const status = (q) => {
    const a = session.answers[q.id];
    if (a === undefined) return 'unanswered';
    return a === q.correct ? 'correct' : 'wrong';
  };
  const shown = test.questions.filter((q) => filter === 'all' || status(q) === filter);

  return (
    <div className="page">
      <header className="brand">EnglishFly</header>
      <main className="card">
        <h1>
          {r.testTitle}: {r.percent}%
        </h1>
        <table className="table">
          <tbody>
            <tr><td>Total questions</td><td>{r.total}</td></tr>
            <tr><td>Answered</td><td>{r.answered}</td></tr>
            <tr><td>Correct answers</td><td className="ok">{r.correct}</td></tr>
            <tr><td>Wrong answers</td><td className="bad">{r.wrong}</td></tr>
            <tr><td>Unanswered</td><td>{r.unanswered}</td></tr>
            <tr><td>Score</td><td><b>{r.percent}%</b></td></tr>
          </tbody>
        </table>

        <div className="filters">
          {[
            ['all', 'All'],
            ['wrong', 'Wrong'],
            ['unanswered', 'Unanswered'],
            ['correct', 'Correct'],
          ].map(([key, label]) => (
            <button key={key} className={filter === key ? 'on' : ''} onClick={() => setFilter(key)}>
              {label}
            </button>
          ))}
        </div>

        {shown.map((q) => {
          const st = status(q);
          const a = session.answers[q.id];
          return (
            <div key={q.id} className="review-q">
              <p className="section">{q.section}</p>
              {q.image && <img className="pic small-pic" src={q.image} alt="" />}
              <p className="qtext">
                <span className="qnum">{q.id}.</span> {q.text}
                {st === 'unanswered' && <span className="tag">Unanswered</span>}
              </p>
              {q.options.map((opt, i) => {
                let cls = 'ropt';
                if (i === q.correct) cls += ' right';
                else if (i === a) cls += ' wrongpick';
                return (
                  <div key={i} className={cls}>
                    <span className="letter">{LETTERS[i]}</span>
                    {opt}
                    {i === q.correct && a === i && <span className="mark"> 🟢 your answer</span>}
                    {i === a && a !== q.correct && <span className="mark"> 🔴 your answer</span>}
                    {i === q.correct && a !== i && <span className="mark"> ✔ correct answer</span>}
                  </div>
                );
              })}
            </div>
          );
        })}

        <button className="primary" onClick={onExit}>
          Exit
        </button>
      </main>
    </div>
  );
}
