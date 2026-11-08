// Elementary 8 = English File Elementary (4th ed.), File Test 8 A (56 questions).
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Complete the sentences with the correct word or phrase.' };
const G2 = { section: 'Grammar (2)', instruction: 'Choose the correct sentence or question with there is / there are. (positive) = +, (negative) = –, (question) = ?' };
const G3 = { section: 'Grammar (3)', instruction: 'Choose the correct word.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Choose the correct word or phrase.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Find the odd word out.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Choose the past simple form of the verb.' };
const P7 = { section: 'Pronunciation (1)', instruction: 'Find the word with a different sound.' };
const P8 = { section: 'Pronunciation (2)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };

const rows = [
  // ---- Grammar (1) 1-8: past simple ----
  [G1, 'Yesterday ________ Tuesday. Today is Wednesday.', ['is', 'did was', 'was'], 'was'],
  [G1, 'Stella ________ go out last night.', ['didn’t can', 'couldn’t', 'can’t'], 'couldn’t'],
  [G1, 'I ________ my phone last week.', ['lose', 'lost', 'losed'], 'lost'],
  [G1, 'What time ________ Greg leave?', ['was', 'is', 'did'], 'did'],
  [G1, 'We ________ to Madrid last year.', ['were', 'went', 'go'], 'went'],
  [G1, 'We ________ a terrible film on TV last Friday.', ['saw', 'see', '’re seeing'], 'saw'],
  [G1, '________ the football match at the weekend?', ['Did you watch', 'Watched you', 'You watched'], 'Did you watch'],
  [G1, 'Andy ________ a magazine on the train.', ['read', 'red', 'readed'], 'read'],

  // ---- Grammar (2) 9-14: there is / there are ----
  [G2, 'TV in the bedroom (–)', ['There isn’t a TV in the bedroom.', 'There aren’t a TV in the bedroom.', 'There isn’t TV in the bedroom.'], 'There isn’t a TV in the bedroom.'],
  [G2, 'swimming pool in the garden (+)', ['There’s a swimming pool in the garden.', 'There’s some swimming pool in the garden.', 'There are a swimming pool in the garden.'], 'There’s a swimming pool in the garden.'],
  [G2, 'ghosts in the house (–)', ['There aren’t any ghosts in the house.', 'There aren’t some ghosts in the house.', 'There isn’t any ghosts in the house.'], 'There aren’t any ghosts in the house.'],
  [G2, 'school in the village (?)', ['Is there a school in the village?', 'Are there a school in the village?', 'Is there school in the village?'], 'Is there a school in the village?'],
  [G2, 'fireplace in the living room (?)', ['Is there a fireplace in the living room?', 'Are there a fireplace in the living room?', 'Is there fireplace in the living room?'], 'Is there a fireplace in the living room?'],
  [G2, 'shops near our new house (+)', ['There are some shops near our new house.', 'There is some shops near our new house.', 'There are a shops near our new house.'], 'There are some shops near our new house.'],

  // ---- Grammar (3) 15-20 ----
  [G3, 'Was there ________ photo on the desk?', ['any', 'a'], 'a'],
  [G3, 'There ________ a good programme on TV last night.', ['was', 'were'], 'was'],
  [G3, 'Were there ________ people on the beach?', ['any', 'a'], 'any'],
  [G3, 'There ________ any food in the kitchen.', ['wasn’t', 'weren’t'], 'wasn’t'],
  [G3, '________ there a good restaurant near the hotel?', ['Were', 'Was'], 'Was'],
  [G3, 'A: Was there a ghost in your room?\nB: No, there ________.', ['wasn’t', 'weren’t'], 'wasn’t'],

  // ---- Vocabulary (1) 21-28: prepositions ----
  [V4, 'Don’t stand ________ the TV. I’m trying to watch this film.', ['behind', 'in front of'], 'in front of'],
  [V4, 'There’s a mirror ________ the fireplace.', ['above', 'under'], 'above'],
  [V4, 'I opened the door and walked ________ the room.', ['into', 'on'], 'into'],
  [V4, 'Their flat is ________ the café.', ['in front', 'opposite'], 'opposite'],
  [V4, 'Joanna put her phone ________ her bag.', ['out of', 'into'], 'into'],
  [V4, 'There’s a cupboard ________ the cooker.', ['between', 'under'], 'under'],
  [V4, 'Don’t run ________ the stairs!', ['into', 'down'], 'down'],
  [V4, 'Three women came ________ the door.', ['up', 'out of'], 'out of'],

  // ---- Vocabulary (2) 29-34: odd word out ----
  [V5, 'Which word is the odd one out?', ['study', 'hall', 'balcony', 'bedroom'], 'balcony'],
  [V5, 'Which word is the odd one out?', ['washing machine', 'microwave', 'armchair', 'fridge'], 'armchair'],
  [V5, 'Which word is the odd one out?', ['living room', 'dining room', 'shelf', 'garage'], 'shelf'],
  [V5, 'Which word is the odd one out?', ['sofa', 'wall', 'floor', 'ceiling'], 'sofa'],
  [V5, 'Which word is the odd one out?', ['bedroom', 'garden', 'living room', 'kitchen'], 'garden'],
  [V5, 'Which word is the odd one out?', ['study', 'ceiling', 'library', 'bathroom'], 'ceiling'],

  // ---- Vocabulary (3) 35-46: past simple forms ----
  [V6, 'fall – ________', ['fell', 'fallen', 'falled'], 'fell'],
  [V6, 'take – ________', ['took', 'taken', 'taked'], 'took'],
  [V6, 'say – ________', ['said', 'sayed', 'sad'], 'said'],
  [V6, 'buy – ________', ['bought', 'brought', 'buyed'], 'bought'],
  [V6, 'read – ________', ['read', 'readed', 'red'], 'read'],
  [V6, 'wear – ________', ['wore', 'worn', 'weared'], 'wore'],
  [V6, 'find – ________', ['found', 'finded', 'fund'], 'found'],
  [V6, 'eat – ________', ['ate', 'eaten', 'eated'], 'ate'],
  [V6, 'think – ________', ['thought', 'thinked', 'thaught'], 'thought'],
  [V6, 'get – ________', ['got', 'getted', 'gat'], 'got'],
  [V6, 'speak – ________', ['spoke', 'spoken', 'speaked'], 'spoke'],
  [V6, 'write – ________', ['wrote', 'written', 'writed'], 'wrote'],

  // ---- Pronunciation (1) 47-51: different sound ----
  [P7, 'Which word has a different vowel sound?', ['stairs', 'there', 'near', 'wear'], 'near'],
  [P7, 'Which word has a different vowel sound?', ['bought', 'could', 'thought', 'taught'], 'could'],
  [P7, 'Which word has a different vowel sound?', ['gave', 'saw', 'make', 'became'], 'saw'],
  [P7, 'Which word has a different vowel sound?', ['left', 'said', 'died', 'read'], 'died'],
  [P7, 'Which word has a different vowel sound?', ['got', 'was', 'lost', 'had'], 'had'],

  // ---- Pronunciation (2) 52-56: word stress ----
  [P8, 'bathroom', ['BATH-room', 'bath-ROOM'], 'BATH-room'],
  [P8, 'garage', ['GA-rage', 'ga-RAGE'], 'GA-rage'],
  [P8, 'under', ['UN-der', 'un-DER'], 'UN-der'],
  [P8, 'behind', ['BE-hind', 'be-HIND'], 'be-HIND'],
  [P8, 'opposite', ['OP-po-site', 'op-PO-site', 'op-po-SITE'], 'OP-po-site'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const elementary8 = rows.map(([meta, text, original, answer], i) => {
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