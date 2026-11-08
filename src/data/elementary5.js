// Elementary 5 = English File Elementary (4th ed.), File Test 5 A (40 questions).
// The Pronunciation part is missing from the source file, so this test has Grammar and Vocabulary only.
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Choose the correct present continuous sentence or question.' };
const G2 = { section: 'Grammar (2)', instruction: 'Complete the email with the present simple or present continuous form of the verbs in brackets.' };
const G3 = { section: 'Grammar (3)', instruction: 'Choose the correct word or phrase.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Complete the sentences with the correct word.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Complete the weather words.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Complete the phrases with the correct verb.' };

const rows = [
  // ---- Grammar (1) 1-7: present continuous ----
  [G1, 'why / the baby / cry ?', ['Why is the baby crying?', 'Why the baby is crying?', 'Why is the baby cry?'], 'Why is the baby crying?'],
  [G1, 'we / not wait / for a taxi', ['We aren’t waiting for a taxi.', 'We don’t waiting for a taxi.', 'We aren’t wait for a taxi.'], 'We aren’t waiting for a taxi.'],
  [G1, 'you / use / this computer ?', ['Are you using this computer?', 'Do you using this computer?', 'Are you use this computer?'], 'Are you using this computer?'],
  [G1, 'Jude / get dressed ?', ['Is Jude getting dressed?', 'Is Jude get dressed?', 'Does Jude getting dressed?'], 'Is Jude getting dressed?'],
  [G1, 'Britta / watch TV / in her bedroom', ['Britta is watching TV in her bedroom.', 'Britta is watch TV in her bedroom.', 'Britta watching TV in her bedroom.'], 'Britta is watching TV in her bedroom.'],
  [G1, 'it / rain / at the moment ?', ['Is it raining at the moment?', 'Is it rain at the moment?', 'Does it raining at the moment?'], 'Is it raining at the moment?'],
  [G1, 'they / run / because it’s late', ['They’re running because it’s late.', 'They running because it’s late.', 'They’re run because it’s late.'], 'They’re running because it’s late.'],

  // ---- Grammar (2) 8-14: email (Connor to Tanya) ----
  [G2, 'It’s Friday evening and I’m home for the weekend. I ________ (sit) on my bed.', ['’m sitting', 'sits', '’m sit'], '’m sitting'],
  [G2, 'I’m on my bed and I ________ (check) my emails on my laptop.', ['’m checking', 'checks', '’m check'], '’m checking'],
  [G2, 'It usually ________ (snow) here in winter.', ['snows', 'is snowing', 'snow'], 'snows'],
  [G2, 'My family are downstairs. Dad ________ (make) dinner.', ['is making', 'make', 'is make'], 'is making'],
  [G2, 'I ________ (think) Mum is helping my sister Molly with her homework.', ['think', 'am thinking', 'thinks'], 'think'],
  [G2, 'Mum ________ (help) my sister Molly with her homework.', ['is helping', 'help', 'is help'], 'is helping'],
  [G2, 'I can’t write any more now – Dad ________ (want) me to help him in the kitchen.', ['wants', 'is wanting', 'want'], 'wants'],

  // ---- Grammar (3) 15-20: can / can’t ----
  [G3, 'Marissa can’t ________ German.', ['speak', 'speaks'], 'speak'],
  [G3, 'Can you ________ the guitar?', ['play', 'to play'], 'play'],
  [G3, 'I’m sorry. You ________ park here.', ['can', 'can’t'], 'can’t'],
  [G3, '________ come to my house tomorrow?', ['Do you can', 'Can you'], 'Can you'],
  [G3, 'She ________ cook very well.', ['no cannot', 'can’t'], 'can’t'],
  [G3, 'A: Can you play tennis?\nB: Yes, ________.', ['I can', 'I can play'], 'I can'],

  // ---- Vocabulary (1) 21-28 ----
  [V4, 'Dante ________ to the gym on Tuesdays.', ['does', 'goes', 'plays'], 'goes'],
  [V4, 'Can you ________ a taxi, please?', ['call', 'take', 'hear'], 'call'],
  [V4, 'I can’t ________ his name.', ['call', 'talk', 'remember'], 'remember'],
  [V4, 'I want to ________ a photo of your dog.', ['draw', 'take', 'paint'], 'take'],
  [V4, 'They are ________ a race.', ['making', 'going', 'running'], 'running'],
  [V4, 'Hannah can’t ________ her purse.', ['find', 'watch', 'look'], 'find'],
  [V4, 'Let’s ________ for a coffee before the lesson.', ['wait', 'do', 'meet'], 'meet'],
  [V4, 'Can you ________ a picture of my house?', ['paint', 'try', 'run'], 'paint'],

  // ---- Vocabulary (2) 29-34: weather ----
  [V5, 'It’s hot and ________ today. Let’s go to the park.', ['sunny', 'snowy', 'foggy'], 'sunny'],
  [V5, 'You can’t see the sun when it’s ________.', ['cloudy', 'sunny', 'hot'], 'cloudy'],
  [V5, 'It’s very cold. I think it’s starting to ________.', ['snow', 'shine', 'cloud'], 'snow'],
  [V5, 'I can’t see very well because it’s ________.', ['foggy', 'sunny', 'windy'], 'foggy'],
  [V5, 'The sun’s ________. It’s a nice day.', ['shining', 'raining', 'snowing'], 'shining'],
  [V5, 'It’s ________. Have you got an umbrella?', ['raining', 'shining', 'freezing'], 'raining'],

  // ---- Vocabulary (3) 35-40 ----
  [V6, '________ a text message', ['send', 'make', 'talk'], 'send'],
  [V6, '________ the internet', ['use', 'see', 'have'], 'use'],
  [V6, '________ loud music', ['play', 'send', 'use'], 'play'],
  [V6, '________ a lot of noise', ['make', 'send', 'talk'], 'make'],
  [V6, '________ to a friend', ['talk', 'play', 'use'], 'talk'],
  [V6, '________ a big party', ['have', 'send', 'talk'], 'have'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const elementary5 = rows.map(([meta, text, original, answer], i) => {
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