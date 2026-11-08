// Elementary 1 = English File Elementary (4th ed.), File Test 1 A (50 questions).
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Complete the sentences. Use contractions where possible.' };
const G2 = { section: 'Grammar (2)', instruction: 'Complete the sentences with the correct word.' };
const G3 = { section: 'Grammar (3)', instruction: 'Choose the correct word.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Complete the lists with the correct word.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Complete the chart with the correct word.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Complete the phrases with the correct verbs.' };
const P7 = { section: 'Pronunciation (1)', instruction: 'Which word has the same sound as the word in the question?' };
const P8 = { section: 'Pronunciation (2)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };

const rows = [
  // ---- Grammar (1) 1-8 ----
  [G1, '________ he a student?', ['Is', 'Are', 'Am'], 'Is'],
  [G1, 'A: Are ________ in our class?\nB: No, I’m not.', ['you', 'he', 'they'], 'you'],
  [G1, 'A: Where are ________ from?\nB: We’re from Egypt.', ['we', 'you', 'she'], 'you'],
  [G1, 'A: Is Anita Hungarian?\nB: Yes, ________ is.', ['she', 'he', 'it'], 'she'],
  [G1, 'The food isn’t Italian. ________’s Spanish.', ['It', 'He', 'They'], 'It'],
  [G1, 'A: Are they from Australia?\nB: No, they ________.', ['aren’t', 'isn’t', 'don’t'], 'aren’t'],
  [G1, 'We ________ English. We’re Scottish.', ['aren’t', 'isn’t', 'am not'], 'aren’t'],
  [G1, 'My name’s Ozgur. I ________ from Turkey.', ['’m', '’s', '’re'], '’m'],

  // ---- Grammar (2) 9-14 ----
  [G2, 'I’m Chinese. ________ family is from Shanghai.', ['My', 'Your', 'Their'], 'My'],
  [G2, 'They’re teachers. ________ names are Alison and Lucas.', ['His', 'Her', 'Their'], 'Their'],
  [G2, 'Filip’s Polish, but ________ mother is Czech.', ['his', 'their', 'she'], 'his'],
  [G2, 'We’re students. ________ teacher is Irish.', ['Their', 'Our', 'Your'], 'Our'],
  [G2, 'Nadia, please close ________ book.', ['you', 'your', 'you’re'], 'your'],
  [G2, 'It’s a hotel. ________ name is The New York Plaza.', ['His', 'Her', 'Its'], 'Its'],

  // ---- Grammar (3) 15-20 ----
  [G3, 'What’s ________ email address?', ['your', 'you'], 'your'],
  [G3, '________ mother is from Brazil.', ['They', 'Their'], 'Their'],
  [G3, 'Paris ________ the capital of France.', ['are', 'is'], 'is'],
  [G3, 'Pablo and Julieta ________ students.', ['aren’t', 'isn’t'], 'aren’t'],
  [G3, '________ name is Laura. She’s Italian.', ['Her', 'His'], 'Her'],
  [G3, '________ Julian and Anna from Switzerland?', ['Are', 'Is'], 'Are'],

  // ---- Vocabulary (1) 21-26 ----
  [V4, 'three, two, one, ________', ['five', 'four', 'zero'], 'zero'],
  [V4, 'Thursday, Friday, Saturday, ________', ['Monday', 'Sunday', 'Tuesday'], 'Sunday'],
  [V4, 'seventy, eighty, ninety, ________', ['one hundred', 'twenty', 'sixty'], 'one hundred'],
  [V4, 'two, four, six, ________', ['nine', 'eight', 'ten'], 'eight'],
  [V4, 'Saturday, Sunday, Monday, ________', ['Wednesday', 'Friday', 'Tuesday'], 'Tuesday'],
  [V4, 'thirty-seven, thirty-eight, thirty-nine, ________', ['fifty', 'forty', 'fourteen'], 'forty'],

  // ---- Vocabulary (2) 27-32: country / nationality ----
  [V5, 'Mexico – ________', ['Mexian', 'Mexican', 'Mexicon'], 'Mexican'],
  [V5, '________ – Italian', ['Italia', 'Italy', 'Italien'], 'Italy'],
  [V5, '________ – African', ['Africa', 'Afric', 'Afrik'], 'Africa'],
  [V5, 'Turkey – ________', ['Turkian', 'Turkish', 'Turkey'], 'Turkish'],
  [V5, 'France – ________', ['French', 'Francish', 'Frence'], 'French'],
  [V5, '________ – Japanese', ['Japon', 'Japan', 'Japane'], 'Japan'],

  // ---- Vocabulary (3) 33-40: classroom language ----
  [V6, '________ in pairs.', ['Work', 'Spell', 'Stop'], 'Work'],
  [V6, 'Please ________ to page 15.', ['go', 'answer', 'listen'], 'go'],
  [V6, '________ and repeat.', ['Open', 'Listen', 'Turn'], 'Listen'],
  [V6, '________ your book.', ['Do', 'Open', 'Work'], 'Open'],
  [V6, 'Please ________ talking!', ['spell', 'stop', 'go'], 'stop'],
  [V6, '________ exercises 1 and 2.', ['Do', 'Listen', 'Answer'], 'Do'],
  [V6, 'How do you ________ it?', ['open', 'stop', 'spell'], 'spell'],
  [V6, '________ the questions.', ['Answer', 'Turn', 'Work'], 'Answer'],

  // ---- Pronunciation (1) 41-45: same sound ----
  [P7, 'train', ['name', 'bike', 'tree'], 'name'],
  [P7, 'bye', ['egg', 'bike', 'this'], 'bike'],
  [P7, 'boot', ['you', 'name', 'egg'], 'you'],
  [P7, 'very', ['this', 'egg', 'bike'], 'egg'],
  [P7, 'fish', ['tree', 'you', 'this'], 'this'],

  // ---- Pronunciation (2) 46-50: word stress ----
  [P8, 'sandwich', ['SAND-wich', 'sand-WICH'], 'SAND-wich'],
  [P8, 'museum', ['MU-se-um', 'mu-SE-um', 'mu-se-UM'], 'mu-SE-um'],
  [P8, 'computer', ['COM-pu-ter', 'com-PU-ter', 'com-pu-TER'], 'com-PU-ter'],
  [P8, 'goodbye', ['GOOD-bye', 'good-BYE'], 'good-BYE'],
  [P8, 'airport', ['AIR-port', 'air-PORT'], 'AIR-port'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const elementary1 = rows.map(([meta, text, original, answer], i) => {
  if (!original.includes(answer)) throw new Error(`Question ${i + 1}: correct answer is not in the options`);
  const options = rotate(original, i);
  return {
    id: i + 1,
    section: meta.section,
    instruction: meta.instruction,
    text,
    options,
    correct: options.indexOf(answer),
    image: null,
  };
});