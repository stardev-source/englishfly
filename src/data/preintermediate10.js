// Pre-Intermediate 10 = English File Pre-intermediate (4th ed.), File Test 10 B (50 questions).
// Parts used: Grammar, Vocabulary, Pronunciation. The source file has no answer key, so the answers were solved by hand.
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Complete the sentences with the correct words.' };
const G2 = { section: 'Grammar (2)', instruction: 'Choose the correct word.' };
const G3 = { section: 'Grammar (3)', instruction: 'Choose the correct present or past passive sentence.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Complete the phrasal verbs.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Choose the sport that matches the sentence.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Complete the sentences with the correct word.' };
const P7 = { section: 'Pronunciation (1)', instruction: 'Choose the correct word stress. The stressed syllable is in CAPITAL letters.' };
const P8 = { section: 'Pronunciation (2)', instruction: 'Choose the word with the same sound.' };

const rows = [
  // ---- Grammar (1) 1-6: phrasal verbs and pronouns ----
  [G1, 'My parents are going out tonight and I have to ________.', ['look after my brother', 'look my brother after'], 'look after my brother'],
  [G1, 'Do ________ later at the weekend?', ['you get up', 'get you up'], 'you get up'],
  [G1, 'A: I can’t see without my glasses.\nB: Well, put ________.', ['them on', 'on them'], 'them on'],
  [G1, 'A: I don’t want to watch TV.\nB: Why don’t you turn ________, then?', ['it off', 'off it'], 'it off'],
  [G1, 'Dad, can you ________ from the station?', ['pick us up', 'pick up us'], 'pick us up'],
  [G1, 'A: What’s he doing?\nB: He’s ________.', ['looking for his wallet', 'looking his wallet for'], 'looking for his wallet'],

  // ---- Grammar (2) 7-14: prepositions of movement ----
  [G2, 'Chris went ________ the shop to buy some milk.', ['into', 'past', 'through'], 'into'],
  [G2, 'Why don’t you come ________ and sit down?', ['in', 'out', 'towards'], 'in'],
  [G2, 'He took some photos as the plane flew ________ the city.', ['over', 'onto', 'along'], 'over'],
  [G2, 'Mike saw his brother as he was walking ________ the street.', ['along', 'under', 'around'], 'along'],
  [G2, 'Don’t run ________ the stairs, Juliana. You’ll fall.', ['down', 'across', 'along'], 'down'],
  [G2, 'I walk ________ the cinema on my way to work.', ['past', 'out', 'into'], 'past'],
  [G2, 'We had to turn ________ because we went the wrong way.', ['round', 'over', 'out'], 'round'],
  [G2, 'The quickest way to get there is to go ________ the park.', ['through', 'into', 'over'], 'through'],

  // ---- Grammar (3) 15-22: passive ----
  [G3, 'Millions of people speak Spanish.', ['Spanish is spoken by millions of people.', 'Spanish was spoken by millions of people.', 'Spanish speaks by millions of people.'], 'Spanish is spoken by millions of people.'],
  [G3, 'My father decorated the living room.', ['The living room was decorated by my father.', 'The living room is decorated by my father.', 'The living room was decorating by my father.'], 'The living room was decorated by my father.'],
  [G3, 'The chef doesn’t do the washing up.', ['The washing up isn’t done by the chef.', 'The washing up wasn’t done by the chef.', 'The washing up doesn’t done by the chef.'], 'The washing up isn’t done by the chef.'],
  [G3, 'I didn’t write these letters.', ['These letters weren’t written by me.', 'These letters aren’t written by me.', 'These letters didn’t written by me.'], 'These letters weren’t written by me.'],
  [G3, 'Rubbish pollutes our rivers.', ['Our rivers are polluted by rubbish.', 'Our rivers were polluted by rubbish.', 'Our rivers are polluting by rubbish.'], 'Our rivers are polluted by rubbish.'],
  [G3, 'Our school won the art competition.', ['The art competition was won by our school.', 'The art competition is won by our school.', 'The art competition was winning by our school.'], 'The art competition was won by our school.'],
  [G3, 'Alexander Graham Bell invented the telephone.', ['The telephone was invented by Alexander Graham Bell.', 'The telephone is invented by Alexander Graham Bell.', 'The telephone was invent by Alexander Graham Bell.'], 'The telephone was invented by Alexander Graham Bell.'],
  [G3, 'Mr Sharp doesn’t teach maths.', ['Maths isn’t taught by Mr Sharp.', 'Maths wasn’t taught by Mr Sharp.', 'Maths doesn’t taught by Mr Sharp.'], 'Maths isn’t taught by Mr Sharp.'],

  // ---- Vocabulary (1) 23-29: phrasal verbs ----
  [V4, 'The meeting will be ________ soon, then we can go home.', ['over', 'off', 'down'], 'over'],
  [V4, 'Josh’s desk is a mess. He never puts his things ________.', ['away', 'on', 'over'], 'away'],
  [V4, 'Turn the radio ________. It’s too loud.', ['down', 'on', 'round'], 'down'],
  [V4, 'How did he find ________ about the concert?', ['out', 'up', 'off'], 'out'],
  [V4, 'Lucinda gets ________ well with her sister. They never argue.', ['on', 'in', 'up'], 'on'],
  [V4, 'I’m filling ________ my university application form.', ['in', 'back', 'away'], 'in'],
  [V4, 'If you don’t know the address, look it ________ on the internet.', ['up', 'after', 'over'], 'up'],

  // ---- Vocabulary (2) 30-35: sports ----
  [V5, 'You wear things on your feet to help you go down a mountain.', ['skiing', 'golf', 'cycling'], 'skiing'],
  [V5, 'You move across water on a board.', ['windsurfing', 'rugby', 'basketball'], 'windsurfing'],
  [V5, 'You kick a ball over a goal.', ['rugby', 'skiing', 'cycling'], 'rugby'],
  [V5, 'You hit a small ball into a small hole.', ['golf', 'rugby', 'windsurfing'], 'golf'],
  [V5, 'You throw a ball through a ring, which is high on the wall.', ['basketball', 'golf', 'skiing'], 'basketball'],
  [V5, 'You ride a bike around a track.', ['cycling', 'motor racing', 'windsurfing'], 'cycling'],

  // ---- Vocabulary (3) 36-42: passive vocabulary ----
  [V6, 'The tea we sell is ________ in China.', ['produced', 'created', 'discovered'], 'produced'],
  [V6, 'When was America ________?', ['discovered', 'used', 'designed'], 'discovered'],
  [V6, 'This film was ________ by Truffaut.', ['directed', 'played', 'invented'], 'directed'],
  [V6, 'The picture Guernica was ________ by Pablo Picasso.', ['painted', 'played', 'called'], 'painted'],
  [V6, 'The film Tomb Raider is ________ on a video game.', ['based', 'given', 'invented'], 'based'],
  [V6, 'Who was her wedding dress ________ by?', ['designed', 'used', 'built'], 'designed'],
  [V6, 'Many people believe that the board game chess was ________ in India.', ['invented', 'directed', 'based'], 'invented'],

  // ---- Pronunciation (1) 43-47: word stress ----
  [P7, 'athletics', ['ath-LE-tics', 'ATH-le-tics', 'ath-le-TICS'], 'ath-LE-tics'],
  [P7, 'relationship', ['re-LA-tion-ship', 'RE-la-tion-ship', 're-la-TION-ship', 're-la-tion-SHIP'], 're-LA-tion-ship'],
  [P7, 'technology', ['tech-NO-lo-gy', 'TECH-no-lo-gy', 'tech-no-LO-gy', 'tech-no-lo-GY'], 'tech-NO-lo-gy'],
  [P7, 'windsurfing', ['WIND-sur-fing', 'wind-SUR-fing', 'wind-sur-FING'], 'WIND-sur-fing'],
  [P7, 'invention', ['in-VEN-tion', 'IN-ven-tion', 'in-ven-TION'], 'in-VEN-tion'],

  // ---- Pronunciation (2) 48-52: same sound ----
  [P8, 'Which word has the same sound as the g in Argentina?', ['energetic', 'China', 'information'], 'energetic'],
  [P8, 'Which word has the same sound as the tch in watch?', ['questionnaire', 'relationship', 'energetic'], 'questionnaire'],
  [P8, 'Which word has the same sound as the tch in watch?', ['China', 'apologize', 'information'], 'China'],
  [P8, 'Which word has the same sound as the sh in Swedish?', ['information', 'energetic', 'China'], 'information'],
  [P8, 'Which word has the same sound as the sh in Swedish?', ['relationship', 'questionnaire', 'apologize'], 'relationship'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const preintermediate10 = rows.map(([meta, text, original, answer], i) => {
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