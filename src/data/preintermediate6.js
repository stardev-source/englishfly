// Pre-Intermediate 5 = English File Pre-intermediate (4th ed.), File Test 5 A (51 questions).
// The answers come from the official answer key (File Test 5 A, Answer Key).
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Choose the correct word(s).' };
const G2 = { section: 'Grammar (2)', instruction: 'Complete the sentences with the correct word or phrase.' };
const G3 = { section: 'Grammar (3)', instruction: 'Choose the correct superlative form of the adjective in brackets.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Complete the sentences with the correct word.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Choose the number or phrase that matches.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Choose the correct word.' };
const P7 = { section: 'Pronunciation (1)', instruction: 'Which word does NOT contain the sound given? The sound is written in CAPITAL letters.' };
const P8 = { section: 'Pronunciation (2)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };

const rows = [
  // ---- Grammar (1) 1-6: quantifiers ----
  [G1, 'Do your children eat ________ sweets?', ['a lot of', 'a little', 'much'], 'a lot of'],
  [G1, 'There’s too ________ salt in this soup.', ['much', 'few', 'many'], 'much'],
  [G1, 'He usually has a ________ sugar in his coffee.', ['little', 'few', 'enough'], 'little'],
  [G1, 'We have too ________ money. We can’t spend it!', ['much', 'many', 'too'], 'much'],
  [G1, 'Can I have ________ of your chips?', ['a few', 'much', 'many'], 'a few'],
  [G1, 'These shoes aren’t big ________.', ['enough', 'too', 'very'], 'enough'],

  // ---- Grammar (2) 7-13: comparatives ----
  [G2, 'Naomi works ________ David. David has too many breaks!', ['harder than', 'as hard as', 'more hard than'], 'harder than'],
  [G2, 'My shoes were ________ than yours. I got mine in the sale.', ['less expensive', 'lesser', 'as expensive'], 'less expensive'],
  [G2, 'This test isn’t ________ difficult as last week’s test.', ['as', 'more', 'too'], 'as'],
  [G2, 'I drive ________ than my father.', ['more carefully', 'more care', 'as carefully'], 'more carefully'],
  [G2, 'Our office is ________ this month than it was last month.', ['busier', 'more busy', 'the busiest'], 'busier'],
  [G2, 'Jack dances ________ than Francis.', ['worse', 'not as bad', 'less bad'], 'worse'],
  [G2, 'My team didn’t play ________ your team last night.', ['as well as', 'well than', 'so good than'], 'as well as'],

  // ---- Grammar (3) 14-20: superlatives ----
  [G3, 'Who’s ________ (good) teacher you’ve ever had?', ['the best', 'the goodest', 'the most good'], 'the best'],
  [G3, 'Alan’s ________ (friendly) boy I know. He talks to everybody!', ['the friendliest', 'the most friendly', 'the friendlyest'], 'the friendliest'],
  [G3, 'Is Russia ________ (big) country in the world?', ['the biggest', 'the bigest', 'the most big'], 'the biggest'],
  [G3, 'This is ________ (exciting) game I’ve ever played. I can’t stop playing it!', ['the most exciting', 'the excitingest', 'the more exciting'], 'the most exciting'],
  [G3, '________ (far) we’ve ever been is Hong Kong.', ['The furthest', 'The farest', 'The most far'], 'The furthest'],
  [G3, 'It was ________ (bad) film I’ve ever seen. It was terrible!', ['the worst', 'the baddest', 'the most bad'], 'the worst'],
  [G3, 'They stayed at ________ (expensive) hotel in town.', ['the most expensive', 'the expensivest', 'the more expensive'], 'the most expensive'],

  // ---- Vocabulary (1) 21-28: towns and cities ----
  [V4, 'Istanbul is an old city with lots of ________ buildings.', ['interesting', 'modern', 'noisy'], 'interesting'],
  [V4, 'There’s a ________ of a famous person outside the town hall.', ['statue', 'mosque', 'cathedral'], 'statue'],
  [V4, 'I usually buy fruit at the ________ because it’s cheaper.', ['market', 'palace', 'church'], 'market'],
  [V4, 'This is the ________ where the king or queen lives.', ['palace', 'temple', 'town hall'], 'palace'],
  [V4, 'My town has a ________ of around 150,000.', ['population', 'department store', 'coast'], 'population'],
  [V4, 'Hull is a big city ________ the river Humber.', ['on', 'in', 'over'], 'on'],
  [V4, 'There’s a lot of traffic in Mumbai, so it’s very ________.', ['polluted', 'clean', 'safe'], 'polluted'],
  [V4, 'Not many people go to the beach in winter. It’s usually completely ________.', ['empty', 'crowded', 'noisy'], 'empty'],

  // ---- Vocabulary (2) 29-34: numbers ----
  [V5, 'my house number', ['18', 'about 45 minutes', '0.5', 'at least 4'], '18'],
  [V5, 'cups of tea I drink every day', ['at least 4', '18', '26th August', 'over 50%'], 'at least 4'],
  [V5, 'average time for my lunch break at work', ['about 45 minutes', '0.5', '26th August', 'over 50%'], 'about 45 minutes'],
  [V5, 'percentage of overweight adults in the UK', ['over 50%', '18', 'about 45 minutes', '0.5'], 'over 50%'],
  [V5, 'date of my holiday', ['26th August', 'at least 4', '18', '0.5'], '26th August'],
  [V5, 'another way of writing half', ['0.5', 'over 50%', '18', 'at least 4'], '0.5'],

  // ---- Vocabulary (3) 35-41: health ----
  [V6, 'Sunbathing makes your ________ change colour.', ['skin', 'bones', 'feet'], 'skin'],
  [V6, 'It is a good idea to brush your ________ for two minutes, twice a day.', ['teeth', 'eyes', 'fingers'], 'teeth'],
  [V6, 'Eating food that is high in fat can ________ heart disease.', ['cause', 'make', 'add to'], 'cause'],
  [V6, 'I have an ________ lifestyle. I run every day.', ['active', 'anxious', 'lazy'], 'active'],
  [V6, 'It’s not a good idea to eat a lot of ________ food.', ['fast', 'quick', 'slow'], 'fast'],
  [V6, 'She doesn’t have a ________ diet. She eats lots of cakes.', ['healthy', 'bad', 'thin'], 'healthy'],
  [V6, 'Drinking black tea ________ stress.', ['reduces', 'suggests', 'contradicts'], 'reduces'],

  // ---- Pronunciation (1) 42-46: odd sound out ----
  [P7, '/ʌ/ (as in “up”)', ['Up', 'mOney', 'mUch', 'pollUted'], 'pollUted'],
  [P7, '/k/ (as in “castle”)', ['Castle', 'Cathedral', 'Cinema', 'mosQUE'], 'Cinema'],
  [P7, '/ə/ (the weak vowel sound)', ['reportER', 'TERRible', 'dangERous', 'biggER'], 'TERRible'],
  [P7, '/e/ (as in “egg”)', ['Egg', 'musEum', 'Empty', 'hEAlth'], 'musEum'],
  [P7, '/uː/ (as in “fruit”)', ['frUIt', 'fOOd', 'statUE', 'gOOd'], 'gOOd'],

  // ---- Pronunciation (2) 47-51: word stress ----
  [P8, 'exciting', ['EX-ci-ting', 'ex-CI-ting', 'ex-ci-TING'], 'ex-CI-ting'],
  [P8, 'cathedral', ['CA-the-dral', 'ca-THE-dral', 'ca-the-DRAL'], 'ca-THE-dral'],
  [P8, 'palace', ['PA-lace', 'pa-LACE'], 'PA-lace'],
  [P8, 'interesting', ['IN-te-res-ting', 'in-TE-res-ting', 'in-te-RES-ting', 'in-te-res-TING'], 'IN-te-res-ting'],
  [P8, 'romantic', ['RO-man-tic', 'ro-MAN-tic', 'ro-man-TIC'], 'ro-MAN-tic'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const preintermediate6 = rows.map(([meta, text, original, answer], i) => {
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