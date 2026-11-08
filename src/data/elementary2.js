// Elementary 2 = English File Elementary (4th ed.), File Test 2 A (50 questions).
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Choose the correct sentence.' };
const G2 = { section: 'Grammar (2)', instruction: 'Complete the sentences with the correct word or phrase.' };
const G3 = { section: 'Grammar (3)', instruction: 'Choose the correct word or phrase.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Complete the sentences with the correct word(s).' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Choose the correct word.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Choose the opposite.' };
const P7 = { section: 'Pronunciation (1)', instruction: 'Find the word with a different sound.' };
const P8 = { section: 'Pronunciation (2)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };

const rows = [
  // ---- Grammar (1) 1-8: correct sentence ----
  [G1, 'Which sentence is correct?', ['Three boxs of pens, please.', 'Three boxes of pens, please.'], 'Three boxes of pens, please.'],
  [G1, 'Which sentence is correct?', ['Dale and Amy are teachers.', 'Dale and Amy is teachers.'], 'Dale and Amy are teachers.'],
  [G1, 'Which sentence is correct?', ['It’s a orange lamp.', 'It’s an orange lamp.'], 'It’s an orange lamp.'],
  [G1, 'Which sentence is correct?', ['They’re diarys.', 'They’re diaries.'], 'They’re diaries.'],
  [G1, 'Which sentence is correct?', ['It’s a house.', 'It’s an house.'], 'It’s a house.'],
  [G1, 'Which sentence is correct?', ['I have two credits cards.', 'I have two credit cards.'], 'I have two credit cards.'],
  [G1, 'Which conversation is correct?', ['‘What is it?’ ‘It’s glasses.’', '‘What are they?’ ‘They’re glasses.’'], '‘What are they?’ ‘They’re glasses.’'],
  [G1, 'Which sentence is correct?', ['Joseph is student in my class.', 'Joseph is a student in my class.'], 'Joseph is a student in my class.'],

  // ---- Grammar (2) 9-14 ----
  [G2, 'Please ________ your car here.', ['don’t park', 'no park', 'not to park'], 'don’t park'],
  [G2, '________ quiet, children!', ['You', 'Are', 'Be'], 'Be'],
  [G2, '________ turn the radio on.', ['Let', 'Let’s', 'Let us to'], 'Let’s'],
  [G2, '________ my pizza!', ['No eat', 'Don’t eat', 'Eat not'], 'Don’t eat'],
  [G2, 'I’m thirsty. ________ stop at the café.', ['Let’s', 'Don’t', 'We'], 'Let’s'],
  [G2, '________ to me.', ['You are listen', 'Listen', 'Listen you'], 'Listen'],

  // ---- Grammar (3) 15-20 ----
  [G3, 'Is Ian Rankin a ________ writer?', ['Scottish', 'Scotland'], 'Scottish'],
  [G3, 'Are they ________?', ['very good teachers', 'teachers very good'], 'very good teachers'],
  [G3, 'The notebooks are ________.', ['cheap', 'cheaps'], 'cheap'],
  [G3, 'I ________ thirsty.', ['have', 'am'], 'am'],
  [G3, 'They have ________ phones.', ['expensives', 'expensive'], 'expensive'],
  [G3, 'It’s a ________.', ['day nice', 'nice day'], 'nice day'],

  // ---- Vocabulary (1) 21-27 ----
  [V4, 'My father has a ________ laptop.', ['young', 'easy', 'new'], 'new'],
  [V4, 'Where are the sandwiches? I’m ________.', ['worried', 'hungry', 'hot'], 'hungry'],
  [V4, 'Can you close the windows? We’re ________.', ['really cold', 'quite tired', 'very hot'], 'really cold'],
  [V4, 'Celia’s ________ old. She’s 103 this year.', ['lot', 'very', 'strong'], 'very'],
  [V4, 'The opposite of empty is ________.', ['dangerous', 'full', 'low'], 'full'],
  [V4, 'Her job is difficult and she’s very ________.', ['wrong', 'happy', 'stressed'], 'stressed'],
  [V4, 'Alma’s ________ tired.', ['high', 'really', 'big'], 'really'],

  // ---- Vocabulary (2) 28-33 ----
  [V5, 'Read the ________.', ['magazines', 'scissors'], 'magazines'],
  [V5, 'Write with a ________.', ['purse', 'pen'], 'pen'],
  [V5, 'Marco has coins in his ________.', ['wallet', 'notebook'], 'wallet'],
  [V5, 'This is the ________ for the door.', ['key', 'umbrella'], 'key'],
  [V5, 'They’re the ________ for my phone.', ['tissues', 'headphones'], 'headphones'],
  [V5, 'My ________ is on my identity card.', ['photo', 'file'], 'photo'],

  // ---- Vocabulary (3) 34-40: opposites ----
  [V6, 'cheap – ________', ['expensive', 'slow', 'strong'], 'expensive'],
  [V6, 'empty – ________', ['full', 'easy', 'dangerous'], 'full'],
  [V6, 'weak – ________', ['strong', 'slow', 'fantastic'], 'strong'],
  [V6, 'terrible – ________', ['fantastic', 'expensive', 'full'], 'fantastic'],
  [V6, 'difficult – ________', ['easy', 'dangerous', 'slow'], 'easy'],
  [V6, 'fast – ________', ['slow', 'full', 'strong'], 'slow'],
  [V6, 'safe – ________', ['dangerous', 'easy', 'expensive'], 'dangerous'],

  // ---- Pronunciation (1) 41-45: different sound ----
  [P7, 'Which word has a different sound?', ['car', 'lamp', 'black', 'cat'], 'car'],
  [P7, 'Which word has a different final sound?', ['scissors', 'magazines', 'purses', 'pens'], 'purses'],
  [P7, 'Which word has a different sound?', ['tall', 'bored', 'short', 'hot'], 'hot'],
  [P7, 'Which word has a different sound?', ['cheap', 'piece', 'easy', 'rich'], 'rich'],
  [P7, 'Which word has a different sound?', ['you', 'new', 'look', 'blue'], 'look'],

  // ---- Pronunciation (2) 46-50: word stress ----
  [P8, 'beautiful', ['BEAU-ti-ful', 'beau-TI-ful', 'beau-ti-FUL'], 'BEAU-ti-ful'],
  [P8, 'expensive', ['EX-pen-sive', 'ex-PEN-sive', 'ex-pen-SIVE'], 'ex-PEN-sive'],
  [P8, 'magazine', ['MA-ga-zine', 'ma-GA-zine', 'ma-ga-ZINE'], 'ma-ga-ZINE'],
  [P8, 'scissors', ['SCIS-sors', 'scis-SORS'], 'SCIS-sors'],
  [P8, 'difficult', ['DIF-fi-cult', 'dif-FI-cult', 'dif-fi-CULT'], 'DIF-fi-cult'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const elementary2 = rows.map(([meta, text, original, answer], i) => {
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