// Pre-Intermediate 3 = English File Pre-intermediate (4th ed.), File Test 3 A (50 questions).
// There was no answer key for this test, so the answers were worked out by hand.
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Choose the correct sentence about a future arrangement (present continuous).' };
const G2 = { section: 'Grammar (2)', instruction: 'Complete the sentences with who, which, or where.' };
const G3 = { section: 'Grammar (3)', instruction: 'Complete the sentences. Choose the correct form of going to.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Complete the airport words in the sentences.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Complete the sentences with the correct word or phrase.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Complete the phrases with the correct preposition.' };
const P7 = { section: 'Pronunciation (1)', instruction: 'Which word has the same sound?' };
const P8 = { section: 'Pronunciation (2)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };

const rows = [
  // ---- Grammar (1) 1-6: present continuous for future ----
  [G1, 'I / spend / New Year’s Eve in Scotland', ['I’m spending New Year’s Eve in Scotland.', 'I spend New Year’s Eve in Scotland.', 'I’m spend New Year’s Eve in Scotland.'], 'I’m spending New Year’s Eve in Scotland.'],
  [G1, 'we / not go / away at Christmas', ['We’re not going away at Christmas.', 'We not going away at Christmas.', 'We doesn’t go away at Christmas.'], 'We’re not going away at Christmas.'],
  [G1, 'they / travel / to Basel on Saturday', ['They’re travelling to Basel on Saturday.', 'They travelling to Basel on Saturday.', 'They’re travel to Basel on Saturday.'], 'They’re travelling to Basel on Saturday.'],
  [G1, 'when / Simon / get a new car ?', ['When is Simon getting a new car?', 'When Simon is getting a new car?', 'When does Simon getting a new car?'], 'When is Simon getting a new car?'],
  [G1, 'I / not have / dinner with Marco tonight', ['I’m not having dinner with Marco tonight.', 'I not having dinner with Marco tonight.', 'I’m not have dinner with Marco tonight.'], 'I’m not having dinner with Marco tonight.'],
  [G1, 'where / you / meet Qianru ?', ['Where are you meeting Qianru?', 'Where you are meeting Qianru?', 'Where do you meeting Qianru?'], 'Where are you meeting Qianru?'],

  // ---- Grammar (2) 7-12: who / which / where ----
  [G2, '‘Café’ is a word ________ comes from the Spanish word ‘cafetera’.', ['which', 'who', 'where'], 'which'],
  [G2, 'This is the restaurant ________ we had dinner.', ['where', 'which', 'who'], 'where'],
  [G2, 'Kangaroos are animals ________ live in Australia.', ['which', 'who', 'where'], 'which'],
  [G2, 'A shop assistant is a person ________ serves you in a shop.', ['who', 'which', 'where'], 'who'],
  [G2, 'A snack bar is a place ________ you can get a drink or a meal.', ['where', 'who', 'which'], 'where'],
  [G2, 'He’s the man ________ lives next door to my grandparents.', ['who', 'which', 'where'], 'who'],

  // ---- Grammar (3) 13-20: going to ----
  [G3, 'One day I ________ (travel) around the world.', ['am going to travel', 'am going travel', 'going to travel'], 'am going to travel'],
  [G3, 'What ________ you ________ (do) when you leave university?', ['are you going to do', 'do you going to do', 'are you go to do'], 'are you going to do'],
  [G3, 'It’s very late. We ________ (not finish) this report today.', ['aren’t going to finish', 'don’t going to finish', 'aren’t going finish'], 'aren’t going to finish'],
  [G3, 'Do you think Hasad ________ (pass) his exams?', ['is going to pass', 'are going to pass', 'is going pass'], 'is going to pass'],
  [G3, 'Hurry up! We ________ (miss) the train.', ['are going to miss', 'is going to miss', 'going to miss'], 'are going to miss'],
  [G3, 'You don’t need an umbrella. It ________ (not rain).', ['isn’t going to rain', 'aren’t going to rain', 'doesn’t going to rain'], 'isn’t going to rain'],
  [G3, 'I don’t want to go to the party. I know I ________ (not enjoy) it.', ['am not going to enjoy', 'don’t going to enjoy', 'am not going enjoy'], 'am not going to enjoy'],
  [G3, 'How long ________ Janos and Aisa ________ (stay) in Turkey?', ['are Janos and Aisa going to stay', 'is Janos and Aisa going to stay', 'do Janos and Aisa going to stay'], 'are Janos and Aisa going to stay'],

  // ---- Vocabulary (1) 21-27: airport words ----
  [V4, 'Which t________ do international flights leave from?', ['terminal', 'ticket', 'timetable'], 'terminal'],
  [V4, 'Flight 0342 to Rome leaves from g________ number 15.', ['gate', 'garage', 'guide'], 'gate'],
  [V4, 'After the flight they went to b________ reclaim to get their suitcases.', ['baggage', 'boarding', 'bags'], 'baggage'],
  [V4, 'We went through passport c________ before we got on the plane.', ['control', 'check', 'customs'], 'control'],
  [V4, 'I can’t carry all these bags. I need a t________.', ['trolley', 'ticket', 'taxi'], 'trolley'],
  [V4, 'She didn’t stop at c________ as she had nothing to declare.', ['customs', 'control', 'check-in'], 'customs'],
  [V4, 'You can take the l________ or the stairs to the next floor.', ['lift', 'lounge', 'luggage'], 'lift'],

  // ---- Vocabulary (2) 28-33: definitions ----
  [V5, 'Tidy is the ________ of untidy.', ['opposite', 'similar', 'kind', 'place'], 'opposite'],
  [V5, 'A dictionary has different uses, ________ you can use it to check pronunciation.', ['for example', 'opposite', 'similar', 'place'], 'for example'],
  [V5, 'An onion is a ________ of vegetable.', ['kind', 'place', 'something', 'similar'], 'kind'],
  [V5, 'A market is a ________ where you can buy fresh fruit and vegetables.', ['place', 'kind', 'opposite', 'somebody'], 'place'],
  [V5, 'A passport is ________ which you need when you travel abroad.', ['something', 'somebody', 'place', 'kind'], 'something'],
  [V5, 'Fat and overweight have a ________ meaning, but overweight is more polite.', ['similar', 'opposite', 'kind', 'place'], 'similar'],

  // ---- Vocabulary (3) 34-40: prepositions ----
  [V6, 'wait ________ a friend', ['for', 'to', 'at'], 'for'],
  [V6, 'fall ________ love with someone', ['in', 'on', 'at'], 'in'],
  [V6, 'worry ________ a problem', ['about', 'for', 'with'], 'about'],
  [V6, 'write an email ________ somebody', ['to', 'at', 'for'], 'to'],
  [V6, 'spend money ________ books', ['on', 'in', 'to'], 'on'],
  [V6, 'pay ________ a meal', ['for', 'to', 'at'], 'for'],
  [V6, 'disagree ________ somebody', ['with', 'to', 'for'], 'with'],

  // ---- Pronunciation (1) 41-45: same sound ----
  [P7, 'sights (the sound of “gh”)', ['sign', 'general', 'garden', 'emergency'], 'sign'],
  [P7, 'region (the sound of “g”)', ['general', 'garden', 'sign', 'organize'], 'general'],
  [P7, 'region (the sound of “g”)', ['emergency', 'garden', 'sign', 'organize'], 'emergency'],
  [P7, 'guide (the sound of “g”)', ['garden', 'general', 'sign', 'emergency'], 'garden'],
  [P7, 'guide (the sound of “g”)', ['organize', 'general', 'sign', 'emergency'], 'organize'],

  // ---- Pronunciation (2) 46-50: word stress ----
  [P8, 'passenger', ['PAS-sen-ger', 'pas-SEN-ger', 'pas-sen-GER'], 'PAS-sen-ger'],
  [P8, 'definition', ['DE-fi-ni-tion', 'de-FI-ni-tion', 'de-fi-NI-tion', 'de-fi-ni-TION'], 'de-fi-NI-tion'],
  [P8, 'baggage', ['BAG-gage', 'bag-GAGE'], 'BAG-gage'],
  [P8, 'departures', ['DE-par-tures', 'de-PAR-tures', 'de-par-TURES'], 'de-PAR-tures'],
  [P8, 'example', ['EX-am-ple', 'ex-AM-ple', 'ex-am-PLE'], 'ex-AM-ple'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const preintermediate3 = rows.map(([meta, text, original, answer], i) => {
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