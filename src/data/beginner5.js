// Beginner 5 = English File Beginner, File Test 6 (30 questions).
// correct: index of the right option (0 = A, 1 = B, 2 = C).
const L = { A: 0, B: 1, C: 2, D: 3 };

const G1 = { section: 'Grammar (1)', instruction: 'Read about Pavel’s week. Choose always, usually, sometimes, or never.' };
const G2 = { section: 'Grammar (2)', instruction: 'Choose the correct word.' };
const VA = { section: 'Vocabulary (a)', instruction: 'Which place goes with the job?' };
const VB = { section: 'Vocabulary (b)', instruction: 'Complete the sentences about Sara.' };
const PA = { section: 'Pronunciation (a)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };
const PB = { section: 'Pronunciation (b)', instruction: 'Which word has a different sound?' };

const WEEK =
  'Pavel’s week (7 days):\n' +
  '• eat fast food: no days\n' +
  '• watch TV: Saturday and Sunday\n' +
  '• drink coffee: every day\n' +
  '• work late: Monday, Tuesday, Wednesday, Thursday\n\n';
const FREQ = ['always', 'usually', 'sometimes', 'never'];

const rows = [
  // Grammar 1-4: adverbs of frequency
  [G1, WEEK + 'Pavel ________ eats fast food.', FREQ, 'D'],
  [G1, WEEK + 'Pavel ________ watches TV.', FREQ, 'C'],
  [G1, WEEK + 'Pavel ________ drinks coffee.', FREQ, 'A'],
  [G1, WEEK + 'Pavel ________ works late.', FREQ, 'B'],
  // Grammar 5-10: do / does
  [G2, 'What ________ your wife do?', ['does', 'do'], 'A'],
  [G2, 'They ________ work late every evening.', ['don’t', 'doesn’t'], 'A'],
  [G2, 'My son ________ to university every day.', ['go', 'goes'], 'B'],
  [G2, 'Martina and her husband ________ French, English, and Italian.', ['speak', 'speaks'], 'A'],
  [G2, 'Jose and Maria ________ TV in the evening.', ['watch', 'watches'], 'A'],
  [G2, 'Amy ________ work at 5.00.', ['finish', 'finishes'], 'B'],

  // Vocabulary (a) 11-15: places and jobs
  [VA, 'waitress', ['restaurant', 'factory', 'school'], 'A'],
  [VA, 'policeman', ['office', 'street', 'hospital'], 'B'],
  [VA, 'teacher', ['school', 'factory', 'street'], 'A'],
  [VA, 'receptionist', ['restaurant', 'hospital', 'office'], 'C'],
  [VA, 'doctor', ['school', 'hospital', 'factory'], 'B'],
  // Vocabulary (b) 16-20: Sara
  [VB, 'Sara works in an office. She always ________ a shower in the morning.', ['have', 'has', 'eats'], 'B'],
  [VB, 'She ________ work at 8.15 in the morning.', ['starts', 'finishes', 'start'], 'A'],
  [VB, 'She ________ work at 4.00 in the afternoon.', ['finish', 'finishes', 'starts'], 'B'],
  [VB, 'Sara ________ a sandwich for lunch.', ['eat', 'eats', 'listens to'], 'B'],
  [VB, 'At night, Sara ________ the radio.', ['listens to', 'listen to', 'works'], 'A'],

  // Pronunciation (a) 21-26: word stress
  [PA, 'hospital', ['HOS-pi-tal', 'hos-PI-tal', 'hos-pi-TAL'], 'A'],
  [PA, 'assistant', ['AS-sis-tant', 'as-SIS-tant', 'as-sis-TANT'], 'B'],
  [PA, 'journalist', ['JOUR-na-list', 'jour-NA-list', 'jour-na-LIST'], 'A'],
  [PA, 'restaurant', ['RES-tau-rant', 'res-TAU-rant', 'res-tau-RANT'], 'A'],
  [PA, 'waiter', ['WAI-ter', 'wai-TER'], 'A'],
  [PA, 'receptionist', ['RE-cep-tion-ist', 're-CEP-tion-ist', 're-cep-TION-ist', 're-cep-tion-IST'], 'B'],
  // Pronunciation (b) 27-30: different sound
  [PB, '', ['takes', 'writes', 'does', 'likes'], 'C'],
  [PB, '', ['usually', 'yellow', 'beautiful', 'music'], 'B'],
  [PB, '', ['finishes', 'watches', 'teaches', 'likes'], 'D'],
  [PB, '', ['beautiful', 'student', 'young', 'usually'], 'C'],
];

export const beginner5 = rows
  .map(([meta, text, options, letter]) => ({
    section: meta.section,
    instruction: meta.instruction,
    text,
    options,
    correct: L[letter],
    image: null,
  }))
  .map((q, i) => ({ ...q, id: i + 1 }));