import { useEffect, useMemo, useState } from 'react';
import { collection, deleteDoc, doc, getDocs, writeBatch } from 'firebase/firestore';
import { db } from './firebase.js';
import { LEVELS, findTest } from './data/tests.js';

// Teacher password. Set VITE_TEACHER_PASSWORD in Vercel (Settings -> Environment Variables).
const PASSWORD = import.meta.env.VITE_TEACHER_PASSWORD || 'teacher123';
const AUTH_KEY = 'ef_teacher_ok';
const LETTERS = ['A', 'B', 'C', 'D', 'E'];

function formatDate(iso) {
  if (!iso) return '-';
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? '-' : d.toLocaleString();
}

function studentKey(r) {
  return `${(r.studentName || '').trim().toLowerCase()}|${(r.groupName || '').trim().toLowerCase()}`;
}

// Overall result: for every test take the latest attempt, then total correct / total questions.
function summarize(results) {
  const latest = new Map();
  for (const r of results) {
    const prev = latest.get(r.testId);
    if (!prev || (r.finishedAt || '') > (prev.finishedAt || '')) latest.set(r.testId, r);
  }
  let correct = 0;
  let total = 0;
  for (const r of latest.values()) {
    correct += r.correct;
    total += r.total;
  }
  return {
    testsDone: latest.size,
    attempts: results.length,
    overall: total ? Math.round((correct / total) * 100) : null,
    last: results.reduce((a, r) => ((r.finishedAt || '') > a ? r.finishedAt : a), ''),
  };
}

