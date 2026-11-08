// Beginner 8 = English File Beginner, File Test 9 (30 questions).
// correct: index of the right option (0 = A, 1 = B, 2 = C).
const L = { A: 0, B: 1, C: 2, D: 3 };

const G1 = { section: 'Grammar (1)', instruction: 'Choose the present continuous form of the verb.' };
const G2 = { section: 'Grammar (2)', instruction: 'Choose the correct verb form.' };
const VA = { section: 'Vocabulary (a)', instruction: 'Complete Carla’s email with the correct verb form.' };
const VB = { section: 'Vocabulary (b)', instruction: 'Choose the correct word. The words are all related to clothes.' };
const PA = { section: 'Pronunciation', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };
const PE = { section: 'Practical English', instruction: 'Complete the dialogues with the correct phrase.' };

const rows = [
  // Grammar 1-5: present continuous
  [G1, 'Sam ________ (cook) a meal for his friends.', ['is cooking', 'cooks', 'is cook'], 'A'],
  [G1, 'Megan ________ (shop). She wants to buy some books.', ['shopping', 'is shopping', 'are shopping'], 'B'],
  [G1, 'We ________ (stay) in a hotel in the city centre.', ['are staying', 'is staying', 'stay'], 'A'],
  [G1, 'The children ________ (do) their homework in their bedrooms.', ['do', 'are doing', 'is doing'], 'B'],
  [G1, 'I ________ (have) a great time in London.', ['is having', 'have', 'am having'], 'C'],
  // Grammar 6-10: present simple or continuous
  [G2, 'Max sometimes ________ in a coffee shop at the weekends.', ['works', 'is working'], 'A'],
  [G2, 'Julio ________ an email to his mother at the moment.', ['writes', 'is writing'], 'B'],
  [G2, 'That’s my girlfriend over there. She ________ a red dress.', ['wears', 'is wearing'], 'B'],
  [G2, 'We usually ________ the TV after work.', ['watch', 'are watching'], 'A'],
  [G2, 'Tina ________ for her train right now.', ['waits', 'is waiting'], 'B'],

  // Vocabulary (a) 11-15: Carla's email
  [VA, 'I’m at home and I’m ________ my suitcase. I have a lot of clothes!', ['packing', 'renting', 'arriving'], 'A'],
  [VA, 'In the second photo, you can see us ________ at the airport.', ['buying', 'arriving', 'staying'], 'B'],
  [VA, 'We’re ________ at a fantastic hotel in the centre of the town.', ['packing', 'staying', 'buying'], 'B'],
  [VA, 'In the next photo, we’re ________ presents for our friends.', ['renting', 'having', 'buying'], 'C'],
  [VA, 'In the last photo, it’s me in our little car – we’re ________ a car here for a week!', ['renting', 'arriving', 'packing'], 'A'],
  // Vocabulary (b) 16-20: clothes
  [VB, 'I’m wearing a ________ because the classroom is cold.', ['sweater', 'shorts', 'T-shirt'], 'A'],
  [VB, 'Do you know where my ________ is? It’s raining outside.', ['shirt', 'coat', 'sunglasses'], 'B'],
  [VB, 'I work in a bank. I wear a ________, a shirt and tie every day.', ['shorts', 'sweater', 'suit'], 'C'],
  [VB, 'A lot of people are wearing T-shirts, ________ and sunglasses.', ['coats', 'shorts', 'sweaters'], 'B'],
  [VB, 'You look nice. Is that a new ________?', ['dress', 'shorts', 'sunglasses'], 'A'],

  // Pronunciation 21-25: word stress
  [PA, 'travelling', ['TRAV-el-ling', 'trav-EL-ling', 'trav-el-LING'], 'A'],
  [PA, 'interview', ['in-TER-view', 'IN-ter-view', 'in-ter-VIEW'], 'B'],
  [PA, 'companies', ['com-PAN-ies', 'com-pan-IES', 'COM-pan-ies'], 'C'],
  [PA, 'important', ['IM-por-tant', 'im-POR-tant', 'im-por-TANT'], 'B'],
  [PA, 'trousers', ['trou-SERS', 'TROU-sers'], 'B'],

  // Practical English 26-30: invitations
  [PE, 'A: Would you like to go to the football match tomorrow evening?\nB: ________.\nA: Great! I’ll get tickets!', ['No, thanks', 'I’d love to', 'Sorry, I can’t'], 'B'],
  [PE, 'A: Let’s meet at 8 o’clock at the restaurant.\nB: OK. ________ at 8 o’clock then.', ['Would you like', 'See you there', 'How about a coffee'], 'B'],
  [PE, 'A: Would you like a sandwich?\nB: ________. I’m not hungry.', ['See you there', 'I’d love to', 'No, thanks'], 'C'],
  [PE, 'A: ________?\nB: Oh, yes please.\nA: Do you take milk and sugar?', ['How about a coffee', 'Sorry, I can’t', 'I’d love to'], 'A'],
  [PE, 'A: Would you like to go to the cinema Friday evening?\nB: ________. I’m busy this Friday.', ['I’d love to', 'See you there', 'Sorry, I can’t'], 'C'],
];

export const beginner8 = rows
  .map(([meta, text, options, letter]) => ({
    section: meta.section,
    instruction: meta.instruction,
    text,
    options,
    correct: L[letter],
    image: null,
  }))
  .map((q, i) => ({ ...q, id: i + 1 }));