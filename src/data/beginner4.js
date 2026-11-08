// Beginner 4 = English File Beginner, Quick Test 5 (50 questions).
// correct: index of the right option (0 = A, 1 = B, 2 = C).
const L = { A: 0, B: 1, C: 2, D: 3 };

const G = { section: 'Grammar', instruction: 'Choose A, B, or C to complete the sentences.' };
const VA = { section: 'Vocabulary (a)', instruction: 'Which word is different from the word in the question?' };
const VB = { section: 'Vocabulary (b)', instruction: 'Choose A, B, or C to complete the sentences.' };
const PA = { section: 'Pronunciation (a)', instruction: 'Which word has a different sound?' };
const PB = { section: 'Pronunciation (b)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };

const rows = [
  // Grammar 1-20
  [G, 'A: Do you drink coffee in the morning?\nB: Yes, ________.', ['do I', 'I am', 'I do'], 'C'],
  [G, 'We ________ TV in the morning.', ['don’t watch', 'are watch', 'not watch'], 'A'],
  [G, '________ you live here?', ['Are', 'Do', 'Have'], 'B'],
  [G, 'Marco and Giulia ________ Italian.', ['speak', 'speaks', 'is speak'], 'A'],
  [G, 'I ________ newspapers.', ['don’t read', 'read not', '’m not read'], 'A'],
  [G, 'I ________ chocolate.', ['like', 'likes', 'are like'], 'A'],
  [G, 'A: Do people in Germany have a big breakfast?\nB: No, they ________.', ['not', 'don’t', 'do'], 'B'],
  [G, '________ work at weekends?', ['Do', 'Do you', 'You'], 'B'],
  [G, 'We ________ beer.', ['don’t drink', 'not drink', 'don’t drinks'], 'A'],
  [G, 'They ________ to the radio in the morning.', ['are listen', 'listen', 'listens'], 'B'],
  [G, 'A: Do you study English?\nB: Yes, we ________.', ['are', 'do', 'is'], 'B'],
  [G, 'They ________ three children.', ['has', 'have', 'haves'], 'B'],
  [G, 'Javier and Ellie ________ business at university.', ['study', 'studies', 'studys'], 'A'],
  [G, 'We don’t ________ a dog.', ['has', 'have', 'likes'], 'B'],
  [G, 'I ________ in a bank.', ['is work', 'works', 'work'], 'C'],
  [G, 'A: Do you ________ a sandwich?\nB: Yes, please.', ['eats', 'want', 'wants'], 'B'],
  [G, 'I ________ cereal for breakfast.', ['no eat', 'not eat', 'don’t eat'], 'C'],
  [G, 'A: Do you have a mobile phone?\nB: No, I ________.', ['don’t', 'do', 'not'], 'A'],
  [G, '________ tea?', ['They drink', 'Are they drink', 'Do they drink'], 'C'],
  [G, 'A: Do you live at home?\nB: Yes, I ________.', ['live', 'am', 'do'], 'C'],

  // Vocabulary (a) 21-30: odd one out
  [VA, 'tea', ['coffee', 'salad', 'milk'], 'B'],
  [VA, 'afternoon', ['evening', 'morning', 'dinner'], 'C'],
  [VA, 'cereal', ['pasta', 'flat', 'bread'], 'B'],
  [VA, 'six', ['ten', 'fifteen', 'afternoon'], 'C'],
  [VA, 'read', ['watch', 'listen', 'sandwich'], 'C'],
  [VA, 'speak', ['milk', 'study', 'work'], 'A'],
  [VA, 'eggs', ['water', 'rice', 'fruit'], 'A'],
  [VA, 'dinner', ['breakfast', 'lunch', 'eggs'], 'C'],
  [VA, 'drink', ['eat', 'live', 'don’t'], 'C'],
  [VA, 'newspaper', ['watch', 'radio', 'TV'], 'A'],
  // Vocabulary (b) 31-40
  [VB, 'It’s a ________ to nine.', ['half', 'o’clock', 'quarter'], 'C'],
  [VB, 'For breakfast, I drink ________ or milk.', ['cereal', 'cheese', 'juice'], 'C'],
  [VB, 'Are you ________? Do you want a drink?', ['hungry', 'thirsty', 'tired'], 'B'],
  [VB, 'It’s half ________ eight.', ['past', 'o’clock', 'to'], 'A'],
  [VB, 'I want ________ in my sandwich, please.', ['cheese', 'rice', 'juice'], 'A'],
  [VB, 'Do you ________ the newspaper in the morning?', ['read', 'go', 'watch'], 'A'],
  [VB, 'I’m ________. It’s time for bed.', ['hot', 'hungry', 'tired'], 'C'],
  [VB, 'Do they ________ TV?', ['listen', 'watch', 'read'], 'B'],
  [VB, 'I don’t ________ meat. I don’t like it.', ['eat', 'drink', 'go to'], 'A'],
  [VB, 'We don’t ________ long flights.', ['like', 'live', 'work'], 'A'],

  // Pronunciation (a) 41-45
  [PA, '', ['two', 'work', 'when'], 'A'],
  [PA, '', ['burger', 'sugar', 'orange'], 'C'],
  [PA, '', ['son', 'coffee', 'clock'], 'A'],
  [PA, '', ['very', 'want', 'have'], 'B'],
  [PA, '', ['juice', 'vegetables', 'yoghurt'], 'C'],
  // Pronunciation (b) 46-50
  [PB, 'potatoes', ['po-TA-toes', 'PO-ta-toes', 'po-ta-TOES'], 'A'],
  [PB, 'vegetables', ['VEGE-ta-bles', 'vege-TA-bles', 'vege-ta-BLES'], 'A'],
  [PB, 'traditional', ['TRA-di-tion-al', 'tra-DI-tion-al', 'tra-di-TION-al', 'tra-di-tion-AL'], 'B'],
  [PB, 'sandwiches', ['sand-WICH-es', 'SAND-wich-es', 'sand-wich-ES'], 'B'],
  [PB, 'radio', ['RA-di-o', 'ra-DI-o', 'ra-di-O'], 'A'],
];

export const beginner4 = rows
  .map(([meta, text, options, letter]) => ({
    section: meta.section,
    instruction: meta.instruction,
    text,
    options,
    correct: L[letter],
    image: null,
  }))
  .map((q, i) => ({ ...q, id: i + 1 }));