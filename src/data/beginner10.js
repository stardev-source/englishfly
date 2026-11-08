
// Beginner 10 = English File Beginner, File Test 11 (30 questions).
// correct: index of the right option (0 = A, 1 = B, 2 = C).
const L = { A: 0, B: 1, C: 2, D: 3 };

const G1 = { section: 'Grammar (1)', instruction: 'Choose the correct simple past form.' };
const G2 = { section: 'Grammar (2)', instruction: 'Choose the past simple form of the verb in brackets.' };
const VA = { section: 'Vocabulary (a)', instruction: 'Choose the correct verb in the past simple.' };
const VB = { section: 'Vocabulary (b)', instruction: 'Choose the correct word or phrase.' };
const PR = { section: 'Pronunciation', instruction: 'How is the -ed ending of this word pronounced?' };
const PE = { section: 'Practical English', instruction: 'Complete the directions with the correct words.' };

const ED = ['/d/ as in played', '/t/ as in liked', '/ɪd/ as in wanted'];

const rows = [
  // Grammar 1-5: past simple
  [G1, 'My father didn’t ________ the suitcases.', ['carry', 'carried'], 'A'],
  [G1, 'What time did you ________ to the supermarket?', ['went', 'go'], 'B'],
  [G1, 'It didn’t ________ yesterday.', ['rained', 'rain'], 'B'],
  [G1, 'Where ________ that dress? It’s beautiful.', ['did you get', 'you got'], 'A'],
  [G1, '________ have lunch at home?', ['Had you', 'Did you'], 'B'],
  // Grammar 6-10: past simple forms
  [G2, 'I ________ (study) Spanish at school.', ['studyed', 'studied', 'study'], 'B'],
  [G2, 'Roberto ________ (have) pasta for lunch.', ['had', 'haved', 'has'], 'A'],
  [G2, 'We ________ (go) to the museum last weekend.', ['goed', 'gone', 'went'], 'C'],
  [G2, 'They ________ (stop) to look at the views.', ['stopped', 'stoped', 'stop'], 'A'],
  [G2, 'Maggie ________ (get) a taxi to the airport really early this morning.', ['getted', 'get', 'got'], 'C'],

  // Vocabulary (a) 11-15: past simple verbs
  [VA, 'I ________ reading the book yesterday.', ['finished', 'answered', 'cried'], 'A'],
  [VA, 'Keiko ________ to stay at home.', ['cried', 'decided', 'rained'], 'B'],
  [VA, 'We ________ from London to Brussels by train.', ['travelled', 'finished', 'rained'], 'A'],
  [VA, 'They ________ at the end of the film.', ['rained', 'answered', 'cried'], 'C'],
  [VA, 'The weather was awful on our holiday. It ________ every day!', ['cried', 'travelled', 'rained'], 'C'],
  // Vocabulary (b) 16-20
  [VB, 'I usually ________ up late at the weekend.', ['have', 'get', 'go'], 'B'],
  [VB, 'Pat didn’t do her ________ after school.', ['homework', 'lunch', 'shower'], 'A'],
  [VB, 'We ________ out last night.', ['did', 'had', 'went'], 'C'],
  [VB, 'I love to do ________.', ['a coffee', 'to bed', 'yoga'], 'C'],
  [VB, '________ a nice day!', ['Do', 'Have', 'Get'], 'B'],

  // Pronunciation 21-25: -ed endings
  [PR, 'cooked', ED, 'B'],
  [PR, 'invited', ED, 'C'],
  [PR, 'lived', ED, 'A'],
  [PR, 'painted', ED, 'C'],
  [PR, 'relaxed', ED, 'B'],

  // Practical English 26-30: directions
  [PE, 'A: Where’s the bookshop, please?\nB: Go ________ then … It’s … the gym.', ['next to', 'straight on', 'between'], 'B'],
  [PE, 'A: Where’s the bookshop, please?\nB: Go … then ________. It’s … the gym.', ['on the left', 'between', 'turn right'], 'C'],
  [PE, 'A: Where’s the bookshop, please?\nB: Go … then … It’s ________ the gym.', ['straight on', 'turn right', 'next to'], 'C'],
  [PE, 'A: Excuse me. Is there a hotel near here?\nB: Yes. It’s ________. It’s … the bank and the cinema.', ['on the left', 'between', 'next to'], 'A'],
  [PE, 'A: Excuse me. Is there a hotel near here?\nB: Yes. It’s … . It’s ________ the bank and the cinema.', ['turn right', 'between', 'straight on'], 'B'],
];

export const beginner10 = rows
  .map(([meta, text, options, letter]) => ({
    section: meta.section,
    instruction: meta.instruction,
    text,
    options,
    correct: L[letter],
    image: null,
  }))
  .map((q, i) => ({ ...q, id: i + 1 }));