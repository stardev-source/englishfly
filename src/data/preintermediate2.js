// Pre-Intermediate 2 = English File Pre-intermediate (4th ed.), File Test 2 A (50 questions).
// There was no answer key for this test, so the answers were worked out by hand.
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Complete the sentences. Choose the past simple or the past continuous.' };
const G2 = { section: 'Grammar (2)', instruction: 'Complete the dialogue. Choose the correct form of the verb in brackets.' };
const G3 = { section: 'Grammar (3)', instruction: 'Complete the sentences with so, because, but, or although.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Choose the correct verb.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Complete the sentences with the correct word.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Complete the sentences with at, in, or on.' };
const P7 = { section: 'Pronunciation (1)', instruction: 'Which past form has the same sound?' };
const P8 = { section: 'Pronunciation (2)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };

const rows = [
  // ---- Grammar (1) 1-8: past simple / past continuous ----
  [G1, 'It ________ (not snow) when I went to bed.', ['wasn’t snowing', 'didn’t snow', 'weren’t snowing'], 'wasn’t snowing'],
  [G1, 'When ________ she ________ (pass) her driving test?', ['did she pass', 'was she passing', 'has she passed'], 'did she pass'],
  [G1, 'Silvana ________ (not come) to the theatre with us last night.', ['didn’t come', 'wasn’t coming', 'doesn’t come'], 'didn’t come'],
  [G1, 'What ________ you ________ (do) at six o’clock last night?', ['were you doing', 'did you do', 'are you doing'], 'were you doing'],
  [G1, 'I ________ (not study) when you rang.', ['wasn’t studying', 'didn’t study', 'don’t study'], 'wasn’t studying'],
  [G1, 'Last year they ________ (buy) a new house.', ['bought', 'were buying', 'buyed'], 'bought'],
  [G1, 'We ________ (see) Rachel at the restaurant yesterday.', ['saw', 'were seeing', 'seen'], 'saw'],
  [G1, '________ Davide ________ (wear) his suit when you saw him?', ['Was Davide wearing', 'Did Davide wearing', 'Were Davide wearing'], 'Was Davide wearing'],

  // ---- Grammar (2) 9-14: dialogue ----
  [G2, 'Lucy: Did you enjoy your trip to Italy?\nJean: I had a great time!\nLucy: That’s good. Where ________ (you stay)?', ['did you stay', 'were you staying', 'do you stay'], 'did you stay'],
  [G2, 'Jean: In a really nice hotel in Sorrento.\nLucy: Who ________ (you go) with?', ['did you go', 'were you go', 'you went'], 'did you go'],
  [G2, 'Jean: Hilde and Mel. We had a few problems while we were there.\nLucy: What ________ (happen)?', ['happened', 'did happen', 'was happen'], 'happened'],
  [G2, 'Jean: Mel lost her passport and her purse.\nLucy: Really? What ________ (she do)?', ['did she do', 'was she do', 'she did'], 'did she do'],
  [G2, 'Jean: We went to the police station.\nLucy: What ________ (they say)?', ['did they say', 'were they say', 'they said'], 'did they say'],
  [G2, 'Jean: Well – Mel’s things were there!\nLucy: That was lucky! Who ________ (find) them?', ['found', 'did find', 'was finding'], 'found'],

  // ---- Grammar (3) 15-20: so / because / but / although ----
  [G3, 'Amal doesn’t eat meat ________ he’s a vegetarian.', ['because', 'so', 'but', 'although'], 'because'],
  [G3, '________ the restaurant was expensive, the food was awful.', ['Although', 'Because', 'So', 'But'], 'Although'],
  [G3, 'Tomas doesn’t like his job, ________ he’s looking for another one.', ['so', 'because', 'although', 'but'], 'so'],
  [G3, 'It was a nice day, ________ we went to the beach.', ['so', 'because', 'although', 'but'], 'so'],
  [G3, 'They’re learning Spanish ________ they want to visit Argentina.', ['because', 'so', 'but', 'although'], 'because'],
  [G3, 'I invited Ian to the party, ________ he didn’t want to come.', ['but', 'so', 'because', 'although'], 'but'],

  // ---- Vocabulary (1) 21-27: verb phrases ----
  [V4, '________ across the road', ['run', 'meet', 'have'], 'run'],
  [V4, '________ a good time', ['have', 'leave', 'wait'], 'have'],
  [V4, '________ somebody to dinner', ['invite', 'give', 'drive'], 'invite'],
  [V4, '________ along the road', ['drive', 'wait', 'meet'], 'drive'],
  [V4, '________ in a hurry', ['be', 'run', 'play'], 'be'],
  [V4, '________ for a friend', ['wait', 'run', 'invite'], 'wait'],
  [V4, '________ a song', ['play', 'take', 'give'], 'play'],

  // ---- Vocabulary (2) 28-34: holidays ----
  [V5, 'You need a passport if you want to go ________.', ['abroad', 'by plane', 'on holiday'], 'abroad'],
  [V5, 'The food at the restaurant was ________.', ['delicious', 'comfortable', 'crowded'], 'delicious'],
  [V5, 'The weather was lovely. It was ________ every day.', ['sunny', 'foggy', 'cloudy'], 'sunny'],
  [V5, 'Julie and Andy ________ their flights online.', ['booked', 'hired', 'rented'], 'booked'],
  [V5, 'I ________ most of my time at the beach when I’m on holiday.', ['spend', 'buy', 'go'], 'spend'],
  [V5, 'Did you ________ any souvenirs when you were in Brazil?', ['buy', 'take', 'have'], 'buy'],
  [V5, 'We went ________ for a few days over Christmas.', ['away', 'by car', 'out'], 'away'],

  // ---- Vocabulary (3) 35-40: at / in / on ----
  [V6, 'What did you do ________ the weekend?', ['at', 'in', 'on'], 'at'],
  [V6, 'There was nowhere to sit ________ the train.', ['on', 'at', 'in'], 'on'],
  [V6, 'They played basketball ________ the morning.', ['in', 'at', 'on'], 'in'],
  [V6, 'Stefano was born ________ Rome.', ['in', 'at', 'on'], 'in'],
  [V6, 'They sat ________ the balcony.', ['on', 'at', 'in'], 'on'],
  [V6, 'We arrived ________ the bus stop just before the bus left.', ['at', 'in', 'on'], 'at'],

  // ---- Pronunciation (1) 41-45: same sound ----
  [P7, 'rented (the sound of “ed”)', ['started', 'asked', 'called', 'read'], 'started'],
  [P7, 'said (the sound of “ai”)', ['read', 'understood', 'asked', 'started'], 'read'],
  [P7, 'dog (the sound of “d”)', ['called', 'asked', 'started', 'understood'], 'called'],
  [P7, 'could (the sound of “ou”)', ['understood', 'called', 'read', 'asked'], 'understood'],
  [P7, 'tie (the sound of “t”)', ['asked', 'called', 'started', 'read'], 'asked'],

  // ---- Pronunciation (2) 46-50: word stress ----
  [P8, 'comfortable', ['COM-for-ta-ble', 'com-FOR-ta-ble', 'com-for-TA-ble', 'com-for-ta-BLE'], 'COM-for-ta-ble'],
  [P8, 'invite', ['IN-vite', 'in-VITE'], 'in-VITE'],
  [P8, 'apartment', ['A-part-ment', 'a-PART-ment', 'a-part-MENT'], 'a-PART-ment'],
  [P8, 'birthday', ['BIRTH-day', 'birth-DAY'], 'BIRTH-day'],
  [P8, 'abroad', ['A-broad', 'a-BROAD'], 'a-BROAD'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const preintermediate2 = rows.map(([meta, text, original, answer], i) => {
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