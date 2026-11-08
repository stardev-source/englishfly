// Beginner 3 = English File Beginner, File Test 4 (30 questions).
// correct: index of the right option (0 = A, 1 = B, 2 = C).
const L = { A: 0, B: 1, C: 2, D: 3 };

const G1 = { section: 'Grammar (1)', instruction: 'Choose the correct sentence.' };
const G2 = { section: 'Grammar (2)', instruction: 'Choose the correct word to complete the sentences.' };
const VA = { section: 'Vocabulary (a)', instruction: 'Choose the correct answer.' };
const VB = { section: 'Vocabulary (b)', instruction: 'Choose the correct word.' };
const PA = { section: 'Pronunciation (a)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };
const PB = { section: 'Pronunciation (b)', instruction: 'Which word has the same sound as the one in the question?' };

const rows = [
  // Grammar 1-5: correct sentence
  [G1, '', ['This is a restaurant expensive.', 'This is an expensive restaurant.'], 'B'],
  [G1, '', ['Your children are beautiful.', 'Your beautiful are children.'], 'A'],
  [G1, '', ['It’s Mexican food.', 'It’s food Mexican.'], 'A'],
  [G1, '', ['This is my parent’s car.', 'This is my parents’ car.'], 'B'],
  [G1, '', ['These are olds houses.', 'These are old houses.'], 'B'],
  // Grammar 6-10: possessive adjectives
  [G2, 'A: What’s your name?\nB: ________ name? Oh, it’s Gabriella.', ['My', 'Your', 'Her'], 'A'],
  [G2, 'This is my sister. ________ name is Dani.', ['His', 'Her', 'Their'], 'B'],
  [G2, 'The hotel is fantastic. ________ name is Ocean View.', ['Her', 'Their', 'Its'], 'C'],
  [G2, 'They’re my children. ________ names are Tomas and Vicente.', ['Our', 'Their', 'His'], 'B'],
  [G2, 'We have a new house. ________ new address is 5 Green Street.', ['Their', 'Your', 'Our'], 'C'],

  // Vocabulary (a) 11-15: opposites
  [VA, 'Is your t-shirt clean?', ['No, it’s dirty.', 'No, it’s ugly.'], 'A'],
  [VA, 'Is that car fast?', ['No, it’s slow.', 'No, it’s cheap.'], 'A'],
  [VA, 'Is that an expensive watch?', ['No, it’s a cheap watch.', 'No, it’s a long watch.'], 'A'],
  [VA, 'Is your house new?', ['No, it’s small.', 'No, it’s old.'], 'B'],
  [VA, 'Is the test easy?', ['No, it’s short.', 'No, it’s difficult.'], 'B'],
  // Vocabulary (b) 16-20: man / men / woman / women / child / children
  [VB, 'My father.', ['man', 'men', 'woman'], 'A'],
  [VB, 'My daughter. She’s two.', ['child', 'children', 'woman'], 'A'],
  [VB, 'My son and daughter.', ['child', 'children', 'women'], 'B'],
  [VB, 'My brother. He’s 19.', ['men', 'child', 'man'], 'C'],
  [VB, 'My grandfathers. They are 75 and 80.', ['man', 'men', 'women'], 'B'],

  // Pronunciation (a) 21-25: word stress
  [PA, 'father', ['FA-ther', 'fa-THER'], 'A'],
  [PA, 'family', ['FA-mi-ly', 'fa-MI-ly', 'fa-mi-LY'], 'A'],
  [PA, 'expensive', ['EX-pen-sive', 'ex-PEN-sive', 'ex-pen-SIVE'], 'B'],
  [PA, 'colour', ['CO-lour', 'co-LOUR'], 'A'],
  [PA, 'computer', ['COM-pu-ter', 'com-PU-ter', 'com-pu-TER'], 'B'],
  // Pronunciation (b) 26-30: same sound
  [PB, 'The sound “a” in family', ['man', 'father', 'short'], 'A'],
  [PB, 'The sound “a” in small', ['bags', 'short', 'father'], 'B'],
  [PB, 'The sound “a” in fast', ['man', 'brother', 'father'], 'C'],
  [PB, 'The sound “a” in woman (the last syllable)', ['computer', 'man', 'brother'], 'A'],
  [PB, 'The sound “u” in husband', ['short', 'computer', 'brother'], 'C'],
];

export const beginner3 = rows.map(([meta, text, options, letter]) => ({
  id: 0,
  section: meta.section,
  instruction: meta.instruction,
  text,
  options,
  correct: L[letter],
  image: null,
})).map((q, i) => ({ ...q, id: i + 1 }));