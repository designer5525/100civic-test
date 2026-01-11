// --- 數據庫 ---

// 原題 (聽寫) - 26 句
const listOriginal = [
    "The United States has 50 states.",
    "Washington, D.C. is the capital.",
    "The flag has red and white stripes.",
    "New York City was the first capital.",
    "California has the most people.",
    "Canada is north of the United States.",
    "Alaska is the largest state.",
    "Mexico is south of the United States.",
    "American Indians live here first.",
    "They want to live in a free country.",
    "Delaware was the first state.",
    "Washington is the father of our country.",
    "Washington was the first president.",
    "Washington is on the dollar bill.",
    "Adams was the second president.",
    "George Washington is the Father of Our Country.",
    "Lincoln was president during the Civil War.",
    "The People elect Congress.",
    "We have 100 senators.",
    "Congress meets in Washington, D.C.",
    "We vote for president in November.",
    "The president lives in the White House.",
    "The White House is in Washington, D.C.",
    "The president lives in the White House.",
    "We have to pay taxes.",
    "Citizens can vote."
];

// 新題 (聽寫)
const listNew = [
    "Citizens elect the President.", "The freedom of Speech is one right.", "Columbus discovered America.",
    "We have fifty states in the Union.", "Canada is in the north of the United States.",
    "The colors of the stripes are red and white.", "The flag colors are red, white, and blue.",
    "We pay taxes.", "People come to be free.", "People want to vote.",
    "Adams was the second president of the United States.", "American Indians were here first."
];

