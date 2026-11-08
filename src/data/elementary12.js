// Elementary 12 = English File Elementary (4th ed.), File Test 12 A (50 questions).
// The key file for this test was empty, so the answers were worked out by hand.
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Complete the dialogue with the present perfect or the past simple.' };
const G2 = { section: 'Grammar (2)', instruction: 'Read the answer and choose the correct question.' };
const G3 = { section: 'Grammar (3)', instruction: 'Choose the correct present perfect sentence or question. (positive) = +, (negative) = –, (question) = ?' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Choose the past participle of the verb.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Complete the sentences with the past participle of the correct verb.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Find the odd word out.' };
const P7 = { section: 'Pronunciation (1)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };
const P8 = { section: 'Pronunciation (2)', instruction: 'Which word has the same sound as the word in the question?' };

const rows = [
  // ---- Grammar (1) 1-7: dialogue ----
  [G1, 'A: Have you been to London before?\nB: No, I ________. This is my first visit.', ['haven’t', 'didn’t', 'wasn’t'], 'haven’t'],
  [G1, 'A: I ________ (come) here last summer to study English.', ['came', 'have come', 'come'], 'came'],
  [G1, 'B: Did you ________ (go) to Buckingham Palace?', ['go', 'went', 'gone'], 'go'],
  [G1, 'B: Yes, it’s beautiful. Do you know, I ________ (meet) Prince William about 10 years ago.', ['met', 'have met', 'meet'], 'met'],
  [G1, 'A: Wow! I ________ (not / meet) anyone famous.', ['haven’t met', 'hasn’t met', 'didn’t met'], 'haven’t met'],
  [G1, 'B: It ________ (be) when he came to Budapest with his father.', ['was', 'has been', 'is'], 'was'],
  [G1, 'B: We all ________ (wait) outside the town hall to see them. It was great.', ['waited', 'have waited', 'wait'], 'waited'],

  // ---- Grammar (2) 8-13: make questions ----
  [G2, 'Answer: They usually start work at half past nine.', ['What time do they usually start work?', 'What time they usually start work?', 'What time does they usually start work?'], 'What time do they usually start work?'],
  [G2, 'Answer: We’re studying because we have a test on Friday.', ['Why are you studying?', 'Why you are studying?', 'Why are you study?'], 'Why are you studying?'],
  [G2, 'Answer: I’ve been to Asia but not to Africa.', ['Where have you been?', 'Where you have been?', 'Where have you be?'], 'Where have you been?'],
  [G2, 'Answer: She bought her bag in a department store in Paris.', ['Where did she buy her bag?', 'Where did she bought her bag?', 'Where she bought her bag?'], 'Where did she buy her bag?'],
  [G2, 'Answer: I go to the theatre twice a year.', ['How often do you go to the theatre?', 'How often you go to the theatre?', 'How often do you goes to the theatre?'], 'How often do you go to the theatre?'],
  [G2, 'Answer: She can speak four languages.', ['How many languages can she speak?', 'How many languages she can speak?', 'How many languages does she can speak?'], 'How many languages can she speak?'],

  // ---- Grammar (3) 14-20: present perfect ----
  [G3, 'your cousins / be / to Germany before (?)', ['Have your cousins been to Germany before?', 'Has your cousins been to Germany before?', 'Have your cousins be to Germany before?'], 'Have your cousins been to Germany before?'],
  [G3, 'Joaquin / hear / Elena sing before (–)', ['Joaquin hasn’t heard Elena sing before.', 'Joaquin haven’t heard Elena sing before.', 'Joaquin hasn’t hear Elena sing before.'], 'Joaquin hasn’t heard Elena sing before.'],
  [G3, 'anyone / find / my keys (?)', ['Has anyone found my keys?', 'Have anyone found my keys?', 'Has anyone find my keys?'], 'Has anyone found my keys?'],
  [G3, 'We / download / any new apps recently (–)', ['We haven’t downloaded any new apps recently.', 'We hasn’t downloaded any new apps recently.', 'We haven’t downloaded some new apps recently.'], 'We haven’t downloaded any new apps recently.'],
  [G3, 'Bradley / fall / in love again (+)', ['Bradley has fallen in love again.', 'Bradley have fallen in love again.', 'Bradley has fell in love again.'], 'Bradley has fallen in love again.'],
  [G3, 'She / read / this book / twice (+)', ['She has read this book twice.', 'She have read this book twice.', 'She has readed this book twice.'], 'She has read this book twice.'],
  [G3, 'you / ever / eat / Turkish food (?)', ['Have you ever eaten Turkish food?', 'Have you ever ate Turkish food?', 'Did you ever eaten Turkish food?'], 'Have you ever eaten Turkish food?'],

  // ---- Vocabulary (1) 21-27: past participles ----
  [V4, 'do – ________', ['done', 'did', 'doed'], 'done'],
  [V4, 'see – ________', ['seen', 'saw', 'seed'], 'seen'],
  [V4, 'give – ________', ['given', 'gave', 'gived'], 'given'],
  [V4, 'sing – ________', ['sung', 'sang', 'singed'], 'sung'],
  [V4, 'meet – ________', ['met', 'meeted', 'mett'], 'met'],
  [V4, 'buy – ________', ['bought', 'brought', 'buyed'], 'bought'],
  [V4, 'take – ________', ['taken', 'took', 'taked'], 'taken'],

  // ---- Vocabulary (2) 28-34 ----
  [V5, 'I don’t think he likes the sweater I gave him. He hasn’t ________ it.', ['worn', 'wore', 'wearing'], 'worn'],
  [V5, 'The house is empty. Everyone has ________ to go to work.', ['left', 'leave', 'leaved'], 'left'],
  [V5, 'Sorry, I’ve ________ to bring my dictionary again. It’s on my desk at home.', ['forgotten', 'forgot', 'forgetted'], 'forgotten'],
  [V5, 'I’ve ________ a cake. Would you like some?', ['made', 'make', 'maked'], 'made'],
  [V5, 'She’s ________ a new book. I read it last week.', ['written', 'wrote', 'writed'], 'written'],
  [V5, 'Have you ever ________ lunch at Chez Michel?', ['had', 'have', 'haved'], 'had'],
  [V5, 'He’s ________ all his money.', ['spent', 'spend', 'spended'], 'spent'],

  // ---- Vocabulary (3) 35-40: odd word out ----
  [V6, 'Which word is the odd one out?', ['stressed', 'bored', 'beautiful', 'tired'], 'beautiful'],
  [V6, 'Which word is the odd one out?', ['bathroom', 'study', 'wardrobe', 'kitchen'], 'wardrobe'],
  [V6, 'Which word is the odd one out?', ['ceiling', 'lamp', 'sofa', 'cupboard'], 'ceiling'],
  [V6, 'Which word is the odd one out?', ['theatre', 'hospital', 'chemist’s', 'doctor'], 'doctor'],
  [V6, 'Which word is the odd one out?', ['journalist', 'newspaper', 'magazine', 'book'], 'journalist'],
  [V6, 'Which word is the odd one out?', ['builder', 'garage', 'architect', 'accountant'], 'garage'],

  // ---- Pronunciation (1) 41-45: word stress ----
  [P7, 'continent', ['CON-ti-nent', 'con-TI-nent', 'con-ti-NENT'], 'CON-ti-nent'],
  [P7, 'recently', ['RE-cent-ly', 're-CENT-ly', 're-cent-LY'], 'RE-cent-ly'],
  [P7, 'soundtrack', ['SOUND-track', 'sound-TRACK'], 'SOUND-track'],
  [P7, 'experience', ['EX-pe-ri-ence', 'ex-PE-ri-ence', 'ex-pe-RI-ence', 'ex-pe-ri-ENCE'], 'ex-PE-ri-ence'],
  [P7, 'episode', ['E-pi-sode', 'e-PI-sode', 'e-pi-SODE'], 'E-pi-sode'],

  // ---- Pronunciation (2) 46-50: same sound ----
  [P8, 'bought', ['fallen', 'given', 'spent', 'done'], 'fallen'],
  [P8, 'sung', ['done', 'given', 'spent', 'spoken'], 'done'],
  [P8, 'friend', ['spent', 'fallen', 'given', 'spoken'], 'spent'],
  [P8, 'written', ['given', 'done', 'lost', 'fallen'], 'given'],
  [P8, 'download', ['spoken', 'spent', 'lost', 'done'], 'spoken'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const elementary12 = rows.map(([meta, text, original, answer], i) => {
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