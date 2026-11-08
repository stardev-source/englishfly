// Beginner 7 = English File Beginner, File Test 8 (30 questions).
// correct: index of the right option (0 = A, 1 = B, 2 = C).
const L = { A: 0, B: 1, C: 2, D: 3 };

const G1 = { section: 'Grammar (1)', instruction: 'Choose can or can’t to complete the dialogues.' };
const G2 = { section: 'Grammar (2)', instruction: 'Choose the correct verb + ing.' };
const VA = { section: 'Vocabulary (a)', instruction: 'Choose the correct word to complete the phrase.' };
const VB = { section: 'Vocabulary (b)', instruction: 'Choose the correct word.' };
const PA = { section: 'Pronunciation (a)', instruction: 'Which word has the same sound as the word in the question?' };
const PB = { section: 'Pronunciation (b)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };

const CAN = ['can', 'can’t'];

const rows = [
  // Grammar 1-5: can / can't
  [G1, 'A: When ________ you come?\nB: I can come at 10 o’clock.', CAN, 'A'],
  [G1, 'A: Can your sister speak English?\nB: No, she ________.', CAN, 'B'],
  [G1, 'A: Can we take photos in the museum?\nB: No, you ________.', CAN, 'B'],
  [G1, 'A: Can you help me?\nB: Yes. I ________.', CAN, 'A'],
  [G1, 'A: Oh no! We ________ park here.\nB: Don’t worry! We can park over there.', CAN, 'B'],
  // Grammar 6-10: verb + ing
  [G2, 'Mike loves ________ shopping.', ['going', 'swimming', 'watching'], 'A'],
  [G2, 'I really like ________ paella. It’s my favourite dish.', ['getting', 'cooking', 'driving'], 'B'],
  [G2, 'My husband hates ________ the car in the city.', ['swimming', 'going', 'driving'], 'C'],
  [G2, 'Do you like ________ in the sea?', ['swimming', 'cooking', 'getting'], 'A'],
  [G2, 'Jasmina doesn’t like ________ up early.', ['watching', 'getting', 'driving'], 'B'],

  // Vocabulary (a) 11-15: verb phrases
  [VA, '________ your mobile phone', ['park', 'use', 'pay'], 'B'],
  [VA, '________ money', ['change', 'park', 'pay'], 'A'],
  [VA, '________ by credit card', ['pay', 'park', 'change'], 'A'],
  [VA, '________ a coffee', ['change', 'have', 'park'], 'B'],
  [VA, '________ here', ['use', 'pay', 'park'], 'C'],
  // Vocabulary (b) 16-20
  [VB, 'I don’t always ________ clothes when I go shopping.', ['buy', 'make'], 'A'],
  [VB, 'We like ________ for walks at the weekend.', ['doing', 'going'], 'B'],
  [VB, 'Do you always ________ for your family?', ['cook', 'eat'], 'A'],
  [VB, 'My daughter loves ________ yoga.', ['doing', 'going'], 'A'],
  [VB, 'My parents hate ________ out at restaurants.', ['cooking', 'eating'], 'B'],

  // Pronunciation (a) 21-25: same sound
  [PA, 'food', ['school', 'book', 'cat'], 'A'],
  [PA, 'cook', ['car', 'book', 'going'], 'B'],
  [PA, 'singer', ['sorry', 'school', 'going'], 'C'],
  [PA, 'can', ['cat', 'car', 'book'], 'A'],
  [PA, 'can’t', ['cat', 'sorry', 'car'], 'C'],
  // Pronunciation (b) 26-30: word stress
  [PB, 'instructor', ['IN-struc-tor', 'in-STRUC-tor', 'in-struc-TOR'], 'B'],
  [PB, 'practical', ['PRAC-ti-cal', 'prac-TI-cal', 'prac-ti-CAL'], 'A'],
  [PB, 'cinema', ['CI-ne-ma', 'ci-NE-ma', 'ci-ne-MA'], 'A'],
  [PB, 'classical', ['CLAS-si-cal', 'clas-SI-cal', 'clas-si-CAL'], 'A'],
  [PB, 'disaster', ['DIS-as-ter', 'dis-AS-ter', 'dis-as-TER'], 'B'],
];

export const beginner7 = rows
  .map(([meta, text, options, letter]) => ({
    section: meta.section,
    instruction: meta.instruction,
    text,
    options,
    correct: L[letter],
    image: null,
  }))
  .map((q, i) => ({ ...q, id: i + 1 }));