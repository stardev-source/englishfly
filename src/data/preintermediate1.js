// Pre-Intermediate 1 = English File Pre-intermediate (4th ed.), File Test 1 A (50 questions).
// There was no answer key for this test, so the answers were worked out by hand.
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Put the words in the correct order.' };
const G2 = { section: 'Grammar (2)', instruction: 'Complete Paloma’s email. Choose the present simple or present continuous.' };
const G3 = { section: 'Grammar (3)', instruction: 'Choose the correct word or phrase.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Choose the word that matches the definition.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Choose the correct preposition.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Complete the sentences with the correct word.' };
const P7 = { section: 'Pronunciation (1)', instruction: 'Which word has the same sound?' };
const P8 = { section: 'Pronunciation (2)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };

const rows = [
  // ---- Grammar (1) 1-6: word order ----
  [G1, 'read every do the day news headlines you ?', ['Do you read the news headlines every day?', 'Do you the news headlines read every day?', 'You do read the news headlines every day?'], 'Do you read the news headlines every day?'],
  [G1, 'wearing are they why tracksuits ?', ['Why are they wearing tracksuits?', 'Why they are wearing tracksuits?', 'Why are wearing they tracksuits?'], 'Why are they wearing tracksuits?'],
  [G1, 'cups many drink how of did tea you ?', ['How many cups of tea did you drink?', 'How many cups of tea you did drink?', 'How many tea of cups did you drink?'], 'How many cups of tea did you drink?'],
  [G1, 'musical can any instruments Eryk play ?', ['Can Eryk play any musical instruments?', 'Eryk can play any musical instruments?', 'Can Eryk any musical instruments play?'], 'Can Eryk play any musical instruments?'],
  [G1, 'to Tessa which does school go ?', ['Which school does Tessa go to?', 'Which school Tessa does go to?', 'Which does Tessa school go to?'], 'Which school does Tessa go to?'],
  [G1, 'are what studying you university at ?', ['What are you studying at university?', 'What you are studying at university?', 'What are you at university studying?'], 'What are you studying at university?'],

  // ---- Grammar (2) 7-14: Paloma's email ----
  [G2, 'Hi Cristina,\nMy name’s Paloma and I live in Madrid. I go to the cinema sometimes, but I ________ (love) the theatre.', ['love', 'am loving', 'loves'], 'love'],
  [G2, 'What about you? ________ you ________ (prefer) the cinema or the theatre?', ['Do you prefer', 'Are you preferring', 'Does you prefer'], 'Do you prefer'],
  [G2, 'I’m a student, but it’s the winter holidays, so now I ________ (not study).', ['am not studying', 'don’t study', 'not study'], 'am not studying'],
  [G2, 'I’m a student, but it’s the winter holidays. At the moment I ________ (work) in a shop.', ['am working', 'work', 'works'], 'am working'],
  [G2, 'I ________ (want) some extra money because I’m going to visit Russia next year!', ['want', 'am wanting', 'wants'], 'want'],
  [G2, 'I ________ (not speak) Russian very well,', ['don’t speak', 'am not speaking', 'doesn’t speak'], 'don’t speak'],
  [G2, 'I don’t speak Russian very well, so I ________ (have) some lessons.', ['am having', 'have', 'has'], 'am having'],
  [G2, '________ you ________ (learn) any languages at the moment?', ['Are you learning', 'Do you learn', 'Have you learn'], 'Are you learning'],

  // ---- Grammar (3) 15-20: underline the correct word ----
  [G3, 'All of my friends ________ good jobs.', ['have', 'has', 'are have'], 'have'],
  [G3, 'We ________ Julieta very well.', ['don’t know', 'doesn’t know', 'not know'], 'don’t know'],
  [G3, 'What time ________ work?', ['does Tarik finish', 'finishes Tarik', 'Tarik finishes'], 'does Tarik finish'],
  [G3, 'Listen! Someone ________ the violin.', ['is playing', 'playing', 'he’s playing'], 'is playing'],
  [G3, 'Tom and Kate ________ today.', ['aren’t working', 'not working', 'doesn’t work'], 'aren’t working'],
  [G3, 'Why ________ my laptop?', ['are you using', 'you’re using', 'you using'], 'are you using'],

  // ---- Vocabulary (1) 21-26: clothes definitions ----
  [V4, 'Jewellery you wear on your finger.', ['a ring', 'a bracelet', 'a scarf', 'tights'], 'a ring'],
  [V4, 'A jacket and a pair of trousers or a skirt.', ['a suit', 'a tracksuit', 'a coat', 'a T-shirt'], 'a suit'],
  [V4, 'A top you wear in summer.', ['a T-shirt', 'a coat', 'a scarf', 'a cap'], 'a T-shirt'],
  [V4, 'You wear them on your hands when it’s cold.', ['gloves', 'boots', 'sandals', 'tights'], 'gloves'],
  [V4, 'Winter footwear.', ['boots', 'sandals', 'gloves', 'tights'], 'boots'],
  [V4, 'You wear it over your clothes when you go out.', ['a coat', 'a T-shirt', 'a bracelet', 'a cap'], 'a coat'],

  // ---- Vocabulary (2) 27-32: prepositions ----
  [V5, 'There’s a big tree ________ our house.', ['behind', 'in front', 'in the middle of'], 'behind'],
  [V5, 'My son has posters ________ the walls of his bedroom.', ['on', 'in', 'between'], 'on'],
  [V5, 'My desk is the one ________ the window.', ['near', 'between', 'on the left'], 'near'],
  [V5, 'This is a photo of my family. That’s me ________ the middle.', ['in', 'on', 'to'], 'in'],
  [V5, 'Who’s the man standing ________ you in this photo?', ['behind', 'on the right', 'under'], 'behind'],
  [V5, 'There’s a table ________ my desk and the window.', ['between', 'on', 'in front'], 'between'],

  // ---- Vocabulary (3) 33-40: describing people ----
  [V6, 'He’s ________ height and a little bit overweight.', ['medium', 'short', 'tall'], 'medium'],
  [V6, 'Lydia never does any work! She’s very ________.', ['lazy', 'generous', 'hard-working'], 'lazy'],
  [V6, 'Tamsin’s very ________. She loves meeting new people.', ['extrovert', 'hard-working', 'clever'], 'extrovert'],
  [V6, 'Antonio is ________ because he doesn’t do any exercise.', ['overweight', 'thin', 'slim'], 'overweight'],
  [V6, 'My teacher’s really ________. She’s nice to everybody.', ['friendly', 'funny', 'mean'], 'friendly'],
  [V6, 'Jamie doesn’t have any hair. He’s ________.', ['bald', 'fair', 'blond'], 'bald'],
  [V6, 'Olga has ________ curly hair.', ['long', 'big', 'straight'], 'long'],
  [V6, 'David makes me laugh. He’s really ________.', ['funny', 'quiet', 'serious'], 'funny'],

  // ---- Pronunciation (1) 41-45: same sound ----
  [P7, 'friend (the sound of “ie”)', ['belt', 'occasion', 'hard-working', 'laughs'], 'belt'],
  [P7, 'university (the sound of “er”)', ['hard-working', 'wears', 'belt', 'laughs'], 'hard-working'],
  [P7, 'necklace (the sound of “a”)', ['occasion', 'belt', 'hard-working', 'laughs'], 'occasion'],
  [P7, 'trousers (the sound of the last “s”)', ['wears', 'laughs', 'occasion', 'belt'], 'wears'],
  [P7, 'boots (the sound of the last “s”)', ['laughs', 'wears', 'hard-working', 'occasion'], 'laughs'],

  // ---- Pronunciation (2) 46-50: word stress ----
  [P8, 'generous', ['GE-ne-rous', 'ge-NE-rous', 'ge-ne-ROUS'], 'GE-ne-rous'],
  [P8, 'unkind', ['UN-kind', 'un-KIND'], 'un-KIND'],
  [P8, 'overweight', ['O-ver-weight', 'o-VER-weight', 'o-ver-WEIGHT'], 'o-ver-WEIGHT'],
  [P8, 'accessory', ['AC-ces-so-ry', 'ac-CES-so-ry', 'ac-ces-SO-ry', 'ac-ces-so-RY'], 'ac-CES-so-ry'],
  [P8, 'cardigan', ['CAR-di-gan', 'car-DI-gan', 'car-di-GAN'], 'CAR-di-gan'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const preintermediate1 = rows.map(([meta, text, original, answer], i) => {
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