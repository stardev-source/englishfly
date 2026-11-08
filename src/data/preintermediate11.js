// Pre-Intermediate 11 = English File Pre-intermediate (4th ed.), File Test 11 B (40 questions).
// This test has no Pronunciation part. The source file has no answer key, so the answers were solved by hand.
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Complete the sentences with used to, didn’t use to, or Did … use to.' };
const G2 = { section: 'Grammar (2)', instruction: 'Choose the sentence with might or might not that means the same.' };
const G3 = { section: 'Grammar (3)', instruction: 'Complete the dialogues with one word.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Complete the sentences with the correct word.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Choose the correct name of the school subject.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Use the noun made from the verb in brackets to complete the sentence.' };

const rows = [
  // ---- Grammar (1) 1-6: used to ----
  [G1, 'Where ________ live before you moved to Paris?', ['did you use to', 'did you used to', 'do you use to'], 'did you use to'],
  [G1, 'Amar ________ work in a factory but now he has a job in an office.', ['used to', 'use to', 'did use to'], 'used to'],
  [G1, 'Carole ________ be slim but she lost a lot of weight last year.', ['used to', 'use to', 'didn’t use to'], 'used to'],
  [G1, 'We ________ have a big house, but now we do.', ['didn’t use to', 'didn’t used to', 'used to'], 'didn’t use to'],
  [G1, 'There ________ be a cinema near my house, but now there isn’t.', ['used to', 'use to', 'didn’t use to'], 'used to'],
  [G1, '________ have short hair?', ['Did Samantha use to', 'Did Samantha used to', 'Does Samantha use to'], 'Did Samantha use to'],

  // ---- Grammar (2) 7-12: might / might not ----
  [G2, 'Perhaps we won’t go away this year.', ['We might not go away this year.', 'We not might go away this year.', 'We might not to go away this year.'], 'We might not go away this year.'],
  [G2, 'Perhaps my parents will buy me a car.', ['My parents might buy me a car.', 'My parents might to buy me a car.', 'My parents mights buy me a car.'], 'My parents might buy me a car.'],
  [G2, 'Perhaps he’ll phone me tomorrow.', ['He might phone me tomorrow.', 'He might phones me tomorrow.', 'He might to phone me tomorrow.'], 'He might phone me tomorrow.'],
  [G2, 'Perhaps I’ll meet someone interesting on holiday.', ['I might meet someone interesting on holiday.', 'I might meeting someone interesting on holiday.', 'I might to meet someone interesting on holiday.'], 'I might meet someone interesting on holiday.'],
  [G2, 'Perhaps Marcella won’t want to see you.', ['Marcella might not want to see you.', 'Marcella might not wants to see you.', 'Marcella not might want to see you.'], 'Marcella might not want to see you.'],
  [G2, 'Perhaps it will rain soon.', ['It might rain soon.', 'It might to rain soon.', 'It might raining soon.'], 'It might rain soon.'],

  // ---- Grammar (3) 13-20: so / neither ----
  [G3, 'A: I’m not from Scotland.\nB: Neither ________ I.', ['am', 'do', 'have'], 'am'],
  [G3, 'A: I was at work yesterday.\nB: So ________ I.', ['was', 'did', 'am'], 'was'],
  [G3, 'A: I don’t like fish.\nB: Neither ________ I.', ['do', 'am', 'did'], 'do'],
  [G3, 'A: I’ve read this book before.\nB: So ________ I.', ['have', 'do', 'did'], 'have'],
  [G3, 'A: I’d love to visit Cuba.\nB: So ________ I.', ['would', 'do', 'did'], 'would'],
  [G3, 'A: I can swim.\nB: So ________ I.', ['can', 'do', 'am'], 'can'],
  [G3, 'A: I didn’t do my homework.\nB: Neither ________ I.', ['did', 'do', 'was'], 'did'],
  [G3, 'A: I haven’t ever been camping.\nB: Neither ________ I.', ['have', 'do', 'am'], 'have'],

  // ---- Vocabulary (1) 21-26 ----
  [V4, 'Our names are very ________. He’s called Marcus and I’m called Mark.', ['similar', 'same', 'like'], 'similar'],
  [V4, 'Does Frank look ________ his father?', ['like', 'as', 'same'], 'like'],
  [V4, 'You’ve got the same mp3 player ________ my brother.', ['as', 'like', 'both'], 'as'],
  [V4, 'Anamika hates shopping and ________ does her brother.', ['so', 'similar', 'neither'], 'so'],
  [V4, 'Anna and Wendy are ________ good at maths.', ['both', 'neither', 'same'], 'both'],
  [V4, 'Borys and Cezar are ________. They look exactly the same.', ['identical', 'like', 'similar'], 'identical'],

  // ---- Vocabulary (2) 27-34: school subjects ----
  [V5, 'Mr Black taught us about different parts of the world.', ['geography', 'history', 'science'], 'geography'],
  [V5, 'They studied German and Russian at school.', ['foreign languages', 'literature', 'art'], 'foreign languages'],
  [V5, 'I loved reading poetry and novels.', ['literature', 'foreign languages', 'history'], 'literature'],
  [V5, 'Some students enjoyed learning about the past.', ['history', 'geography', 'literature'], 'history'],
  [V5, 'I was the worst in the class at computers.', ['information technology', 'maths', 'art'], 'information technology'],
  [V5, 'Jodie was interested in painting and drawing.', ['art', 'literature', 'physical education'], 'art'],
  [V5, 'Brian wasn’t very good at numbers.', ['maths', 'geography', 'information technology'], 'maths'],
  [V5, 'Jane was a fast runner and a good tennis player.', ['physical education', 'art', 'history'], 'physical education'],

  // ---- Vocabulary (3) 35-40: nouns ----
  [V6, 'Who won the national ________? (elect)', ['election', 'elector', 'electing'], 'election'],
  [V6, 'We have to make a ________ about our next holiday. (decide)', ['decision', 'decisive', 'deciding'], 'decision'],
  [V6, 'My grandmother did lots of interesting things during her ________. (live)', ['life', 'living', 'lives'], 'life'],
  [V6, 'Poppy’s ________ is the result of her hard work. (succeed)', ['success', 'successful', 'succession'], 'success'],
  [V6, 'I haven’t had an ________ to their wedding. (invite)', ['invitation', 'invite', 'inviting'], 'invitation'],
  [V6, 'If your ________ gets worse, you’ll have to wear glasses. (see)', ['sight', 'seeing', 'seen'], 'sight'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const preintermediate11 = rows.map(([meta, text, original, answer], i) => {
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