// Elementary 6 = English File Elementary (4th ed.), File Test 6 A (50 questions).
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Choose the correct word or phrase.' };
const G2 = { section: 'Grammar (2)', instruction: 'Complete Ryan’s email with the -ing form of the verbs.' };
const G3 = { section: 'Grammar (3)', instruction: 'Complete the sentences with the correct pronoun or possessive adjective.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Complete the lists.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Complete the sentences with the correct word.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Complete the words.' };
const P7 = { section: 'Pronunciation (1)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };
const P8 = { section: 'Pronunciation (2)', instruction: 'Find the word which does not contain the sound at the beginning of the line.' };

const rows = [
  // ---- Grammar (1) 1-6 ----
  [G1, 'Cora ________ at school today.', ['doesn’t', 'isn’t'], 'isn’t'],
  [G1, 'I ________ working at the moment.', ['don’t', '’m not'], '’m not'],
  [G1, '________ this Amber’s purse?', ['Does', 'Is'], 'Is'],
  [G1, 'What ________ they looking at?', ['do', 'are'], 'are'],
  [G1, '________ you like shopping?', ['Do', 'Are'], 'Do'],
  [G1, 'Where ________ Irina from?', ['does', 'is'], 'is'],

  // ---- Grammar (2) 7-12: Ryan's email ----
  [G2, 'I don’t like studying, but I like ________ a student.', ['being', 'be', 'been'], 'being'],
  [G2, 'I live with another student. We love ________ in cafés, drinking coffee and talking.', ['sitting', 'sit', 'sat'], 'sitting'],
  [G2, 'We also like ________ to good music.', ['listening', 'listen', 'listened'], 'listening'],
  [G2, 'We both hate ________ – we can’t dance very well.', ['dancing', 'dance', 'danced'], 'dancing'],
  [G2, 'I don’t mind ________ and my favourite food to cook is pasta.', ['cooking', 'cook', 'cooked'], 'cooking'],
  [G2, 'What do you like ________?', ['doing', 'do', 'did'], 'doing'],

  // ---- Grammar (3) 13-20: pronouns / possessive adjectives ----
  [G3, 'Are they Scottish? Can you ask ________?', ['them', 'they', 'their'], 'them'],
  [G3, 'It isn’t ________ car. She has a red car.', ['her', 'she', 'hers'], 'her'],
  [G3, 'That isn’t ________ house. They don’t live in this street.', ['their', 'them', 'they'], 'their'],
  [G3, 'We’re friends. You like me and I like ________.', ['you', 'your', 'yours'], 'you'],
  [G3, 'That’s ________ phone! Give it to me.', ['my', 'me', 'mine'], 'my'],
  [G3, 'He likes Anita, but he doesn’t love ________.', ['her', 'she', 'his'], 'her'],
  [G3, 'We don’t speak Russian. They can’t understand ________.', ['us', 'we', 'our'], 'us'],
  [G3, 'Can you help ________? I can’t do my homework.', ['me', 'my', 'I'], 'me'],

  // ---- Vocabulary (1) 21-28: ordinal numbers, months, seasons ----
  [V4, 'second, ________, fourth, fifth', ['third', 'sixth', 'first'], 'third'],
  [V4, '________, March, April', ['February', 'January', 'May'], 'February'],
  [V4, 'fiftieth, ________, fifty-second', ['fifty-first', 'fifty-third', 'fifteenth'], 'fifty-first'],
  [V4, 'April, May, ________', ['June', 'July', 'March'], 'June'],
  [V4, 'spring, ________, autumn, winter', ['summer', 'fall', 'weather'], 'summer'],
  [V4, 'ninth, tenth, ________', ['eleventh', 'eleven', 'eleveth'], 'eleventh'],
  [V4, 'October, November, ________', ['December', 'September', 'January'], 'December'],
  [V4, '________, September, October', ['August', 'July', 'November'], 'August'],

  // ---- Vocabulary (2) 29-34 ----
  [V5, 'It’s very hot in the Sahara ________.', ['desert', 'inside', 'valuable'], 'desert'],
  [V5, 'He can see his house far away so he walks ________ it.', ['towards', 'through', 'inside'], 'towards'],
  [V5, 'What’s that ________ noise? I don’t know what it is.', ['strange', 'valuable', 'desert'], 'strange'],
  [V5, 'Silver and gold are ________.', ['valuable', 'strange', 'inside'], 'valuable'],
  [V5, 'We are thirsty so we ________ to drink some water.', ['decide', 'towards', 'desert'], 'decide'],
  [V5, 'It’s raining so she opens the door and says ‘Come ________.’', ['inside', 'through', 'strange'], 'inside'],

  // ---- Vocabulary (3) 35-40: music words ----
  [V6, 'He’s a t_ _ m_ _ _ _ _. He plays the trumpet.', ['trumpeter', 'trumpetist', 'trumpeteer'], 'trumpeter'],
  [V6, 'Jessica sings in a c_ _ _ r.', ['choir', 'choire', 'chior'], 'choir'],
  [V6, 'My aunt likes jazz, but she doesn’t like c_ _ _ _ i_ _ l music.', ['classical', 'clasical', 'classicle'], 'classical'],
  [V6, 'I sometimes go to pop c_ _ ce_ ts.', ['concerts', 'consarts', 'concearts'], 'concerts'],
  [V6, 'My cousin plays the accordion. He’s an a_ _ _ r_ _ _ n_ _ _.', ['accordionist', 'accordianist', 'accordionest'], 'accordionist'],
  [V6, 'She’s a d_ _ _ _ _ r. She plays the drums.', ['drummer', 'drumer', 'drumist'], 'drummer'],

  // ---- Pronunciation (1) 41-45: word stress ----
  [P7, 'guitar', ['GUI-tar', 'gui-TAR'], 'gui-TAR'],
  [P7, 'fantastic', ['FAN-tas-tic', 'fan-TAS-tic', 'fan-tas-TIC'], 'fan-TAS-tic'],
  [P7, 'musician', ['MU-si-cian', 'mu-SI-cian', 'mu-si-CIAN'], 'mu-SI-cian'],
  [P7, 'keyboard', ['KEY-board', 'key-BOARD'], 'KEY-board'],
  [P7, 'terrible', ['TERR-i-ble', 'terr-I-ble', 'terr-i-BLE'], 'TERR-i-ble'],

  // ---- Pronunciation (2) 46-50: which word does NOT contain the sound ----
  [P8, 'Which word does NOT contain the sound /ð/ (as in “the”)?', ['mother', 'this', 'sixth', 'the'], 'sixth'],
  [P8, 'Which word does NOT contain the sound /aɪ/ (as in “time”)?', ['violin', 'spring', 'Friday', 'sometimes'], 'spring'],
  [P8, 'Which word does NOT contain the sound /j/ (as in “yes”)?', ['beautiful', 'music', 'fruit', 'new'], 'fruit'],
  [P8, 'Which word does NOT contain the sound /iː/ (as in “see”)?', ['niece', 'see', 'police', 'ice'], 'ice'],
  [P8, 'Which word does NOT contain the sound /ɪ/ (as in “it”)?', ['him', 'mind', 'internet', 'musician'], 'mind'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const elementary6 = rows.map(([meta, text, original, answer], i) => {
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