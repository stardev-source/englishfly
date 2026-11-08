// Pre-Intermediate 4 = New English File Pre-intermediate (3rd ed.), File Test 4 A (50 questions).
// The answers come from the answer key marked in the source document.
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Complete the email. Choose the present perfect or the past simple.' };
const G2 = { section: 'Grammar (2)', instruction: 'Complete the dialogues with just, already, or yet.' };
const G3 = { section: 'Grammar (3)', instruction: 'Choose the correct word.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Complete the shopping words in the sentences.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Complete the sentences with the correct word.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Choose the correct adjective to complete the sentences.' };
const P7 = { section: 'Pronunciation (1)', instruction: 'Which word has the same sound?' };
const P8 = { section: 'Pronunciation (2)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };

const rows = [
  // ---- Grammar (1) 1-8: email ----
  [G1, 'Hi Craig,\nI’ve just received your email. Sorry to hear you aren’t well. You ________ (be) really busy recently!', ['have been', 'were', 'are being'], 'have been'],
  [G1, '________ you ________ (plan) your holiday yet?', ['Have you planned', 'Did you plan', 'Are you planning'], 'Have you planned'],
  [G1, 'In June, I ________ (go) to Canada with my family again.', ['went', 'have gone', 'was going'], 'went'],
  [G1, 'We ________ (go) there three times now!', ['have been', 'went', 'are going'], 'have been'],
  [G1, 'But this time, we ________ (not stay) with my uncle in Toronto.', ['didn’t stay', 'haven’t stayed', 'don’t stay'], 'didn’t stay'],
  [G1, 'Instead, we ________ (hire) a car so we could visit different places.', ['hired', 'have hired', 'were hiring'], 'hired'],
  [G1, 'Then in August, Tanya and I ________ (travel) around Morocco.', ['travelled', 'have travelled', 'were travelling'], 'travelled'],
  [G1, '________ you ever ________ (go) there? It’s a really interesting country.', ['Have you ever been', 'Did you ever go', 'Are you ever going'], 'Have you ever been'],

  // ---- Grammar (2) 9-14: just / already / yet ----
  [G2, 'Ana: I haven’t emailed Yoshio ________. What about you?', ['yet', 'already', 'just'], 'yet'],
  [G2, 'Ana: I haven’t emailed Yoshio yet. What about you?\nTim: I’ve ________ sent him five emails!', ['already', 'yet', 'just'], 'already'],
  [G2, 'Bob: I’ve ________ seen this film. I saw it at the cinema.', ['already', 'yet', 'just'], 'already'],
  [G2, 'Jill: Don’t tell me what happens! I haven’t seen it ________!', ['yet', 'already', 'just'], 'yet'],
  [G2, 'Jan: I’ve ________ made some biscuits. Would you like one?', ['just', 'yet', 'already'], 'just'],
  [G2, 'Lee: No, thanks. I’m not hungry. I’ve ________ had lots to eat today.', ['already', 'yet', 'just'], 'already'],

  // ---- Grammar (3) 15-20: some- / any- / no- words ----
  [G3, 'She didn’t do ________ yesterday.', ['anything', 'nothing', 'something'], 'anything'],
  [G3, 'I knocked on the door but ________ answered.', ['nobody', 'somebody', 'anybody'], 'nobody'],
  [G3, 'We’ve bought you ________ for Christmas.', ['something', 'somebody', 'somewhere'], 'something'],
  [G3, 'I’m thirsty because I’ve had ________ to drink.', ['nothing', 'something', 'anything'], 'nothing'],
  [G3, 'Did you go ________ nice at the weekend?', ['anywhere', 'nowhere', 'anything'], 'anywhere'],
  [G3, '________ left their wallet in the classroom.', ['Someone', 'Anyone', 'Something'], 'Someone'],

  // ---- Vocabulary (1) 21-27: shopping words ----
  [V4, 'You can try the dress on in the c________ room.', ['changing', 'cloak', 'coat'], 'changing'],
  [V4, 'They went to the c________ to pay for everything.', ['checkout', 'counter', 'cashier'], 'checkout'],
  [V4, 'You need your r________ when you take something back to a shop.', ['receipt', 'refund', 'return'], 'receipt'],
  [V4, 'Ken hates going to shops, so he does all his shopping o________.', ['online', 'outside', 'open'], 'online'],
  [V4, 'This colour doesn’t s________ me. It makes me look older.', ['suit', 'size', 'style'], 'suit'],
  [V4, 'This jacket is too small. I need a bigger s________.', ['size', 'shape', 'sale'], 'size'],
  [V4, 'I love buying things on a________ sites like eBay.', ['auction', 'advert', 'antique'], 'auction'],

  // ---- Vocabulary (2) 28-34: do / make / lay ----
  [V5, 'Elena is ________ a cookery course at the local college.', ['doing', 'making', 'going'], 'doing'],
  [V5, 'Paul ________ some mistakes in his homework.', ['made', 'did', 'put'], 'made'],
  [V5, 'Lunch is nearly ready. Can you ________ the table, Pete?', ['lay', 'make', 'put'], 'lay'],
  [V5, 'Don’t walk on the kitchen floor! I’ve just ________ it.', ['cleaned', 'ironed', 'made'], 'cleaned'],
  [V5, 'Jaime forgot to do the ________, so there aren’t any clean cups.', ['washing up', 'washing', 'shopping'], 'washing up'],
  [V5, 'Remember to ________ out the rubbish before you go to bed.', ['take', 'make', 'do'], 'take'],
  [V5, 'Don’t leave your clothes on the floor. ________ them up.', ['Pick', 'Leave', 'Find'], 'Pick'],

  // ---- Vocabulary (3) 35-40: adjectives ----
  [V6, 'Walking around the museum was quite ________. I need a rest!', ['tiring', 'tired'], 'tiring'],
  [V6, 'The kids were ________. They had nothing to do.', ['bored', 'boring'], 'bored'],
  [V6, 'I’m not ________ in art. I prefer sport.', ['interested', 'interesting'], 'interested'],
  [V6, 'The football match was really ________. Our team scored in the last minute.', ['exciting', 'excited'], 'exciting'],
  [V6, 'The lesson was really ________. We nearly fell asleep.', ['boring', 'bored'], 'boring'],
  [V6, 'I always feel ________ after swimming. It helps me forget all my stress.', ['relaxed', 'relaxing'], 'relaxed'],

  // ---- Pronunciation (1) 41-45: same sound ----
  [P7, 'changing (the sound of “g”)', ['jumper', 'cheap', 'key', 'nobody'], 'jumper'],
  [P7, 'beautiful (the sound of “eau”)', ['uniform', 'jumper', 'cheap', 'nobody'], 'uniform'],
  [P7, 'account (the sound of “cc”)', ['key', 'cheap', 'jumper', 'uniform'], 'key'],
  [P7, 'match (the sound of “ch”)', ['cheap', 'key', 'jumper', 'uniform'], 'cheap'],
  [P7, 'clothes (the sound of “o”)', ['nobody', 'uniform', 'key', 'jumper'], 'nobody'],

  // ---- Pronunciation (2) 46-50: word stress ----
  [P8, 'customer', ['CUS-to-mer', 'cus-TO-mer', 'cus-to-MER'], 'CUS-to-mer'],
  [P8, 'receipt', ['RE-ceipt', 're-CEIPT'], 're-CEIPT'],
  [P8, 'rubbish', ['RUB-bish', 'rub-BISH'], 'RUB-bish'],
  [P8, 'housework', ['HOUSE-work', 'house-WORK'], 'HOUSE-work'],
  [P8, 'proceed', ['PRO-ceed', 'pro-CEED'], 'pro-CEED'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const preintermediate4 = rows.map(([meta, text, original, answer], i) => {
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