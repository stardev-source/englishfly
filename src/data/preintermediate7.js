// Pre-Intermediate 7 = English File Pre-intermediate (4th ed.), File Test 7 B (40 questions).
// This test has no Pronunciation part. The answers come from the answers filled in on the source file.
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Choose the correct form.' };
const G2 = { section: 'Grammar (2)', instruction: 'Complete the sentences with a verb in the -ing form.' };
const G3 = { section: 'Grammar (3)', instruction: 'Complete the sentences with the -ing form or the infinitive of the verb in brackets.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Complete the phrases with the correct preposition.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Complete the sentences with a verb in the infinitive form.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Complete the sentences with the correct word.' };

const rows = [
  // ---- Grammar (1) 1-6: must / have to ----
  [G1, 'You ________ stand near the train line. It’s dangerous.', ['mustn’t', 'don’t have to'], 'mustn’t'],
  [G1, 'Hannah ________ go to bed early. She’s very young.', ['has to', 'doesn’t have to'], 'has to'],
  [G1, 'We ________ learn all of the new words for the test tomorrow.', ['must', 'mustn’t'], 'must'],
  [G1, 'I ________ do the washing. I haven’t got any clean clothes.', ['must', 'don’t have to'], 'must'],
  [G1, 'Henri ________ get up early today. It’s Saturday.', ['doesn’t have to', 'hasn’t to'], 'doesn’t have to'],
  [G1, 'This car park is free. You ________ pay.', ['don’t have to', 'mustn’t'], 'don’t have to'],

  // ---- Grammar (2) 7-12: -ing form ----
  [G2, '________ to Brussels by train is faster than by car. (travel)', ['Travelling', 'To travel', 'Travel'], 'Travelling'],
  [G2, 'We had sandwiches for lunch because we didn’t feel like ________. (cook)', ['cooking', 'to cook', 'cook'], 'cooking'],
  [G2, 'I’m not very good at ________ people’s names. (remember)', ['remembering', 'to remember', 'remember'], 'remembering'],
  [G2, 'Where are you thinking of ________ on holiday next year? (go)', ['going', 'to go', 'go'], 'going'],
  [G2, '________ chess can be difficult, but I enjoy it. (play)', ['Playing', 'To play', 'Play'], 'Playing'],
  [G2, 'Irina dreams of ________ an Olympic medal. (win)', ['winning', 'to win', 'win'], 'winning'],

  // ---- Grammar (3) 13-20: -ing or infinitive ----
  [G3, 'Do you know how ________ (make) bread?', ['to make', 'making', 'make'], 'to make'],
  [G3, 'He sent Luciana a text because he wanted ________ (tell) her the news.', ['to tell', 'telling', 'tell'], 'to tell'],
  [G3, '________ (do) yoga makes you less stressed.', ['Doing', 'To doing', 'Do'], 'Doing'],
  [G3, 'It isn’t easy ________ (learn) English grammar.', ['to learn', 'learning', 'learn'], 'to learn'],
  [G3, '________ (dance) is something that I really don’t enjoy.', ['Dancing', 'To dancing', 'Dance'], 'Dancing'],
  [G3, 'I need ________ (find) a new dress for the party.', ['to find', 'finding', 'find'], 'to find'],
  [G3, 'Jaap left without ________ (say) goodbye to me.', ['saying', 'to say', 'say'], 'saying'],
  [G3, 'Try not ________ (spend) all of your money on new clothes.', ['to spend', 'spending', 'spend'], 'to spend'],

  // ---- Vocabulary (1) 21-26: prepositions ----
  [V4, 'I think China is very different ________ Brazil.', ['from', 'of', 'at'], 'from'],
  [V4, 'What subjects were you good ________ when you were at school?', ['at', 'in', 'on'], 'at'],
  [V4, 'I get angry ________ my sister when she borrows my clothes.', ['with', 'to', 'for'], 'with'],
  [V4, 'Too much salt is bad ________ you.', ['for', 'to', 'at'], 'for'],
  [V4, 'Why aren’t you nice ________ your brother?', ['to', 'at', 'in'], 'to'],
  [V4, 'Are you interested ________ music?', ['in', 'on', 'at'], 'in'],

  // ---- Vocabulary (2) 27-34: verb + infinitive ----
  [V5, '‘Why is Laurie pretending ________ ill?’ ‘He doesn’t want to go to school.’ (be)', ['to be', 'being', 'be'], 'to be'],
  [V5, 'Fasil is trying ________ English. He’s doing a course on the internet. (learn)', ['to learn', 'learn', 'learned'], 'to learn'],
  [V5, 'I forgot ________ my mobile phone before the lesson. (turn off)', ['to turn off', 'turn off', 'turned off'], 'to turn off'],
  [V5, 'Alice doesn’t like her job, so she’s decided ________ another. (look for)', ['to look for', 'looking for', 'look for'], 'to look for'],
  [V5, 'We don’t need ________ to the shop today. (go)', ['to go', 'going', 'go'], 'to go'],
  [V5, 'Carlo offered ________ dinner for his friends. (make)', ['to make', 'making', 'make'], 'to make'],
  [V5, 'Did Fred remember ________ some milk when he went to the shop? (buy)', ['to buy', 'buy', 'bought'], 'to buy'],
  [V5, 'Amelia is learning ________ the guitar. (play)', ['to play', 'playing', 'play'], 'to play'],

  // ---- Vocabulary (3) 35-40: verbs followed by -ing ----
  [V6, 'Does your husband ________ shopping?', ['enjoy', 'want', 'start'], 'enjoy'],
  [V6, 'My kids ________ going to bed early.', ['hate', 'don’t want', 'need'], 'hate'],
  [V6, 'Have you ________ painting your kitchen?', ['finished', 'decided', 'hoped'], 'finished'],
  [V6, 'Lamaar ________ a lot of time listening to music.', ['spends', 'has', 'does'], 'spends'],
  [V6, 'Why have they ________ talking to their neighbours?', ['stopped', 'promised', 'pretended'], 'stopped'],
  [V6, 'I don’t ________ helping you with your homework.', ['mind', 'want', 'good'], 'mind'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const preintermediate7 = rows.map(([meta, text, original, answer], i) => {
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