// Beginner 12 = English File Beginner, End-of-course test B (100 questions).
// Each row: [section, text, options, correct answer written out in full].
// The correct option is found by its text, so the order of options can be changed freely.

const G1 = { section: 'Grammar (1)', instruction: 'Choose the correct form of the verb: present simple or past simple.' };
const G2 = { section: 'Grammar (2)', instruction: 'Choose A, B, or C to complete the sentences.' };
const G3 = { section: 'Grammar (3)', instruction: 'Put the words in the correct order. Choose the correct sentence.' };
const V4 = { section: 'Vocabulary (1)', instruction: 'Choose the correct word.' };
const V5 = { section: 'Vocabulary (2)', instruction: 'Which one does NOT go with the verb?' };
const V6 = { section: 'Vocabulary (3)', instruction: 'Choose the missing word.' };
const P7 = { section: 'Pronunciation (1)', instruction: 'Which is the stressed syllable? (stressed syllable in CAPITALS)' };
const P8 = { section: 'Pronunciation (2)', instruction: 'Which word has the same sound as the word in the question?' };
const PE = { section: 'Practical English', instruction: 'Choose the correct answer to the question.' };

const MEL = 'Melanie Fraser lives in a big house in the south of England.\n\n';

const rows = [
  // ---- Grammar (1) 1-10: present simple or past simple ----
  [G1, MEL + 'She is married and ________ three children and a dog called Tramp. (have)', ['has', 'have', 'had'], 'has'],
  [G1, 'She ________ at home. (work)', ['work', 'works', 'worked'], 'works'],
  [G1, 'She ________ her job a lot, but the money is good. (not like)', ['didn’t like', 'doesn’t like', 'don’t like'], 'doesn’t like'],
  [G1, 'Twenty years ago, Melanie ________ a student at the University of London. (be)', ['is', 'were', 'was'], 'was'],
  [G1, 'She ________ a job then. (not have)', ['doesn’t have', 'didn’t have', 'hadn’t'], 'didn’t have'],
  [G1, 'Her parents ________ her money every month to help. (send)', ['send', 'sent', 'sended'], 'sent'],
  [G1, 'She ________ languages. (study)', ['studies', 'studyed', 'studied'], 'studied'],
  [G1, 'She ________ in a flat with three other students. (live)', ['lived', 'lives', 'live'], 'lived'],
  [G1, 'Melanie ________ to a university party in 1995. (go)', ['goes', 'went', 'gone'], 'went'],
  [G1, 'Three years later, in 1998, they ________ married. (get)', ['get', 'getted', 'got'], 'got'],

  // ---- Grammar (2) 11-25 ----
  [G2, 'A: Do you like ________?\nB: I love it – it’s my favourite kind of exercise!', ['run', 'running', 'runing'], 'running'],
  [G2, 'A: Where ________ Leon from?\nB: He’s from France.', ['are', 'is', 'do'], 'is'],
  [G2, 'A: ________ Maria and Jose speak Spanish?\nB: Yes, of course! They’re from Spain!', ['Does', 'Do', 'Are'], 'Do'],
  [G2, 'A: I want ________ rice with my chicken, please.\nB: No problem!', ['some', 'any', 'a'], 'some'],
  [G2, 'Do you like my new jeans? I bought ________ this morning.', ['it', 'them', 'they'], 'them'],
  [G2, '________ any people in the shop now.', ['There’s', 'There aren’t', 'There are'], 'There aren’t'],
  [G2, 'A: ________ tomorrow evening?\nB: I’m not sure. Why?', ['What did you do', 'What are you doing', 'What do you do'], 'What are you doing'],
  [G2, 'I’m sorry, but you ________ park here.', ['can’t', 'are', 'can'], 'can’t'],
  [G2, 'I don’t want to go out tonight because I’m tired, but I ________ go out tomorrow night.', ['do', 'am', 'can'], 'can'],
  [G2, '________ John on holiday last week?', ['Were', 'Is', 'Was'], 'Was'],
  [G2, 'A: Did you see Helen this morning?\nB: Yes, I sat next to ________ on the bus.', ['she', 'me', 'her'], 'her'],
  [G2, 'Simon and Ollie ________ at work yesterday.', ['weren’t', 'aren’t', 'wasn’t'], 'weren’t'],
  [G2, 'Where ________ your wife work now?', ['is', 'does', 'are'], 'does'],
  [G2, 'This is my husband’s sister. ________ name’s Cathy.', ['Her', 'His', 'She’s'], 'Her'],
  [G2, '________ you have a mobile phone when you were a child?', ['Did', 'Do', 'Are'], 'Did'],

  // ---- Grammar (3) 26-30: word order ----
  [G3, 'at always we up late the get weekend', ['We always get up late at the weekend.', 'We get always up late at the weekend.', 'Always we get up late at the weekend.'], 'We always get up late at the weekend.'],
  [G3, 'start o’clock work at I 9 usually', ['I usually start at 9 o’clock work.', 'I usually start work at 9 o’clock.', 'Usually I start at work 9 o’clock.'], 'I usually start work at 9 o’clock.'],
  [G3, 'the souvenirs Peter shop in bought some', ['Peter bought in the shop some souvenirs.', 'Peter some bought souvenirs in the shop.', 'Peter bought some souvenirs in the shop.'], 'Peter bought some souvenirs in the shop.'],
  [G3, 'you talk night did last to Jack', ['Did Jack you talk to last night?', 'Did Jack talk to you last night?', 'Jack did talk to you last night?'], 'Did Jack talk to you last night?'],
  [G3, 'in tennis free Zara likes her time playing', ['Zara likes tennis playing in her free time.', 'Zara playing likes tennis in her free time.', 'Zara likes playing tennis in her free time.'], 'Zara likes playing tennis in her free time.'],

  // ---- Vocabulary (1) 31-40: food, clothes, travel, sports ----
  [V4, 'In my country, many people eat ________ with butter for breakfast.', ['pasta', 'toast', 'rice'], 'toast'],
  [V4, 'I usually have my ________ with some fresh fruit.', ['yoghurt', 'salad', 'pasta'], 'yoghurt'],
  [V4, 'Would you like some water or orange ________?', ['milk', 'tea', 'juice'], 'juice'],
  [V4, 'I love your red ________. Where did you buy it?', ['jeans', 'jacket', 'sunglasses'], 'jacket'],
  [V4, 'Danielle is wearing a nice, long green ________ and a white T-shirt today.', ['shorts', 'skirt', 'trousers'], 'skirt'],
  [V4, 'A: ________ me. What time do we arrive in New York?\nB: At half past two, Madam.', ['Excuse', 'Please', 'Thanks'], 'Excuse'],
  [V4, 'Our ________ is from London Heathrow airport to Paris Charles de Gaulle airport.', ['hotel', 'flight', 'passport'], 'flight'],
  [V4, 'In summer, when the weather is hot, I love going to the ________.', ['museum', 'beach', 'office'], 'beach'],
  [V4, 'In winter, I always go to the mountains for my holidays. I like ________ there.', ['skiing', 'swimming', 'sunbathing'], 'skiing'],
  [V4, 'I’m going to the ________ to do some exercise. Do you want to come with me?', ['gym', 'cinema', 'bank'], 'gym'],

  // ---- Vocabulary (2) 41-55: odd one out with the verb ----
  [V5, 'drive', ['a bicycle', 'a bus', 'a train'], 'a bicycle'],
  [V5, 'have', ['a shower', 'a taxi', 'a coffee'], 'a taxi'],
  [V5, 'take', ['a photo', 'an umbrella', 'sport'], 'sport'],
  [V5, 'rent', ['a flat', 'a lift', 'a car'], 'a lift'],
  [V5, 'go away', ['home', 'on business', 'on holiday'], 'home'],
  [V5, 'speak', ['Germany', 'Polish', 'Japanese'], 'Germany'],
  [V5, 'do', ['housework', 'hurry', 'homework'], 'hurry'],
  [V5, 'watch', ['a clock', 'a match', 'a film'], 'a clock'],
  [V5, 'wear', ['shoes', 'traffic', 'trousers'], 'traffic'],
  [V5, 'listen to', ['music', 'an email', 'the radio'], 'an email'],
  [V5, 'need', ['home', 'some money', 'a car'], 'home'],
  [V5, 'stay', ['to work', 'in a hotel', 'at home'], 'to work'],
  [V5, 'eat', ['cheese', 'milk', 'salad'], 'milk'],
  [V5, 'be', ['worry', 'thirsty', 'cold'], 'worry'],
  [V5, 'play', ['the piano', 'exercise', 'computer games'], 'exercise'],

  // ---- Vocabulary (3) 56-70: word pairs ----
  [V6, 'child – children, woman – ________', ['womans', 'women', 'womens'], 'women'],
  [V6, 'November – December, January – ________', ['December', 'March', 'February'], 'February'],
  [V6, 'slow – fast, cheap – ________', ['slow', 'small', 'expensive'], 'expensive'],
  [V6, 'husband – wife, son – ________', ['daughter', 'uncle', 'father'], 'daughter'],
  [V6, 'Sunday – Monday, Tuesday – ________', ['Wednesday', 'Friday', 'Monday'], 'Wednesday'],
  [V6, 'shop assistant – shop, nurse – ________', ['school', 'hospital', 'factory'], 'hospital'],
  [V6, 'tall – short, easy – ________', ['small', 'long', 'difficult'], 'difficult'],
  [V6, 'book – tickets, pack – ________', ['suitcase', 'money', 'hotel'], 'suitcase'],
  [V6, 'big – small, beautiful – ________', ['nice', 'ugly', 'good'], 'ugly'],
  [V6, 'fantastic – good, terrible – ________', ['ugly', 'cheap', 'bad'], 'bad'],
  [V6, 'upstairs – downstairs, outside – ________', ['behind', 'inside', 'under'], 'inside'],
  [V6, 'school – teacher, factory – ________', ['factory worker', 'doctor', 'shop'], 'factory worker'],
  [V6, 'England – English, United States – ________', ['Americans', 'American', 'America'], 'American'],
  [V6, 'one – first, two – ________', ['twice', 'twenty', 'second'], 'second'],
  [V6, 'come – go, arrive – ________', ['stay', 'leave', 'wait'], 'leave'],

  // ---- Pronunciation (1) 71-80: word stress ----
  [P7, 'housework', ['HOUSE-work', 'house-WORK'], 'HOUSE-work'],
  [P7, 'January', ['ja-NU-a-ry', 'JA-nu-a-ry', 'ja-nu-A-ry', 'ja-nu-a-RY'], 'JA-nu-a-ry'],
  [P7, 'typical', ['ty-PI-cal', 'TY-pi-cal', 'ty-pi-CAL'], 'TY-pi-cal'],
  [P7, 'unemployed', ['UN-em-ployed', 'un-EM-ployed', 'un-em-PLOYED'], 'un-em-PLOYED'],
  [P7, 'economics', ['E-co-no-mics', 'e-CO-no-mics', 'e-co-NO-mics', 'e-co-no-MICS'], 'e-co-NO-mics'],
  [P7, 'journalist', ['JOUR-nal-ist', 'jour-NAL-ist', 'jour-nal-IST'], 'JOUR-nal-ist'],
  [P7, 'umbrella', ['UM-bre-lla', 'um-BRE-lla', 'um-bre-LLA'], 'um-BRE-lla'],
  [P7, 'tomorrow', ['TO-mo-rrow', 'to-MO-rrow', 'to-mo-RROW'], 'to-MO-rrow'],
  [P7, 'comfortable', ['COM-fort-able', 'com-FORT-able', 'com-fort-ABLE'], 'COM-fort-able'],
  [P7, 'comedy', ['co-ME-dy', 'CO-me-dy', 'co-me-DY'], 'CO-me-dy'],

  // ---- Pronunciation (2) 81-90: same sound ----
  [P8, 'chair', ['key', 'wear', 'late'], 'wear'],
  [P8, 'chair', ['their', 'go', 'son'], 'their'],
  [P8, 'wait', ['up', 'eight', 'their'], 'eight'],
  [P8, 'wait', ['late', 'key', 'go'], 'late'],
  [P8, 'cheese', ['know', 'key', 'son'], 'key'],
  [P8, 'cheese', ['leave', 'bread', 'wear'], 'leave'],
  [P8, 'slow', ['go', 'eight', 'up'], 'go'],
  [P8, 'slow', ['weather', 'know', 'key'], 'know'],
  [P8, 'mother', ['leave', 'up', 'late'], 'up'],
  [P8, 'mother', ['son', 'their', 'know'], 'son'],

  // ---- Practical English 91-100 ----
  [PE, 'How much is it?', ['That’s £5.65, please.', 'It’s a quarter to nine now.', 'I’m 25.'], 'That’s £5.65, please.'],
  [PE, 'What’s the name of the new book from Stephen King?', ['I’m not sure. Sorry. I don’t read a lot.', 'It’s on King Road, next to the park.', 'Yes, we need to hurry.'], 'I’m not sure. Sorry. I don’t read a lot.'],
  [PE, 'When’s your birthday?', ['Usually about half past seven.', 'It’s on the 17th of October.', 'I’m 25.'], 'It’s on the 17th of October.'],
  [PE, 'Good evening. Can I help you?', ['Yes, I have a reservation for 8 o’clock.', 'That’s £5.65, please.', 'I’m sorry, there isn’t.'], 'Yes, I have a reservation for 8 o’clock.'],
  [PE, 'Are we late?', ['Sorry, I’m busy then. Is six OK?', 'Yes, we need to hurry.', 'It’s on the 17th of October.'], 'Yes, we need to hurry.'],
  [PE, 'Where’s the hospital?', ['It’s a quarter to nine now.', 'Yes, I have a reservation for 8 o’clock.', 'It’s on King Road, next to the park.'], 'It’s on King Road, next to the park.'],
  [PE, 'Can we meet at 5 o’clock this evening?', ['Sorry, I’m busy then. Is six OK?', 'Yes, we need to hurry.', 'I’m 25.'], 'Sorry, I’m busy then. Is six OK?'],
  [PE, 'What time is it?', ['That’s £5.65, please.', 'It’s a quarter to nine now.', 'Usually about half past seven.'], 'It’s a quarter to nine now.'],
  [PE, 'Is there a gym in the hotel?', ['I’m not sure. Sorry. I don’t read a lot.', 'Yes, I have a reservation for 8 o’clock.', 'I’m sorry, there isn’t.'], 'I’m sorry, there isn’t.'],
  [PE, 'What time do you get up during the week?', ['Usually about half past seven.', 'It’s a quarter to nine now.', 'It’s on King Road, next to the park.'], 'Usually about half past seven.'],
];

// Options are rotated a little for each question so the right answer is not always in the same place.
function rotate(options, steps) {
  const k = steps % options.length;
  return [...options.slice(k), ...options.slice(0, k)];
}

export const beginner12 = rows.map(([meta, text, original, answer], i) => {
  if (!original.includes(answer)) throw new Error(`Question ${i + 1}: correct answer is not in the options`);
  const options = rotate(original, i);
  const correct = options.indexOf(answer);
  return {
    id: i + 1,
    section: meta.section,
    instruction: meta.instruction,
    text,
    options,
    correct,
    image: null,
  };
});