function downloadCsv(rows) {
  const head = ['Student', 'Group', 'Level', 'Test', 'Total', 'Correct', 'Wrong', 'Unanswered', 'Percent', 'Date'];
  const esc = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const lines = [head.map(esc).join(',')];
  for (const r of rows) {
    lines.push(
      [r.studentName, r.groupName, r.level, r.testTitle, r.total, r.correct, r.wrong, r.unanswered, r.percent, formatDate(r.finishedAt)]
        .map(esc)
        .join(',')
    );
  }
  const blob = new Blob(['\ufeff' + lines.join('\n')], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'results.csv';
  a.click();
  URL.revokeObjectURL(url);
}
// Delete many results at once (Firestore allows up to 500 operations per batch).
async function deleteResults(list) {
  for (let i = 0; i < list.length; i += 400) {
    const batch = writeBatch(db);
    for (const r of list.slice(i, i + 400)) batch.delete(doc(db, 'results', r.id));
    await batch.commit();
  }
}
export default function Teacher() {
    // Delete many results at once (Firestore allows up to 500 operations per batch).
async function deleteResults(list) {
  for (let i = 0; i < list.length; i += 400) {
    const batch = writeBatch(db);
    for (const r of list.slice(i, i + 400)) batch.delete(doc(db, 'results', r.id));
    await batch.commit();
  }
}
  const [ok, setOk] = useState(() => sessionStorage.getItem(AUTH_KEY) === '1');
  if (!ok) {
    return (
      <Login
        onOk={() => {
          sessionStorage.setItem(AUTH_KEY, '1');
          setOk(true);
        }}
      />
    );
  }
  return (
    <Panel
      onLogout={() => {
        sessionStorage.removeItem(AUTH_KEY);
        setOk(false);
      }}
    />
  );
}

function Login({ onOk }) {
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const submit = () => {
    if (pw === PASSWORD) onOk();
    else setError('Wrong password.');
  };
  return (
    <div className="page">
      <header className="brand">EnglishFly · Teacher</header>
      <main className="card">
        <h1>Teacher panel</h1>
        <label className="field">
          Password
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button className="primary" onClick={submit}>
          Log in
        </button>
        <p className="muted small">
          <a href="#/">← Back to tests</a>
        </p>
      </main>
    </div>
  );
}

function Panel({ onLogout }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [tab, setTab] = useState('students');
  const [search, setSearch] = useState('');
  const [group, setGroup] = useState('');
  const [testId, setTestId] = useState('');
  const [student, setStudent] = useState(null); // studentKey
  const [openResult, setOpenResult] = useState(null);

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const snap = await getDocs(collection(db, 'results'));
      const list = snap.docs.map((d) => ({ ...d.data(), id: d.id }));
      list.sort((a, b) => (b.finishedAt || '').localeCompare(a.finishedAt || ''));
      setResults(list);
    } catch (e) {
      setError('Could not load results. Check your internet connection and Firestore rules.');
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const groups = useMemo(
    () => [...new Set(results.map((r) => (r.groupName || '').trim()).filter(Boolean))].sort(),
    [results]
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return results.filter(
      (r) =>
        (!q || (r.studentName || '').toLowerCase().includes(q)) &&
        (!group || (r.groupName || '').trim() === group) &&
        (!testId || r.testId === testId)
    );
  }, [results, search, group, testId]);

  const students = useMemo(() => {
    const map = new Map();
    for (const r of filtered) {
      const key = studentKey(r);
      if (!map.has(key)) map.set(key, { key, name: r.studentName, group: r.groupName || '', results: [] });
      map.get(key).results.push(r);
    }
    return [...map.values()]
      .map((s) => ({ ...s, ...summarize(s.results) }))
      .sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  }, [filtered]);

  const remove = async (r) => {
    if (!window.confirm(`Delete this result (${r.studentName}, ${r.testTitle}, ${r.percent}%)?`)) return;
    try {
      await deleteDoc(doc(db, 'results', r.id));
      setResults((list) => list.filter((x) => x.id !== r.id));
      setOpenResult(null);
    } catch {
      window.alert('Could not delete the result.');
    }
  };
  // Remove deleted results from the screen.
  const dropFromScreen = (list) => {
    const ids = new Set(list.map((r) => r.id));
    setResults((prev) => prev.filter((r) => !ids.has(r.id)));
  };

  // Ask the teacher to type a word before a big delete.
  const confirmTyped = (message, expected) => {
    const typed = window.prompt(`${message}\n\nType  ${expected}  to confirm:`);
    if (typed === null) return false;
    if (typed.trim() !== expected) {
      window.alert('Text did not match. Nothing was deleted.');
      return false;
    }
    return true;
  };

   const bulkDelete = async (list, message, expected) => {
    if (!list.length || !confirmTyped(message, expected)) return false;
    try {
      await deleteResults(list);
      dropFromScreen(list);
      return true;
    } catch (e) {
      window.alert('Could not delete: ' + (e.code || e.message));
      return false;
    }
  };

  // Delete the whole group: every student, every test.
  const removeGroup = async () => {
    const list = results.filter((r) => (r.groupName || '').trim() === group);
    const done = await bulkDelete(
      list,
      `This will permanently delete ALL ${list.length} results of group "${group}" (every student and every test).`,
      group
    );
    if (done) setGroup('');
  };

  // Delete only the results that are currently shown (group + test + search filters).
  const removeShown = async () => {
    await bulkDelete(
      filtered,
      `This will permanently delete the ${filtered.length} results that are shown now.`,
      'DELETE'
    );
  };

  // Delete all results of one student.
  const removeStudent = async (s) => {
    const list = results.filter((r) => studentKey(r) === s.key);
    const done = await bulkDelete(
      list,
      `This will permanently delete ALL ${list.length} results of ${s.name}.`,
      'DELETE'
    );
    if (done) setStudent(null);
  };
  // ---- single result view ----
  if (openResult) {
    return <ResultDetail result={openResult} onBack={() => setOpenResult(null)} onDelete={() => remove(openResult)} />;
  }

  // ---- single student view ----
  if (student) {
    const s = students.find((x) => x.key === student);
    if (s) {
      return (
        <div className="page wide">
          <header className="brand">EnglishFly · Teacher</header>
          <main className="card">
            <button className="link" onClick={() => setStudent(null)}>
              ← All students
            </button>
            <h1>{s.name}</h1>
            <p className="muted">
              Group: {s.group || '-'} · Tests completed: {s.testsDone} · Overall: {s.overall === null ? '-' : `${s.overall}%`}
            </p>
            <ResultsTable rows={s.results} onOpen={setOpenResult} hideStudent />
                 <ResultsTable rows={s.results} onOpen={setOpenResult} hideStudent />
            <button className="finish" onClick={() => removeStudent(s)}>
              Delete all results of this student
            </button>
          </main>
        </div>
      );
    }
  }

  return (
    <div className="page wide">
      <header className="brand">EnglishFly · Teacher</header>
      <main className="card">
        <div className="row-between">
          <h1>Results</h1>
          <div className="row-gap">
            <button className="small-btn" onClick={load} disabled={loading}>
              {loading ? 'Loading…' : 'Refresh'}
            </button>
            <button className="small-btn" onClick={() => downloadCsv(filtered)} disabled={!filtered.length}>
              Download CSV
            </button>
            <button className="small-btn" onClick={onLogout}>
              Log out
            </button>
          </div>
        </div>

        <div className="filters-row">
          <input placeholder="Search by name…" value={search} onChange={(e) => setSearch(e.target.value)} />
          <select value={group} onChange={(e) => setGroup(e.target.value)}>
            <option value="">All groups</option>
            {groups.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          <select value={testId} onChange={(e) => setTestId(e.target.value)}>
            <option value="">All tests</option>
            {LEVELS.flatMap((l) => l.tests).map((t) => (
              <option key={t.id} value={t.id}>
                {t.title}
              </option>
            ))}
          </select>
        </div>
        {(group || search.trim() || testId) && (
          <div className="danger-row">
            {group && (
              <button className="danger-btn" onClick={removeGroup}>
                Delete group “{group}” ({results.filter((r) => (r.groupName || '').trim() === group).length} results)
              </button>
            )}
            {(search.trim() || testId || group) && filtered.length > 0 && (
              <button className="danger-btn" onClick={removeShown}>
                Delete shown results ({filtered.length})
              </button>
            )}
          </div>
        )}
        <div className="filters">
          <button className={tab === 'students' ? 'on' : ''} onClick={() => setTab('students')}>
            Students ({students.length})
          </button>
          <button className={tab === 'all' ? 'on' : ''} onClick={() => setTab('all')}>
            All results ({filtered.length})
          </button>
        </div>

        {error && <p className="error">{error}</p>}
        {!error && !loading && results.length === 0 && <p className="muted">No results yet.</p>}

        {tab === 'students' ? (
          <div className="table-wrap">
            <table className="data">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Group</th>
                  <th>Tests completed</th>
                  <th>Overall</th>
                  <th>Last test</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.key} className="clickable" onClick={() => setStudent(s.key)}>
                    <td>{s.name}</td>
                    <td>{s.group || '-'}</td>
                    <td>{s.testsDone}</td>
                    <td>{s.overall === null ? '-' : `${s.overall}%`}</td>
                    <td>{formatDate(s.last)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <ResultsTable rows={filtered} onOpen={setOpenResult} />
        )}
        <p className="muted small">
          Overall = total correct answers ÷ total questions, using each student’s latest attempt of every test.
        </p>
      </main>
    </div>
  );
}

function ResultsTable({ rows, onOpen, hideStudent }) {
  return (
    <div className="table-wrap">
      <table className="data">
        <thead>
          <tr>
            {!hideStudent && <th>Student</th>}
            {!hideStudent && <th>Group</th>}
            <th>Test</th>
            <th>Correct</th>
            <th>Wrong</th>
            <th>Unanswered</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="clickable" onClick={() => onOpen(r)}>
              {!hideStudent && <td>{r.studentName}</td>}
              {!hideStudent && <td>{r.groupName || '-'}</td>}
              <td>{r.testTitle}</td>
              <td className="ok">{r.correct}</td>
              <td className="bad">{r.wrong}</td>
              <td>{r.unanswered}</td>
              <td>
                <b>{r.percent}%</b>
              </td>
              <td>{formatDate(r.finishedAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ResultDetail({ result: r, onBack, onDelete }) {
  const test = findTest(r.testId);
  const answers = r.answers || {};
  const [filter, setFilter] = useState('all');

  const status = (q) => {
    const a = answers[q.id];
    if (a === undefined || a === null) return 'unanswered';
    return a === q.correct ? 'correct' : 'wrong';
  };
  const shown = test ? test.questions.filter((q) => filter === 'all' || status(q) === filter) : [];

  return (
    <div className="page wide">
      <header className="brand">EnglishFly · Teacher</header>
      <main className="card">
        <button className="link" onClick={onBack}>
          ← Back
        </button>
        <h1>
          {r.studentName} · {r.testTitle}: {r.percent}%
        </h1>
        <p className="muted">
          Group: {r.groupName || '-'} · {formatDate(r.finishedAt)} · Correct {r.correct} · Wrong {r.wrong} · Unanswered{' '}
          {r.unanswered}
        </p>

        {!test ? (
          <p className="error">This test is no longer in the app, so the questions cannot be shown.</p>
        ) : (
          <>
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
              const a = answers[q.id];
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
                        {i === q.correct && a === i && <span className="mark"> 🟢 student’s answer</span>}
                        {i === a && a !== q.correct && <span className="mark"> 🔴 student’s answer</span>}
                        {i === q.correct && a !== i && <span className="mark"> ✔ correct answer</span>}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </>
        )}
        <button className="finish" onClick={onDelete}>
          Delete this result
        </button>
      </main>
    </div>
  );
}