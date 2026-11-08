// Pre-Intermediate 8 = New English File Pre-intermediate (3rd ed.), File Test 8 A (50 questions).
// Parts used: Grammar, Vocabulary, Pronunciation. The source file has no answer key, so the answers were solved by hand.
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Choose the correct first conditional sentence.' };
const G2 = { section: 'Grammar (2)', instruction: 'Choose the correct word.' };
const G3 = { section: 'Grammar (3)', instruction: 'Complete the sentences with should and the words in brackets.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Choose the correct word(s).' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Complete the sentences with an adverb made from the adjective in brackets.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Complete the sentences with the correct phrase.' };
const P7 = { section: 'Pronunciation (1)', instruction: 'Choose the word which contains the sound /ʊ/ (as in should).' };
const P8 = { section: 'Pronunciation (2)', instruction: 'Choose the correct word stress. The stressed syllable is in CAPITAL letters.' };

const rows = [
  // ---- Grammar (1) 1-8: first conditional ----
  [G1, 'If Mark / ring / me / I / tell you', ['If Mark rings me, I’ll tell you.', 'If Mark will ring me, I tell you.', 'If Mark rang me, I’ll tell you.'], 'If Mark rings me, I’ll tell you.'],
  [G1, 'Yasuko / be / upset / if she / not pass / the exam', ['Yasuko will be upset if she doesn’t pass the exam.', 'Yasuko will be upset if she won’t pass the exam.', 'Yasuko would be upset if she doesn’t pass the exam.'], 'Yasuko will be upset if she doesn’t pass the exam.'],
  [G1, 'If you / catch / the 11.15 train / you / get / to London at 12.30', ['If you catch the 11.15 train, you’ll get to London at 12.30.', 'If you will catch the 11.15 train, you get to London at 12.30.', 'If you caught the 11.15 train, you’ll get to London at 12.30.'], 'If you catch the 11.15 train, you’ll get to London at 12.30.'],
  [G1, 'I / not be able / to go to work / if it / snow', ['I won’t be able to go to work if it snows.', 'I won’t be able to go to work if it will snow.', 'I’m not able to go to work if it snowed.'], 'I won’t be able to go to work if it snows.'],
  [G1, 'Maggie / arrive / on time / if she / take / a taxi', ['Maggie will arrive on time if she takes a taxi.', 'Maggie will arrive on time if she will take a taxi.', 'Maggie would arrive on time if she takes a taxi.'], 'Maggie will arrive on time if she takes a taxi.'],
  [G1, 'They / not go / to the beach / if it / rain', ['They won’t go to the beach if it rains.', 'They won’t go to the beach if it will rain.', 'They don’t go to the beach if it rained.'], 'They won’t go to the beach if it rains.'],
  [G1, 'If Chris / miss / the meeting / his boss / be / angry', ['If Chris misses the meeting, his boss will be angry.', 'If Chris will miss the meeting, his boss is angry.', 'If Chris missed the meeting, his boss will be angry.'], 'If Chris misses the meeting, his boss will be angry.'],
  [G1, 'If we / not take / a map / we / get / lost', ['If we don’t take a map, we’ll get lost.', 'If we won’t take a map, we’ll get lost.', 'If we don’t take a map, we got lost.'], 'If we don’t take a map, we’ll get lost.'],

  // ---- Grammar (2) 9-14: possessives ----
  [G2, 'Is this book ________ or your brother’s?', ['yours', 'your'], 'yours'],
  [G2, 'This isn’t our camera; it’s ________.', ['theirs', 'their'], 'theirs'],
  [G2, 'Have you seen ________ new computer?', ['her', 'hers'], 'her'],
  [G2, 'Dom and Kate have got a dog. ________ name is Scooby.', ['Their', 'Its'], 'Their'],
  [G2, 'That pen is ________! Give it to me!', ['mine', 'my'], 'mine'],
  [G2, 'I don’t know where the teacher is, but that’s ________ car.', ['his', 'hers'], 'his'],

  // ---- Grammar (3) 15-20: should ----
  [G3, '________ so fast. The roads are very icy. (you / not drive)', ['You shouldn’t drive', 'You don’t should drive', 'Should you not drive'], 'You shouldn’t drive'],
  [G3, 'If he wants to learn Spanish, ________ in Spain. (he / study)', ['he should study', 'he should to study', 'should he study'], 'he should study'],
  [G3, 'This computer is old. ________ a new one? (we / buy)', ['Should we buy', 'Do we should buy', 'We should buy'], 'Should we buy'],
  [G3, '________ to bed late. You’ve got an exam in the morning. (you / not go)', ['You shouldn’t go', 'You should not going', 'You don’t should go'], 'You shouldn’t go'],
  [G3, '________ nicer to each other. (people / be)', ['People should be', 'People should being', 'People are should be'], 'People should be'],
  [G3, 'What ________ about my noisy neighbours? (I / do)', ['should I do', 'I should do', 'do I should do'], 'should I do'],

  // ---- Vocabulary (1) 21-26 ----
  [V4, 'Matthew’s wife has ________ a birthday cake for him.', ['made', 'done'], 'made'],
  [V4, 'Is Fiona going to ________ her new dress for the party?', ['wear', 'carry'], 'wear'],
  [V4, 'I never ________ money from my friends.', ['borrow', 'lend'], 'borrow'],
  [V4, 'Nicole is a famous singer. She ________ a lot of money.', ['earns', 'wins'], 'earns'],
  [V4, 'We ________ Juan’s wife for the first time yesterday.', ['met', 'knew'], 'met'],
  [V4, 'I hate ________ for people when they’re late.', ['waiting', 'hoping'], 'waiting'],

  // ---- Vocabulary (2) 27-32: adverbs ----
  [V5, 'Sharon swims very ________. (good)', ['well', 'good', 'goodly'], 'well'],
  [V5, 'I can’t hear you when you speak ________. (quiet)', ['quietly', 'quiet', 'quieter'], 'quietly'],
  [V5, 'Andrei dances ________. (beautiful)', ['beautifully', 'beautiful', 'beautifulness'], 'beautifully'],
  [V5, 'The children smiled ________. (happy)', ['happily', 'happy', 'happyly'], 'happily'],
  [V5, 'The old man shouted ________ at the cats in his garden. (angry)', ['angrily', 'angry', 'angryly'], 'angrily'],
  [V5, 'Why do you always walk so ________? (slow)', ['slowly', 'slowing', 'slowness'], 'slowly'],

  // ---- Vocabulary (3) 33-40: get + phrase ----
  [V6, 'I don’t have any problems with my neighbours. I ________ them.', ['get on well with', 'get divorced', 'get presents'], 'get on well with'],
  [V6, 'If they leave work now, they’ll ________ by five o’clock.', ['get home', 'get fit', 'get divorced'], 'get home'],
  [V6, 'Do I have to ________ before I get on the bus?', ['get a ticket', 'get presents', 'get divorced'], 'get a ticket'],
  [V6, 'Mary and Joe have decided to ________. The wedding is in June.', ['get married', 'get emails', 'get fit'], 'get married'],
  [V6, 'If we ________ late, we’ll miss the train.', ['get up', 'get divorced', 'get emails'], 'get up'],
  [V6, 'I’m not very well at the moment, but I hope I’ll ________ before my holiday.', ['get better', 'get divorced', 'get emails'], 'get better'],
  [V6, 'People often ________ before interviews.', ['get nervous', 'get divorced', 'get presents'], 'get nervous'],
  [V6, 'He’s doing more exercise because he wants to ________.', ['get fit', 'get emails', 'get presents'], 'get fit'],

  // ---- Pronunciation (1) 41-45: /ʊ/ ----
  [P7, 'Which word contains the sound /ʊ/?', ['wood', 'food', 'young'], 'wood'],
  [P7, 'Which word contains the sound /ʊ/?', ['could', 'course', 'hour'], 'could'],
  [P7, 'Which word contains the sound /ʊ/?', ['football', 'computer', 'trousers'], 'football'],
  [P7, 'Which word contains the sound /ʊ/?', ['woman', 'young', 'food'], 'woman'],
  [P7, 'Which word contains the sound /ʊ/?', ['put', 'hour', 'course'], 'put'],

  // ---- Pronunciation (2) 46-50: word stress ----
  [P8, 'whisper', ['WHIS-per', 'whis-PER'], 'WHIS-per'],
  [P8, 'advice', ['ad-VICE', 'AD-vice'], 'ad-VICE'],
  [P8, 'decision', ['de-CI-sion', 'DE-ci-sion', 'de-ci-SION'], 'de-CI-sion'],
  [P8, 'easily', ['EA-si-ly', 'ea-SI-ly', 'ea-si-LY'], 'EA-si-ly'],
  [P8, 'conditional', ['con-DI-tio-nal', 'CON-di-tio-nal', 'con-di-TIO-nal', 'con-di-tio-NAL'], 'con-DI-tio-nal'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const preintermediate8 = rows.map(([meta, text, original, answer], i) => {
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