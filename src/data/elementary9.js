// Elementary 9 = English File Elementary (4th ed.), File Test 9 A (40 questions).
// The Pronunciation part is missing from the source file, so this test has Grammar and Vocabulary only.
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Complete the sentences with a, an, some, or any.' };
const G2 = { section: 'Grammar (2)', instruction: 'Choose the correct word or phrase.' };
const G3 = { section: 'Grammar (3)', instruction: 'Complete the sentences with the comparative form of the adjective in brackets.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Choose the correct way to write the number as words.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Which group is the word in?' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Choose the correct word.' };

const rows = [
  // ---- Grammar (1) 1-6: a / an / some / any ----
  [G1, 'Samantha doesn’t want ________ crisps. She doesn’t like them.', ['any', 'some', 'a'], 'any'],
  [G1, 'I sometimes have ________ apple for dessert.', ['an', 'a', 'any'], 'an'],
  [G1, 'A: I’m hungry.\nB: Do you want ________ toast?', ['some', 'a', 'an'], 'some'],
  [G1, 'Let’s cook ________ fish this evening.', ['some', 'any', 'an'], 'some'],
  [G1, 'There’s ________ bottle of milk in the fridge.', ['a', 'some', 'any'], 'a'],
  [G1, 'A: Are there ________ oranges?\nB: No. Ellie had the last one.', ['any', 'an', 'a'], 'any'],

  // ---- Grammar (2) 7-12: quantifiers ----
  [G2, 'Can you buy some pasta? There’s ________ in the cupboard.', ['any', 'none'], 'none'],
  [G2, 'My sister works very hard. She doesn’t have ________ free time.', ['much', 'many'], 'much'],
  [G2, 'Put ________ salt in the omelette.', ['a little', 'a few'], 'a little'],
  [G2, 'A: How much fruit juice does your daughter drink?\nB: ________.', ['A lot of', 'A lot'], 'A lot'],
  [G2, 'I didn’t eat ________ lunch because I wasn’t hungry.', ['no', 'any'], 'any'],
  [G2, 'Darren eats ________ sweets. He loves them.', ['much', 'a lot of'], 'a lot of'],

  // ---- Grammar (3) 13-20: comparatives ----
  [G3, 'My cousin is ________ (old) than me.', ['older', 'more old', 'oldest'], 'older'],
  [G3, 'Swimming in a pool is ________ (safe) than swimming in the sea.', ['safer', 'more safe', 'safest'], 'safer'],
  [G3, 'I’m ________ (tired) in my new job than in my old job.', ['more tired', 'tireder', 'most tired'], 'more tired'],
  [G3, 'The German class is ________ (difficult) than the French class.', ['more difficult', 'difficulter', 'most difficult'], 'more difficult'],
  [G3, 'His laptop was ________ (expensive) than mine.', ['more expensive', 'expensiver', 'most expensive'], 'more expensive'],
  [G3, 'I’m a ________ (bad) cook than Caroline.', ['worse', 'worser', 'more bad'], 'worse'],
  [G3, 'The desert is ________ (dry) than the mountains.', ['drier', 'more dry', 'driest'], 'drier'],
  [G3, 'It’s ________ (hot) in Spain than in the UK.', ['hotter', 'more hot', 'hoter'], 'hotter'],

  // ---- Vocabulary (1) 21-26: numbers as words ----
  [V4, '1,010', ['one thousand and ten', 'one hundred and ten', 'one thousand, one hundred'], 'one thousand and ten'],
  [V4, '999', ['nine hundred and ninety-nine', 'nine hundred and nineteen', 'ninety-nine hundred'], 'nine hundred and ninety-nine'],
  [V4, '27,400', ['twenty-seven thousand, four hundred', 'twenty-seven hundred and four', 'two thousand, seven hundred and forty'], 'twenty-seven thousand, four hundred'],
  [V4, '123', ['one hundred and twenty-three', 'one hundred and thirty-two', 'one hundred and thirteen'], 'one hundred and twenty-three'],
  [V4, '300,000', ['three hundred thousand', 'thirty thousand', 'three million'], 'three hundred thousand'],
  [V4, '22,000,000', ['twenty-two million', 'two hundred and twenty thousand', 'twenty-two thousand'], 'twenty-two million'],

  // ---- Vocabulary (2) 27-34: Fruit / Vegetables / Drinks ----
  [V5, 'oranges', ['Fruit', 'Vegetables', 'Drinks'], 'Fruit'],
  [V5, 'strawberries', ['Fruit', 'Vegetables', 'Drinks'], 'Fruit'],
  [V5, 'mushrooms', ['Fruit', 'Vegetables', 'Drinks'], 'Vegetables'],
  [V5, 'peas', ['Fruit', 'Vegetables', 'Drinks'], 'Vegetables'],
  [V5, 'lettuce', ['Fruit', 'Vegetables', 'Drinks'], 'Vegetables'],
  [V5, 'fruit juice', ['Fruit', 'Vegetables', 'Drinks'], 'Drinks'],
  [V5, 'mineral water', ['Fruit', 'Vegetables', 'Drinks'], 'Drinks'],
  [V5, 'tea', ['Fruit', 'Vegetables', 'Drinks'], 'Drinks'],

  // ---- Vocabulary (3) 35-40: containers ----
  [V6, 'a ________ of orange juice', ['jar', 'carton'], 'carton'],
  [V6, 'a ________ of fresh milk', ['packet', 'bottle'], 'bottle'],
  [V6, 'a ________ of cereal', ['carton', 'box'], 'box'],
  [V6, 'a ________ of fizzy drink', ['carton', 'can'], 'can'],
  [V6, 'a ________ of jam', ['jar', 'bottle'], 'jar'],
  [V6, 'a ________ of crisps', ['tin', 'packet'], 'packet'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const elementary9 = rows.map(([meta, text, original, answer], i) => {
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