// 100題 Civics (問答)
const listCivics = [
    {q: "What is the supreme law of the land?", a: "The Constitution"},
    {q: "What does the Constitution do?", a: "Sets up the government\nDefines the government\nProtects basic rights of Americans"},
    {q: "The idea of self-government is in the first three words of the Constitution. What are these words?", a: "We the People"},
    {q: "What is an amendment?", a: "A change (to the Constitution)\nAn addition (to the Constitution)"},
    {q: "What do we call the first ten amendments to the Constitution?", a: "The Bill of Rights"},
    {q: "What is one right or freedom from the First Amendment?", a: "Speech\nReligion\nAssembly\nPress\nPetition the government"},
    {q: "How many amendments does the Constitution have?", a: "Twenty-seven (27)"},
    {q: "What did the Declaration of Independence do?", a: "Announced our independence\nDeclared our independence\nSaid that the United States is free"},
    {q: "What are two rights in the Declaration of Independence?", a: "Life\nLiberty\nPursuit of happiness"},
    {q: "What is freedom of religion?", a: "You can practice any religion, or not practice a religion."},
    {q: "What is the economic system in the United States?", a: "Capitalist economy\nMarket economy"},
    {q: "What is the “rule of law”?", a: "Everyone must follow the law.\nLeaders must obey the law.\nGovernment must obey the law.\nNo one is above the law."},
    {q: "Name one branch or part of the government.", a: "Congress\nLegislative\nPresident\nExecutive\nThe courts\nJudicial"},
    {q: "What stops one branch of government from becoming too powerful?", a: "Checks and balances\nSeparation of powers"},
    {q: "Who is in charge of the executive branch?", a: "The President"},
    {q: "Who makes federal laws?", a: "Congress\nSenate and House\n(U.S. or national) legislature"},
    {q: "What are the two parts of the U.S. Congress?", a: "The Senate and House"},
    {q: "How many U.S. Senators are there?", a: "One hundred (100)"},
    {q: "We elect a U.S. Senator for how many years?", a: "Six (6)"},
    {q: "Who is one of your state’s U.S. Senators now?", a: "Answers will vary."},
    {q: "The House of Representatives has how many voting members?", a: "Four hundred thirty-five (435)"},
    {q: "We elect a U.S. Representative for how many years?", a: "Two (2)"},
    {q: "Name your U.S. Representative.", a: "Answers will vary."},
    {q: "Who does a U.S. Senator represent?", a: "All people of the state"},
    {q: "Why do some states have more Representatives than other states?", a: "(Because of) the state’s population"},
    {q: "We elect a President for how many years?", a: "Four (4)"},
    {q: "In what month do we vote for President?", a: "November"},
    {q: "What is the name of the President of the United States now?", a: "Visit uscis.gov (Currently: Joe Biden)"},
    {q: "What is the name of the Vice President of the United States now?", a: "Visit uscis.gov (Currently: Kamala Harris)"},
    {q: "If the President can no longer serve, who becomes President?", a: "The Vice President"},
    {q: "If both the President and the Vice President can no longer serve, who becomes President?", a: "The Speaker of the House"},
    {q: "Who is the Commander in Chief of the military?", a: "The President"},
    {q: "Who signs bills to become laws?", a: "The President"},
    {q: "Who vetoes bills?", a: "The President"},
    {q: "What does the President’s Cabinet do?", a: "Advises the President"},
    {q: "What are two Cabinet-level positions?", a: "Secretary of Agriculture\nSecretary of Commerce\nSecretary of Defense\nSecretary of Education\n(and others...)"},
    {q: "What does the judicial branch do?", a: "Reviews laws\nExplains laws\nResolves disputes\nDecides if a law goes against the Constitution"},
    {q: "What is the highest court in the United States?", a: "The Supreme Court"},
    {q: "How many justices are on the Supreme Court?", a: "Nine (9) (Check uscis.gov for updates)"},
    {q: "Who is the Chief Justice of the United States now?", a: "John Roberts (Check uscis.gov)"},
    {q: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?", a: "To print money\nTo declare war\nTo create an army\nTo make treaties"},
    {q: "Under our Constitution, some powers belong to the states. What is one power of the states?", a: "Provide schooling and education\nProvide protection (police)\nGive a driver’s license"},
    {q: "Who is the Governor of your state now?", a: "Answers will vary."},
    {q: "What is the capital of your state?", a: "Answers will vary."},
    {q: "What are the two major political parties in the United States?", a: "Democratic and Republican"},
    {q: "What is the political party of the President now?", a: "Democratic (Check uscis.gov)"},
    {q: "What is the name of the Speaker of the House of Representatives now?", a: "Check uscis.gov"},
    {q: "There are four amendments to the Constitution about who can vote. Describe one of them.", a: "Citizens eighteen (18) and older\nYou don’t have to pay (a poll tax)\nAny citizen can vote"},
    {q: "What is one responsibility that is only for United States citizens?", a: "Serve on a jury\nVote in a federal election"},
    {q: "Name one right only for United States citizens.", a: "Vote in a federal election\nRun for federal office"},
    {q: "What are two rights of everyone living in the United States?", a: "Freedom of expression\nFreedom of speech\nFreedom of assembly\nFreedom of religion"},
    {q: "What do we show loyalty to when we say the Pledge of Allegiance?", a: "The United States\nThe flag"},
    {q: "What is one promise you make when you become a United States citizen?", a: "Give up loyalty to other countries\nDefend the Constitution\nObey the laws"},
    {q: "How old do citizens have to be to vote for President?", a: "Eighteen (18) and older"},
    {q: "What are two ways that Americans can participate in their democracy?", a: "Vote\nJoin a political party\nHelp with a campaign\nRun for office"},
    {q: "When is the last day you can send in federal income tax forms?", a: "April 15"},
    {q: "When must all men register for the Selective Service?", a: "At age eighteen (18)\nBetween eighteen (18) and twenty-six (26)"},
    {q: "What is one reason colonists came to America?", a: "Freedom\nPolitical liberty\nReligious freedom\nEconomic opportunity"},
    {q: "Who lived in America before the Europeans arrived?", a: "American Indians\nNative Americans"},
    {q: "What group of people was taken to America and sold as slaves?", a: "Africans\nPeople from Africa"},
    {q: "Why did the colonists fight the British?", a: "Because of high taxes\nBecause the British army stayed in their houses\nBecause they didn’t have self-government"},
    {q: "Who wrote the Declaration of Independence?", a: "(Thomas) Jefferson"},
    {q: "When was the Declaration of Independence adopted?", a: "July 4, 1776"},
    {q: "There were 13 original states. Name three.", a: "New Hampshire, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina, Georgia"},
    {q: "What happened at the Constitutional Convention?", a: "The Constitution was written.\nThe Founding Fathers wrote the Constitution."},
    {q: "When was the Constitution written?", a: "1787"},
    {q: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.", a: "(James) Madison\n(Alexander) Hamilton\n(John) Jay\nPublius"},
    {q: "What is one thing Benjamin Franklin is famous for?", a: "U.S. diplomat\nOldest member of the Constitutional Convention\nFirst Postmaster General\nWriter of 'Poor Richard’s Almanac'"},
    {q: "Who is the “Father of Our Country”?", a: "(George) Washington"},
    {q: "Who was the first President?", a: "(George) Washington"},
    {q: "What territory did the United States buy from France in 1803?", a: "The Louisiana Territory"},
    {q: "Name one war fought by the United States in the 1800s.", a: "War of 1812\nMexican-American War\nCivil War\nSpanish-American War"},
    {q: "Name the U.S. war between the North and the South.", a: "The Civil War\nThe War between the States"},
    {q: "Name one problem that led to the Civil War.", a: "Slavery\nEconomic reasons\nStates’ rights"},
    {q: "What was one important thing that Abraham Lincoln did?", a: "Freed the slaves (Emancipation Proclamation)\nSaved (or preserved) the Union"},
    {q: "What did the Emancipation Proclamation do?", a: "Freed the slaves"},
    {q: "What did Susan B. Anthony do?", a: "Fought for women’s rights\nFought for civil rights"},
    {q: "Name one war fought by the United States in the 1900s.", a: "World War I\nWorld War II\nKorean War\nVietnam War\n(Persian) Gulf War"},
    {q: "Who was President during World War I?", a: "(Woodrow) Wilson"},
    {q: "Who was President during the Great Depression and World War II?", a: "(Franklin) Roosevelt"},
    {q: "Who did the United States fight in World War II?", a: "Japan, Germany, and Italy"},
    {q: "Before he was President, Eisenhower was a general. What war was he in?", a: "World War II"},
    {q: "During the Cold War, what was the main concern of the United States?", a: "Communism"},
    {q: "What movement tried to end racial discrimination?", a: "Civil rights (movement)"},
    {q: "What did Martin Luther King, Jr. do?", a: "Fought for civil rights\nWorked for equality for all Americans"},
    {q: "What major event happened on September 11, 2001, in the United States?", a: "Terrorists attacked the United States."},
    {q: "Name one American Indian tribe in the United States.", a: "Cherokee\nNavajo\nSioux\nChippewa\nChoctaw\nPueblo\n(and others)"},
    {q: "Name one of the two longest rivers in the United States.", a: "Missouri (River)\nMississippi (River)"},
    {q: "What ocean is on the West Coast of the United States?", a: "Pacific (Ocean)"},
    {q: "What ocean is on the East Coast of the United States?", a: "Atlantic (Ocean)"},
    {q: "Name one U.S. territory.", a: "Puerto Rico\nU.S. Virgin Islands\nAmerican Samoa\nNorthern Mariana Islands\nGuam"},
    {q: "Name one state that borders Canada.", a: "Maine, New Hampshire, Vermont, New York, Pennsylvania, Ohio, Michigan, Minnesota, North Dakota, Montana, Idaho, Washington, Alaska"},
    {q: "Name one state that borders Mexico.", a: "California, Arizona, New Mexico, Texas"},
    {q: "What is the capital of the United States?", a: "Washington, D.C."},
    {q: "Where is the Statue of Liberty?", a: "New York (Harbor)\nLiberty Island"},
    {q: "Why does the flag have 13 stripes?", a: "Because there were 13 original colonies"},
    {q: "Why does the flag have 50 stars?", a: "Because there is one star for each state"},
    {q: "What is the name of the national anthem?", a: "The Star-Spangled Banner"},
    {q: "When do we celebrate Independence Day?", a: "July 4"},
    {q: "Name two national U.S. holidays.", a: "New Year’s Day\nMartin Luther King, Jr. Day\nPresidents’ Day\nMemorial Day\nIndependence Day\nLabor Day\nColumbus Day\nVeterans Day\nThanksgiving\nChristmas"}
];

// --- 狀態變量 ---
let currentMode = 'original'; 
let currentIndex = 0; 
let isAnswerShown = false;

let statusOriginal = new Array(listOriginal.length).fill(null);
let statusNew = new Array(listNew.length).fill(null);
let statusCivics = new Array(listCivics.length).fill(null);

let civicsOrder = [];
let originalOrder = [];

// --- DOM 元素 ---
const titleDisplay = document.getElementById('title-display');
const hintText = document.getElementById('hint-text');
const contentArea = document.getElementById('content-area');
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const statsDisplay = document.getElementById('stats-display');
const dotsProgress = document.getElementById('dots-progress');
const judgmentArea = document.getElementById('judgment-area');

// --- 初始化 ---
window.onload = function() {
    civicsOrder = Array.from({length: listCivics.length}, (_, i) => i);
    originalOrder = Array.from({length: listOriginal.length}, (_, i) => i);
    
    shuffle(civicsOrder);
    shuffle(originalOrder); 

    loadQuestion();
};

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function switchTab(mode) {
    currentMode = mode;
    currentIndex = 0; 
    isAnswerShown = false;

    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-${mode}`).classList.add('active');

    loadQuestion();
}

function getCurrentStatusArray() {
    if (currentMode === 'original') return statusOriginal;
    if (currentMode === 'new') return statusNew;
    return statusCivics;
}

function getCurrentLength() {
    if (currentMode === 'original') return listOriginal.length;
    if (currentMode === 'new') return listNew.length;
    return listCivics.length;
}

function getCurrentContent() {
    let realIndex = currentIndex;
    
    if (currentMode === 'original') {
        realIndex = originalOrder[currentIndex];
        return { type: 'dictation', text: listOriginal[realIndex] };
    } else if (currentMode === 'civics') {
        realIndex = civicsOrder[currentIndex];
        return { type: 'qa', q: listCivics[realIndex].q, a: listCivics[realIndex].a };
    } else {
        return { type: 'dictation', text: listNew[currentIndex] };
    }
}

function renderDots() {
    dotsProgress.innerHTML = '';
    const count = getCurrentLength();
    const statusArr = getCurrentStatusArray();

    for (let i = 0; i < count; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (statusArr[i] === true) dot.classList.add('correct');
        else if (statusArr[i] === false) dot.classList.add('wrong');
        if (i === currentIndex) dot.classList.add('active');
        dot.onclick = function() { jumpToQuestion(i); };
        dotsProgress.appendChild(dot);
    }
}

function jumpToQuestion(index) {
    currentIndex = index;
    loadQuestion();
}

function updateStats() {
    const statusArr = getCurrentStatusArray();
    const answered = statusArr.filter(r => r !== null).length;
    const correct = statusArr.filter(r => r === true).length;
    const percent = answered === 0 ? 0 : Math.round((correct / answered) * 100);
    statsDisplay.innerText = `正確率: ${percent}% (${correct}/${answered})`;
}

function loadQuestion() {
    isAnswerShown = false;
    hintText.style.display = 'block';
    contentArea.style.display = 'none';
    judgmentArea.style.display = 'none';

    renderDots();
    updateStats();

    const content = getCurrentContent();
    titleDisplay.innerText = `第 ${currentIndex + 1} 題`;

    if (content.type === 'qa') {
        questionText.innerText = content.q;
        answerText.innerText = content.a;
    } else {
        questionText.innerText = "Listen and write down the sentence."; 
        answerText.innerText = content.text;
        answerText.style.fontSize = content.text.length > 35 ? "22px" : "26px";
    }
}

function toggleAnswer() {
    if (isAnswerShown) return;
    isAnswerShown = true;
    hintText.style.display = 'none';
    contentArea.style.display = 'block';
    judgmentArea.style.display = 'flex';
}

function recordResult(isCorrect) {
    const statusArr = getCurrentStatusArray();
    statusArr[currentIndex] = isCorrect;
    renderDots();
    updateStats();
}

function playAudio() {
    if (!('speechSynthesis' in window)) {
        alert("瀏覽器不支持語音播放");
        return;
    }
    window.speechSynthesis.cancel();
    const content = getCurrentContent();
    const textToRead = content.type === 'qa' ? content.q : content.text;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
}

function nextQuestion() {
    const maxLen = getCurrentLength();
    if (currentIndex < maxLen - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        if(confirm("本組題目已完成。是否重新開始？")) {
            if(currentMode === 'civics') {
                shuffle(civicsOrder);
                statusCivics.fill(null);
            } else if(currentMode === 'original') {
                shuffle(originalOrder);
                statusOriginal.fill(null);
            } else {
                statusNew.fill(null);
            }
            currentIndex = 0;
            loadQuestion();
        }
    }
}
