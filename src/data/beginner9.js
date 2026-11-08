// Beginner 9 = English File Beginner, File Test 10 (30 questions).
// correct: index of the right option (0 = A, 1 = B, 2 = C).
const L = { A: 0, B: 1, C: 2, D: 3 };

const G1 = { section: 'Grammar (1)', instruction: 'Choose the correct word.' };
const G2 = { section: 'Grammar (2)', instruction: 'Choose the correct word.' };
const VA = { section: 'Vocabulary (a)', instruction: 'Complete the sentences with in, on, or under.' };
const VB = { section: 'Vocabulary (b)', instruction: 'Complete the text about Paula with in, at, or on.' };
const PA = { section: 'Pronunciation (a)', instruction: 'Which word has a different sound?' };
const PB = { section: 'Pronunciation (b)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };

const PREP3 = ['in', 'on', 'under'];
const PREP_AT = ['in', 'at', 'on'];
const PAULA = 'Paula lives in Madrid.\n\n';

const rows = [
  // Grammar 1-5: there is / are, some / any
  [G1, 'There ________ great views from some of the rooms.', ['is', 'are'], 'B'],
  [G1, 'There ________ any people on the beach.', ['are', 'aren’t'], 'B'],
  [G1, 'There are ________ nice pictures on the wall.', ['some', 'any'], 'A'],
  [G1, 'Are there ________ tables in the garden?', ['some', 'any'], 'B'],
  [G1, 'There are ________ beautiful places to visit.', ['some', 'any'], 'A'],
  // Grammar 6-10: was / were
  [G2, '________ he late for work this morning?', ['Was', 'Were'], 'A'],
  [G2, 'We ________ at home yesterday. We were at the swimming pool.', ['were', 'weren’t'], 'B'],
  [G2, 'They ________ famous.', ['wasn’t', 'weren’t'], 'B'],
  [G2, 'Meg ________ in class yesterday.', ['wasn’t', 'weren’t'], 'A'],
  [G2, '________ you in Brazil on holiday last year?', ['Was', 'Were'], 'B'],

  // Vocabulary (a) 11-15: in / on / under
  [VA, 'My room was ________ the third floor of the hotel.', PREP3, 'B'],
  [VA, 'There was a nice place to sit ________ the trees.', PREP3, 'C'],
  [VA, 'When I travel, I put my clothes ________ a suitcase.', PREP3, 'A'],
  [VA, 'Let’s meet ________ the big clock in town.', PREP3, 'C'],
  [VA, 'Please don’t leave your clothes ________ the floor.', PREP3, 'B'],
  // Vocabulary (b) 16-20: in / at / on
  [VB, PAULA + 'She works ________ the university, but she doesn’t go to work every day.', PREP_AT, 'B'],
  [VB, 'Sometimes she works ________ home.', PREP_AT, 'B'],
  [VB, 'There’s a small room next to her bedroom and she works ________ this room.', PREP_AT, 'A'],
  [VB, 'Paula isn’t at home right now – she’s ________ a bus.', PREP_AT, 'C'],
  [VB, 'She wants to meet some friends ________ the bus stop in the city centre.', PREP_AT, 'B'],

  // Pronunciation (a) 21-25: different sound
  [PA, '', ['where', 'there', 'dear'], 'C'],
  [PA, '', ['near', 'repair', 'their'], 'A'],
  [PA, '', ['here', 'there', 'year'], 'B'],
  [PA, '', ['airport', 'we’re', 'where'], 'B'],
  [PA, '', ['idea', 'really', 'year'], 'A'],
  // Pronunciation (b) 26-30: word stress
  [PB, 'remember', ['RE-mem-ber', 're-MEM-ber', 're-mem-BER'], 'B'],
  [PB, 'beautiful', ['beau-TI-ful', 'BEAU-ti-ful', 'beau-ti-FUL'], 'B'],
  [PB, 'visitor', ['vis-i-TOR', 'VIS-i-tor', 'vis-I-tor'], 'B'],
  [PB, 'university', ['U-ni-ver-si-ty', 'u-NI-ver-si-ty', 'u-ni-VER-si-ty', 'u-ni-ver-SI-ty'], 'C'],
  [PB, 'century', ['cen-TU-ry', 'cen-tu-RY', 'CEN-tu-ry'], 'C'],
];

export const beginner9 = rows
  .map(([meta, text, options, letter]) => ({
    section: meta.section,
    instruction: meta.instruction,
    text,
    options,
    correct: L[letter],
    image: null,
  }))
  .map((q, i) => ({ ...q, id: i + 1 }));