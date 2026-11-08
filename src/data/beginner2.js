// Beginner 2 = English File Beginner, Quick Test 3 (50 questions).
// correct: index of the right option (0 = A, 1 = B, 2 = C).
const L = { A: 0, B: 1, C: 2 };

const G = { section: 'Grammar', instruction: 'Choose A, B, or C to complete the sentences.' };
const VA = { section: 'Vocabulary (a)', instruction: 'Choose the correct word A, B, or C.' };
const VB = { section: 'Vocabulary (b)', instruction: 'Choose the correct word A, B, or C.' };
const PA = { section: 'Pronunciation (a)', instruction: 'Which word has a different sound?' };
const PB = { section: 'Pronunciation (b)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };

const rows = [
  // Grammar 1-20
  [G, 'What is ________?', ['this', 'those', 'these'], 'A'],
  [G, 'It’s a ________.', ['dictionary', 'dictionaries', 'dictionarys'], 'A'],
  [G, 'Those ________ nice sunglasses.', ['is', 'am', 'are'], 'C'],
  [G, '________ a pen.', ['These are', 'It’s', 'This are'], 'B'],
  [G, '________ in your bag?', ['Who’s', 'What’s', 'How’s'], 'B'],
  [G, 'A: Who is ________?\nB: That’s my friend, Kate.', ['they', 'he', 'that'], 'C'],
  [G, 'It’s ________ iPad.', ['a', 'an', 'two'], 'B'],
  [G, 'How much are these ________?', ['watchs', 'watches', 'watch'], 'B'],
  [G, 'Those are ________.', ['umbrella', 'an umbrella', 'umbrellas'], 'C'],
  [G, 'A: Is there one key?\nB: No, there are two ________.', ['keyes', 'key', 'keys'], 'C'],
  [G, 'A: What are those?\nB: They are ________.', ['credit cards', 'credits card', 'cards credit'], 'A'],
  [G, 'Look at ________ board.', ['those', 'there', 'the'], 'C'],
  [G, '________ those?', ['What’s', 'What’re', 'What are'], 'C'],
  [G, 'Can I have ________ orange juice, please?', ['an', 'a', 'these'], 'A'],
  [G, 'That ________ my coffee.', ['is', 'are', 'am'], 'A'],
  [G, 'A: Those bags are £300.\nB: Wow! That ________ a lot!', ['’s', '’re', '’m'], 'A'],
  [G, 'A: Are ________ your books over there?\nB: No. These are my books.', ['this', 'these', 'those'], 'C'],
  [G, '________ are your keys.', ['Here', 'What', 'This'], 'A'],
  [G, 'You’re in room 221. This is ________ key.', ['there', 'these', 'the'], 'C'],
  [G, 'Those ________ are for John and Sarah.', ['muges', 'mug', 'mugs'], 'C'],

  // Vocabulary (a) 21-30 — picture questions
  [VA, '', ['a camera', 'a watch', 'a laptop'], 'A', 'camera'],
  [VA, '', ['glasses', 'an umbrella', 'key rings'], 'C', 'keyrings'],
  [VA, '', ['a map', 'a photo', 'a credit card'], 'B', 'photo'],
  [VA, '', ['a coat', 'a mug', 'a bag'], 'C', 'bag'],
  [VA, '', ['a key ring', 'a brush', 'an umbrella'], 'C', 'umbrella'],
  [VA, '', ['a laptop', 'a mobile phone', 'a wallet'], 'B', 'phone'],
  [VA, '', ['a wallet', 'a credit card', 'a bag'], 'A', 'wallet'],
  [VA, '', ['a hat', 'glasses', 'keys'], 'B', 'glasses'],
  [VA, '', ['a postcard', 'a photo', 'a credit card'], 'C', 'creditcard'],
  [VA, '', ['a watch', 'a notebook', 'a T-shirt'], 'A', 'watch'],

  // Vocabulary (b) 31-40
  [VB, 'That’s a nice ________.', ['hats', 'postcard', 'photos'], 'B'],
  [VB, 'That’s ________ email from my friend.', ['an', 'a', 'these'], 'A'],
  [VB, 'There are three ________ here.', ['passport', 'passeports', 'passports'], 'C'],
  [VB, '________ a nice hat.', ['That’s', 'These', 'They’re'], 'A'],
  [VB, '________ is that? He’s very good-looking.', ['Where', 'Who', 'When'], 'B'],
  [VB, 'Look at ________. It’s fantastic!', ['those', 'these', 'this'], 'C'],
  [VB, 'A: How much is that?\nB: It’s ________.', ['£5.99', 'Monday', 'those'], 'A'],
  [VB, 'A: Ice ________ lemon?\nB: No, thanks.', ['an', 'and', 'that'], 'B'],
  [VB, 'Are these your ________?', ['T-shirt', 'mobile', 'photos'], 'C'],
  [VB, 'That’s twenty dollars and five ________.', ['cents', 'pence', 'euro'], 'A'],

  // Pronunciation (a) 41-46
  [PA, '', ['mother', 'thirty', 'these'], 'B'],
  [PA, '', ['pieces', 'zebras', 'those'], 'A'],
  [PA, '', ['six', 'keys', 'snake'], 'B'],
  [PA, '', ['that', 'they', 'think'], 'C'],
  [PA, '', ['classes', 'buses', 'these'], 'C'],
  [PA, '', ['those', 'this', 'three'], 'C'],

  // Pronunciation (b) 47-50
  [PB, 'credit card', ['CRE-dit card', 'cre-DIT card', 'cre-dit CARD'], 'A'],
  [PB, 'fifty-nine', ['fif-ty-NINE', 'FIF-ty-nine', 'fif-TY-nine'], 'A'],
  [PB, 'magazine', ['ma-ga-ZINE', 'ma-GA-zine', 'MA-ga-zine'], 'A'],
  [PB, 'sandwiches', ['sand-WICH-es', 'SAND-wich-es', 'sand-wich-ES'], 'B'],
];

export const beginner2 = rows.map(([meta, text, options, letter, image], i) => ({
  id: i + 1,
  section: meta.section,
  instruction: meta.instruction,
  text,
  options,
  correct: L[letter],
  image: image ? `/img/${image}.jpg` : null,
}));
