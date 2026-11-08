// Beginner 1 = English File Beginner, File Test 2 (30 questions).
// Fill-in-the-blank items from the original test were turned into multiple choice.
// correct: index of the right option (0 = A, 1 = B, 2 = C).
const L = { A: 0, B: 1, C: 2, D: 3 };

const G1 = { section: 'Grammar (1)', instruction: 'Choose the correct word to complete the questions.' };
const G2 = { section: 'Grammar (2)', instruction: 'Choose the correct word.' };
const VA = { section: 'Vocabulary (a)', instruction: 'Choose the correct way to write the number.' };
const VB = { section: 'Vocabulary (b)', instruction: 'Choose the correct option to complete the answer.' };
const PA = { section: 'Pronunciation (a)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };
const PB = { section: 'Pronunciation (b)', instruction: 'Which word has the same sound as the one in the question?' };

const rows = [
  // Grammar 1-5
  [G1, '________ you students?', ['Are', 'Is', 'Do'], 'A'],
  [G1, '________ old are they?', ['What', 'How', 'Who'], 'B'],
  [G1, 'A: ________ are you?\nB: Fine, thanks.', ['Where', 'What', 'How'], 'C'],
  [G1, 'A: ________ is Marco?\nB: He’s my friend.', ['Who', 'How', 'Where'], 'A'],
  [G1, '________ your phone number?', ['Where’s', 'What’s', 'How’s'], 'B'],
  // Grammar 6-10
  [G2, 'Are ________ Italian?', ['he', 'they'], 'B'],
  [G2, '________ from Canada?', ['Are you', 'You are'], 'A'],
  [G2, '________ aren’t English. Tom is from the USA, and Patricia is from Mexico.', ['You', 'They'], 'B'],
  [G2, 'A: Are you Turkish?\nB: No, we ________.', ['isn’t', 'aren’t'], 'B'],
  [G2, 'They are from Japan. ________ Japanese.', ['It’s', 'They’re'], 'B'],

  // Vocabulary (a) 11-15: numbers
  [VA, '75', ['seventeen', 'seventy-five', 'fifty-seven'], 'B'],
  [VA, '16', ['sixty', 'six', 'sixteen'], 'C'],
  [VA, '42', ['forty-two', 'fourteen', 'twenty-four'], 'A'],
  [VA, '13', ['thirty', 'thirteen', 'three'], 'B'],
  [VA, '30', ['thirteen', 'twenty', 'thirty'], 'C'],
  // Vocabulary (b) 16-20
  [VB, 'What’s your phone number?', ['K16 4PX', '01855 409 630'], 'B'],
  [VB, 'A: What’s your address?\nB: It’s ________.', ['16 Park Avenue', 'room 18'], 'A'],
  [VB, 'What’s your postcode?', ['01914 511203', 'M11 4XC'], 'B'],
  [VB, 'A: What nationality are you?\nB: I’m ________.', ['China', 'Chinese'], 'B'],
  [VB, 'A: What’s your email?\nB: It’s ________.', ['molly26@mail.com', '01214 755200'], 'A'],

  // Pronunciation (a) 21-25: word stress
  [PA, 'English', ['ENG-lish', 'eng-LISH'], 'A'],
  [PA, 'address', ['AD-dress', 'ad-DRESS'], 'B'],
  [PA, 'seventeen', ['SEVEN-teen', 'seven-TEEN'], 'B'],
  [PA, 'business', ['BUSI-ness', 'busi-NESS'], 'A'],
  [PA, 'sixty-two', ['SIX-ty-two', 'six-TY-two', 'six-ty-TWO'], 'C'],
  // Pronunciation (b) 26-30: same sound
  [PB, 'The sound “ch” in French', ['shower', 'teacher', 'jazz'], 'B'],
  [PB, 'The sound “G” in Germany', ['jazz', 'shower', 'no'], 'A'],
  [PB, 'The sound “h” in he', ['shower', 'city', 'house'], 'C'],
  [PB, 'The sound “ti” in Egyptian', ['teacher', 'shower', 'city'], 'B'],
  [PB, 'The sound “o” in zero', ['jazz', 'house', 'no'], 'C'],
];

export const beginner1 = rows.map(([meta, text, options, letter, image], i) => ({
  id: i + 1,
  section: meta.section,
  instruction: meta.instruction,
  text,
  options,
  correct: L[letter],
  image: image ? `/img/${image}.jpg` : null,
}));
