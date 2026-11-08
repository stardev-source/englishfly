// Beginner 11 = English File Beginner, File Test 12 (30 questions).
// correct: index of the right option (0 = A, 1 = B, 2 = C).
const L = { A: 0, B: 1, C: 2, D: 3 };

const G1 = { section: 'Grammar (1)', instruction: 'Choose the correct past simple form.' };
const G2 = { section: 'Grammar (2)', instruction: 'Complete the dialogue between Helen and Mark.' };
const VA = { section: 'Vocabulary (a)', instruction: 'Choose the correct past tense form of the verb.' };
const VB = { section: 'Vocabulary (b)', instruction: 'Choose the correct word.' };
const PA = { section: 'Pronunciation (a)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };
const PB = { section: 'Pronunciation (b)', instruction: 'Which word has a different sound?' };

const HOLIDAY = 'Helen: Hi Mark! How was your holiday?\nMark: It was fantastic!\n\n';

const rows = [
  // Grammar 1-5: past simple
  [G1, 'Ben ________ a new pair of shoes last week. (buy)', ['bought', 'buyed', 'buy'], 'A'],
  [G1, 'I ________ a long email to Maxine. (write)', ['writed', 'written', 'wrote'], 'C'],
  [G1, 'Martina ________ a taxi home last night. (not get)', ['didn’t get', 'didn’t got', 'not got'], 'A'],
  [G1, 'Sam ________ anything to me. (not say)', ['didn’t said', 'didn’t say', 'not say'], 'B'],
  [G1, 'Jack ________ his job application to the company yesterday. (send)', ['sent', 'sended', 'send'], 'A'],
  // Grammar 6-10: dialogue
  [G2, HOLIDAY + 'We ________ to Türkiye.', ['went', 'was', 'stayed'], 'A'],
  [G2, 'Mark: Yes, it was amazing. We ________ a great time.', ['visited', 'had', 'bought'], 'B'],
  [G2, 'Mark: The first week we ________ at a lovely hotel near the beach.', ['was', 'went', 'stayed'], 'C'],
  [G2, 'Mark: …and then we ________ some friends in the south of the country.', ['visited', 'stayed', 'bought'], 'A'],
  [G2, 'Mark: Oh, I ________ you a souvenir. Now, where is it?', ['stayed', 'bought', 'went'], 'B'],

  // Vocabulary (a) 11-15: past tense verbs
  [VA, 'We ________ for an hour, but she didn’t come.', ['waited', 'exchanged', 'told'], 'A'],
  [VA, 'Toni ________ some money at the airport.', ['sat', 'told', 'exchanged'], 'C'],
  [VA, 'My sister ________ to Canada last year.', ['told', 'moved', 'sat'], 'B'],
  [VA, 'I ________ you not to say that!', ['told', 'moved', 'waited'], 'A'],
  [VA, 'A famous actor ________ next to me on the train.', ['moved', 'exchanged', 'sat'], 'C'],
  // Vocabulary (b) 16-20
  [VB, 'We ________ a taxi home last night.', ['did', 'got', 'went'], 'B'],
  [VB, 'I didn’t have ________ this morning.', ['breakfast', 'sport', 'up early'], 'A'],
  [VB, 'We ________ lots of housework last weekend.', ['did', 'got', 'went'], 'A'],
  [VB, 'We checked ________ the hotel yesterday.', ['at', 'into', 'onto'], 'B'],
  [VB, 'Steve didn’t go ________ last night.', ['home', 'homework', 'housework'], 'A'],

  // Pronunciation (a) 21-25: word stress
  [PA, 'concert', ['CON-cert', 'con-CERT'], 'A'],
  [PA, 'evening', ['eve-NING', 'EVE-ning'], 'B'],
  [PA, 'classical', ['clas-si-CAL', 'clas-SI-cal', 'CLAS-si-cal'], 'C'],
  [PA, 'holiday', ['HOL-i-day', 'ho-LI-day', 'ho-li-DAY'], 'A'],
  [PA, 'expensive', ['EX-pen-sive', 'ex-PEN-sive', 'ex-pen-SIVE'], 'B'],
  // Pronunciation (b) 26-30: different sound
  [PB, '', ['looked', 'stopped', 'waited'], 'C'],
  [PB, '', ['bought', 'saw', 'was'], 'C'],
  [PB, '', ['hated', 'liked', 'needed'], 'B'],
  [PB, '', ['got', 'went', 'was'], 'B'],
  [PB, '', ['played', 'cooked', 'watched'], 'A'],
];

export const beginner11 = rows
  .map(([meta, text, options, letter]) => ({
    section: meta.section,
    instruction: meta.instruction,
    text,
    options,
    correct: L[letter],
    image: null,
  }))
  .map((q, i) => ({ ...q, id: i + 1 }));