// Beginner 6 = English File Beginner, File Test 7 (30 questions).
// correct: index of the right option (0 = A, 1 = B, 2 = C).
const L = { A: 0, B: 1, C: 2, D: 3 };

const G1 = { section: 'Grammar (1)', instruction: 'Choose me, you, him, her, it, us, or them.' };
const G2 = { section: 'Grammar (2)', instruction: 'Choose the correct question.' };
const VA = { section: 'Vocabulary (a)', instruction: 'Choose the correct verb to complete the phrase.' };
const VB = { section: 'Vocabulary (b)', instruction: 'Complete the sentences about kinds of films.' };
const PR = { section: 'Pronunciation', instruction: 'Which word has the same sound as the word in the question?' };
const PE = { section: 'Practical English', instruction: 'Choose the correct way to say the date (day/month).' };

const rows = [
  // Grammar 1-5: object pronouns
  [G1, 'A: Please call ________ tomorrow. I want to talk to you.\nB: OK. Is 10 o’clock a good time?', ['me', 'us', 'him'], 'A'],
  [G1, 'A: Do people in your family eat a lot of cheese?\nB: Yes, they do. They like ________ a lot.', ['them', 'it', 'her'], 'B'],
  [G1, 'A: You love your husband a lot, right?\nB: Yes, I really love ________.', ['her', 'him', 'them'], 'B'],
  [G1, 'A: What’s that? Is it for ________?\nB: Yes, coffee for you and me.', ['me', 'you', 'us'], 'C'],
  [G1, 'A: Are the children in the garden?\nB: I don’t see ________.', ['them', 'it', 'us'], 'A'],
  // Grammar 6-10: word order in questions
  [G2, 'favourite is your day what of part the', ['What is your favourite part of the day?', 'What your favourite is part of the day?', 'Is what your favourite part of the day?'], 'A'],
  [G2, 'you on up what Saturday time do get', ['What time you do get up on Saturday?', 'What time do you get up on Saturday?', 'What time do you up get on Saturday?'], 'B'],
  [G2, 'go out Friday you on nights do', ['Do you go on Friday nights out?', 'Do you go out on Friday nights?', 'You do go out on Friday nights?'], 'B'],
  [G2, 'relax you at how weekend do the', ['How you do relax at the weekend?', 'How do relax you at the weekend?', 'How do you relax at the weekend?'], 'C'],
  [G2, 'Marcus does Sundays when on have breakfast', ['When does Marcus have breakfast on Sundays?', 'When Marcus does have breakfast on Sundays?', 'When does have Marcus breakfast on Sundays?'], 'A'],

  // Vocabulary (a) 11-15: verb phrases
  [VA, '________ at night', ['go out', 'play', 'do'], 'A'],
  [VA, '________ friends', ['stay', 'meet', 'go out'], 'B'],
  [VA, '________ to the beach', ['go', 'stay', 'meet'], 'A'],
  [VA, '________ sport', ['do', 'go out', 'stay'], 'A'],
  [VA, '________ at home', ['go out', 'stay', 'meet'], 'B'],
  // Vocabulary (b) 16-20: kinds of films
  [VB, 'In a ________, there are men on horses and they have guns.', ['western', 'comedy', 'horror'], 'A'],
  [VB, 'Do you like ________?', ['dress', 'drama', 'draw'], 'B'],
  [VB, 'Lots of ________ films are set in space.', ['horror', 'western', 'science fiction'], 'C'],
  [VB, 'My brother doesn’t watch ________ films; they are too scary.', ['horror', 'comedy', 'animation'], 'A'],
  [VB, 'Tomb Raider and Mission Impossible are ________ films.', ['romantic', 'action', 'comedy'], 'B'],

  // Pronunciation 21-25
  [PR, 'who', ['how', 'always', 'town'], 'A'],
  [PR, 'sixth', ['how', 'Thursday', 'always'], 'B'],
  [PR, 'chair', ['town', 'where', 'Thursday'], 'B'],
  [PR, 'what', ['always', 'Thursday', 'how'], 'A'],
  [PR, 'out', ['Thursday', 'town', 'where'], 'B'],

  // Practical English 26-30: dates
  [PE, '22/07', ['the twenty-two of July', 'the twenty-second of July', 'the twentieth of July'], 'B'],
  [PE, '12/12', ['the twelfth of December', 'the twelve of December', 'the twelveth of December'], 'A'],
  [PE, '31/08', ['the thirty-first of August', 'the thirtieth of August', 'the thirty-one of August'], 'A'],
  [PE, '05/11', ['the five of November', 'the fifth of November', 'the fifteenth of November'], 'B'],
  [PE, '23/02', ['the twenty-three of February', 'the thirty-second of February', 'the twenty-third of February'], 'C'],
];

export const beginner6 = rows
  .map(([meta, text, options, letter]) => ({
    section: meta.section,
    instruction: meta.instruction,
    text,
    options,
    correct: L[letter],
    image: null,
  }))
  .map((q, i) => ({ ...q, id: i + 1 }));