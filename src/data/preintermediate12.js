// Pre-Intermediate 12 = New English File Pre-intermediate (3rd ed.), File Test 12 A (50 questions).
// Parts used: Grammar, Vocabulary, Pronunciation. The source file has no answer key, so the answers were solved by hand.
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Put the words in the correct order to make questions.' };
const G2 = { section: 'Grammar (2)', instruction: 'Complete the email with the past simple or the past perfect.' };
const G3 = { section: 'Grammar (3)', instruction: 'Choose the correct reported speech.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Complete the sentences with the correct form of say or tell.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Choose the correct words to complete the sentences.' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Complete the sentences with the past participle of the verb in brackets.' };
const P7 = { section: 'Pronunciation (1)', instruction: 'Choose the word which has a different sound.' };
const P8 = { section: 'Pronunciation (2)', instruction: 'Choose the correct word stress. The stressed syllable is in CAPITAL letters.' };

const rows = [
  // ---- Grammar (1) 1-6: word order ----
  [G1, '2011 / which / actor / Oscar / an / in / British / won ?', ['Which British actor won an Oscar in 2011?', 'Which actor British won an Oscar in 2011?', 'Which British actor won in 2011 an Oscar?'], 'Which British actor won an Oscar in 2011?'],
  [G1, 'are / exam / how / the / students / many / taking ?', ['How many students are taking the exam?', 'How many students taking the exam are?', 'How many are students taking the exam?'], 'How many students are taking the exam?'],
  [G1, 'house / in / who / that / lives ?', ['Who lives in that house?', 'Who does live in that house?', 'Who lives that house in?'], 'Who lives in that house?'],
  [G1, 'World Cup / which / hosted / last / the / country ?', ['Which country hosted the last World Cup?', 'Which country the last World Cup hosted?', 'Which country hosted last the World Cup?'], 'Which country hosted the last World Cup?'],
  [G1, 'buses / how / go / town / many / to / centre / the ?', ['How many buses go to the town centre?', 'How many buses to the town centre go?', 'How many go buses to the town centre?'], 'How many buses go to the town centre?'],
  [G1, 'happened / what / last / Bill / to / night ?', ['What happened to Bill last night?', 'What happened Bill to last night?', 'What to Bill happened last night?'], 'What happened to Bill last night?'],

  // ---- Grammar (2) 7-14: past simple / past perfect ----
  [G2, 'Jenny and I ________ (go) to Edinburgh.', ['went', 'had gone', 'go'], 'went'],
  [G2, 'We ________ (not be) there before.', ['hadn’t been', 'didn’t be', 'weren’t'], 'hadn’t been'],
  [G2, 'When we ________ (arrive) everything was white.', ['arrived', 'had arrived', 'arrive'], 'arrived'],
  [G2, 'Everything was white because it ________ (snow) earlier in the day.', ['had snowed', 'had snow', 'was snowing'], 'had snowed'],
  [G2, 'It ________ (take) three hours to find somewhere to stay.', ['took', 'had taken', 'take'], 'took'],
  [G2, 'It took three hours to find somewhere to stay, because we ________ (not book) a hotel.', ['hadn’t booked', 'didn’t booked', 'hadn’t book'], 'hadn’t booked'],
  [G2, 'We ________ (spend) New Year’s Eve with some of Jenny’s friends.', ['spent', 'had spent', 'spend'], 'spent'],
  [G2, 'She ________ (not see) them for a long time so they had a lot to talk about!', ['hadn’t seen', 'didn’t saw', 'hadn’t saw'], 'hadn’t seen'],

  // ---- Grammar (3) 15-20: reported speech ----
  [G3, '“I’m going to wash the car.” She said that ________.', ['she was going to wash the car', 'I was going to wash the car', 'she is going to wash the car'], 'she was going to wash the car'],
  [G3, '“We’ve finished our homework.” They told her that ________.', ['they had finished their homework', 'we had finished our homework', 'they have finished their homework'], 'they had finished their homework'],
  [G3, '“The train will be late.” He said that ________.', ['the train would be late', 'the train will be late', 'the train was late'], 'the train would be late'],
  [G3, '“My sister can speak French.” She told him that ________.', ['her sister could speak French', 'my sister could speak French', 'her sister can speak French'], 'her sister could speak French'],
  [G3, '“Mark didn’t phone me.” He said that ________.', ['Mark hadn’t phoned him', 'Mark hasn’t phoned him', 'Mark hadn’t phoned me'], 'Mark hadn’t phoned him'],
  [G3, '“We’re moving to Wales.” She told me that ________.', ['they were moving to Wales', 'they are moving to Wales', 'they had moving to Wales'], 'they were moving to Wales'],

  // ---- Vocabulary (1) 21-26: say / tell ----
  [V4, 'What will you ________ when you see him?', ['say', 'tell', 'said'], 'say'],
  [V4, '“It’s hot!” ________ Angela.', ['said', 'told', 'say'], 'said'],
  [V4, 'Can you ________ me what time the next train leaves?', ['tell', 'say', 'said'], 'tell'],
  [V4, 'Mel ________ her friends that she was looking for a new job.', ['told', 'said', 'tell'], 'told'],
  [V4, 'I see Jaume every day and he always ________ hello to me.', ['says', 'tells', 'say'], 'says'],
  [V4, 'Tessa ________ she was selling her car.', ['said', 'told', 'tell'], 'said'],

  // ---- Vocabulary (2) 27-33 ----
  [V5, 'Does this bag ________ to you?', ['belong', 'leave', 'be'], 'belong'],
  [V5, 'I often ________ a swim before breakfast.', ['have', 'go', 'get on'], 'have'],
  [V5, 'Who are you going to ________ your dog with when you go on holiday?', ['leave', 'realize', 'be'], 'leave'],
  [V5, 'It’s time to ________ of the swimming pool now.', ['get out', 'be', 'put'], 'get out'],
  [V5, 'Will you ________ those bags on the trolley?', ['put', 'go', 'free'], 'put'],
  [V5, 'I didn’t ________ that there was someone in the pool.', ['realize', 'get into', 'have'], 'realize'],
  [V5, 'We have to get ________ the bus opposite the museum.', ['off', 'up', 'out of'], 'off'],

  // ---- Vocabulary (3) 34-40: past participles ----
  [V6, 'There were no sandwiches. We had ________ them all. (eat)', ['eaten', 'ate', 'eat'], 'eaten'],
  [V6, 'She was angry because I’d ________ her favourite cup. (break)', ['broken', 'broke', 'breaked'], 'broken'],
  [V6, 'They said the bull had ________ two people. (attack)', ['attacked', 'attack', 'attacking'], 'attacked'],
  [V6, 'She wore a necklace that her mother had ________ her. (give)', ['given', 'gave', 'gived'], 'given'],
  [V6, 'He’d ________ three letters to the police, but had not received a reply. (send)', ['sent', 'send', 'sended'], 'sent'],
  [V6, 'The museum said that the thieves had ________ three paintings. (steal)', ['stolen', 'stole', 'stealed'], 'stolen'],
  [V6, 'Lucian said that he’d ________ a new laptop. (buy)', ['bought', 'buyed', 'buy'], 'bought'],

  // ---- Pronunciation (1) 41-45: different sound ----
  [P7, 'Look at the letter o in each word. Which word has a different sound?', ['old', 'offer', 'sorry', 'robber'], 'old'],
  [P7, 'Look at the letter u in each word. Which word has a different sound?', ['uniform', 'hurry', 'rubbish', 'summer'], 'uniform'],
  [P7, 'Look at the letter i in each word. Which word has a different sound?', ['write', 'miss', 'bitten', 'different'], 'write'],
  [P7, 'Look at the letter a in each word. Which word has a different sound?', ['football', 'happy', 'married', 'baggage'], 'football'],
  [P7, 'Look at the letter e in each word. Which word has a different sound?', ['bitten', 'letter', 'message', 'umbrella'], 'bitten'],

  // ---- Pronunciation (2) 46-50: word stress ----
  [P8, 'address', ['ad-DRESS', 'AD-dress'], 'ad-DRESS'],
  [P8, 'gossip', ['GOS-sip', 'gos-SIP'], 'GOS-sip'],
  [P8, 'suggest', ['sug-GEST', 'SUG-gest'], 'sug-GEST'],
  [P8, 'butterfly', ['BUT-ter-fly', 'but-TER-fly', 'but-ter-FLY'], 'BUT-ter-fly'],
  [P8, 'umbrella', ['um-BRE-lla', 'UM-bre-lla', 'um-bre-LLA'], 'um-BRE-lla'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const preintermediate12 = rows.map(([meta, text, original, answer], i) => {
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