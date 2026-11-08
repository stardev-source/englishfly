// Elementary 10 = English File Elementary (4th ed.), File Test 10 A (50 questions).
// No answer key was available, so the answers were worked out by hand.
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Complete the email with the correct form of going to and the words in brackets.' };
const G2 = { section: 'Grammar (2)', instruction: 'Complete the sentences with the superlative form of the adjective in brackets.' };
const G3 = { section: 'Grammar (3)', instruction: 'Complete the sentences with the correct form of going to and a verb.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Complete the phrase with the correct verb.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Complete the places.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Complete the sentences with the correct verb.' };
const P7 = { section: 'Pronunciation (1)', instruction: 'Find the word with a different sound.' };
const P8 = { section: 'Pronunciation (2)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };

const rows = [
  // ---- Grammar (1) 1-7: email (Martha to Jordan) ----
  [G1, 'It ________ (be) fantastic.', ['’s going to be', '’s going be', '’s be going to'], '’s going to be'],
  [G1, 'My parents ________ (pay) for the food and drink.', ['are going to pay', 'is going to pay', 'are going pay'], 'are going to pay'],
  [G1, 'I want to have some great music, so I ________ (find) a good DJ.', ['’m going to find', '’m going find', '’m going to finding'], '’m going to find'],
  [G1, 'My brother ________ (fly) to Switzerland with his girlfriend next week.', ['is going to fly', 'are going to fly', 'is going fly'], 'is going to fly'],
  [G1, 'My brother is away next week, so he ________ (not be) there.', ['isn’t going to be', 'aren’t going to be', 'doesn’t going to be'], 'isn’t going to be'],
  [G1, 'They ________ (climb) a mountain. It’s their dream holiday!', ['’re going to climb', '’s going to climb', '’re going climb'], '’re going to climb'],
  [G1, '________ (you / come) back to Cardiff on Friday?', ['Are you going to come', 'Do you going to come', 'You are going to come'], 'Are you going to come'],

  // ---- Grammar (2) 8-14: superlatives ----
  [G2, 'We were all worried but Magda was the ________ (worried).', ['most worried', 'worriedest', 'more worried'], 'most worried'],
  [G2, 'Who’s the ________ (good) guitarist in the band?', ['best', 'goodest', 'most good'], 'best'],
  [G2, 'My uncle’s the ________ (funny) person in my family.', ['funniest', 'most funny', 'funnyest'], 'funniest'],
  [G2, 'Malik’s the ________ (bad) tennis player I know.', ['worst', 'baddest', 'most bad'], 'worst'],
  [G2, 'The ________ (big) continent is Asia.', ['biggest', 'most big', 'bigest'], 'biggest'],
  [G2, 'Suzie bought the ________ (expensive) phone in the shop.', ['most expensive', 'expensivest', 'more expensive'], 'most expensive'],
  [G2, 'The ________ (young) person in our class is Timmy.', ['youngest', 'most young', 'younger'], 'youngest'],

  // ---- Grammar (3) 15-20: going to ----
  [G3, 'Hurry up! You ________ late for the lesson.', ['’re going to be', '’re going be', '’re be going to'], '’re going to be'],
  [G3, 'A: Where ________ for dinner?\nB: Let’s try that new Chinese restaurant.', ['are we going to go', 'we are going to go', 'do we going to go'], 'are we going to go'],
  [G3, 'It’s very cloudy. I think it ________ this afternoon.', ['’s going to rain', '’s going rain', 'goes to rain'], '’s going to rain'],
  [G3, 'A: My tablet is five years old.\nB: When ________ a new one?', ['are you going to buy', 'you are going to buy', 'do you going to buy'], 'are you going to buy'],
  [G3, 'A: Be careful with those glasses!\nB: Don’t worry. I ________ them.', ['’m not going to break', '’m not going break', 'don’t going to break'], '’m not going to break'],
  [G3, 'A: ________ her exams?\nB: I think so – she’s studying hard.', ['Is Jemima going to pass', 'Jemima is going to pass', 'Does Jemima going to pass'], 'Is Jemima going to pass'],

  // ---- Vocabulary (1) 21-27: verb phrases ----
  [V4, '________ famous', ['become', 'visit', 'book'], 'become'],
  [V4, '________ museums and art galleries', ['visit', 'meet', 'book'], 'visit'],
  [V4, '________ in love with someone', ['fall', 'become', 'get'], 'fall'],
  [V4, '________ house', ['move', 'book', 'visit'], 'move'],
  [V4, '________ a new job', ['get', 'become', 'fall'], 'get'],
  [V4, '________ new people', ['meet', 'book', 'fall'], 'meet'],
  [V4, '________ accommodation', ['book', 'move', 'meet'], 'book'],

  // ---- Vocabulary (2) 28-35: places ----
  [V5, 'You see paintings in an ________.', ['art gallery', 'bus station', 'zoo'], 'art gallery'],
  [V5, 'You can get a bus from a ________.', ['bus station', 'petrol station', 'police station'], 'bus station'],
  [V5, 'You can see animals in a ________.', ['zoo', 'theatre', 'hospital'], 'zoo'],
  [V5, 'You can use the ________ to go over the river.', ['bridge', 'square', 'park'], 'bridge'],
  [V5, 'You can see a doctor in a ________.', ['hospital', 'church', 'bank'], 'hospital'],
  [V5, 'You can see actors in a ________.', ['theatre', 'bank', 'castle'], 'theatre'],
  [V5, 'You can buy medicine in a ________.', ['chemist’s', 'cinema', 'café'], 'chemist’s'],
  [V5, 'You drive your car on a ________.', ['road', 'park', 'castle'], 'road'],

  // ---- Vocabulary (3) 36-40: past simple questions ----
  [V6, 'Did Louis ________ to Barcelona by bus?', ['go', 'have', 'buy'], 'go'],
  [V6, 'Did Beverly ________ in a hotel?', ['stay', 'go', 'buy'], 'stay'],
  [V6, 'Did she ________ a good time?', ['have', 'go', 'stay'], 'have'],
  [V6, 'Did you ________ out in local restaurants?', ['eat', 'buy', 'have'], 'eat'],
  [V6, 'Did they ________ souvenirs?', ['buy', 'go', 'stay'], 'buy'],

  // ---- Pronunciation (1) 41-45: different sound ----
  [P7, 'Which word has a different vowel sound?', ['square', 'park', 'castle', 'pharmacy'], 'square'],
  [P7, 'Which word has a different sound for “ch”?', ['church', 'China', 'chemist’s', 'chocolate'], 'chemist’s'],
  [P7, 'Which word has a different sound for “i” / “y”?', ['delicious', 'surprise', 'bridge', 'synagogue'], 'surprise'],
  [P7, 'Which word has a different sound for “c”?', ['centre', 'place', 'car', 'celebrate'], 'car'],
  [P7, 'Which word has a different sound for “s”?', ['museum', 'hospital', 'busy', 'zoo'], 'hospital'],

  // ---- Pronunciation (2) 46-50: word stress ----
  [P8, 'department', ['DE-part-ment', 'de-PART-ment', 'de-part-MENT'], 'de-PART-ment'],
  [P8, 'gallery', ['GAL-le-ry', 'gal-LE-ry', 'gal-le-RY'], 'GAL-le-ry'],
  [P8, 'future', ['FU-ture', 'fu-TURE'], 'FU-ture'],
  [P8, 'souvenir', ['SOU-ve-nir', 'sou-VE-nir', 'sou-ve-NIR'], 'sou-ve-NIR'],
  [P8, 'pharmacy', ['PHAR-ma-cy', 'phar-MA-cy', 'phar-ma-CY'], 'PHAR-ma-cy'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const elementary10 = rows.map(([meta, text, original, answer], i) => {
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