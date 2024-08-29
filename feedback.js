document.addEventListener('DOMContentLoaded', () => {
// AB, SV, C, CC, CB, LV, VB, CV, RC, IR, C-onset, C-coda, C-ab
const dropdown = document.getElementById('myDropdown');
let validCategories = [];

const squares = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
// Switch input data: G4_phonemes, alphabets
let sessionAnswers = alphabets
let score = 0
let marked = []
const squareColors = {
    'correct': 'rgb(255, 255, 255)', // rgb(255, 255, 255)
    'wrong': 'rgb(239, 186, 214)',
}
const fontColors = {
    //'red': 'rgb(239, 186, 214)',
    //'green': 'rgb(137, 215, 87)',
    'correct': 'rgb(65, 105, 225)',
    'wrong': 'rgb(200, 46, 127)',
}
const statuses = {
    0: 'correct',
    1: 'wrong',
    2: 'correct',
    3: 'correct',
    4: 'correct',
    5: 'correct',
    6: 'correct',
    7: 'correct',
    8: 'correct',
    9: 'wrong',
    10: 'wrong',
    11: 'wrong',
    12: 'wrong',
}
let currentPage = 0;
const squaresPerPage = 21;
    
// load the page
if (sessionAnswers === alphabets) {
    sessionAnswers = sessionAnswers.filter(answer => validCategories.includes(answer.alphabet.category));
    createAlphabetBoard(sessionAnswers);

    // TODO: addCourseTitle()
    const microphoneButton = document.querySelector('.fa.fa-microphone');
    microphoneButton.style.display = 'none'
    const divs = document.querySelectorAll('.vertical-legend-container div');
    const secondDiv = divs[1];
    secondDiv.style.display = 'none'
} else if (sessionAnswers === G4_phonemes) {
    createPhonemeBoard(sessionAnswers);
    makeCorrection();    
}
// Function to add course title
function addCourseTitle() {
    const lessonNames = document.getElementById('linksContainer');
    if (lessonNames) {
        while (lessonNames.firstChild) {
            lessonNames.removeChild(lessonNames.firstChild);
        }
    }
    const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');
    validCategories = Array.from(checkboxes)
                           .filter(checkbox => checkbox.checked)
                           .map(checkbox => checkbox.value);
    const items = zooTitlesNLinks.filter(item => validCategories.includes(item.lesson.code) && 
    item.lesson.code !== 'RC' && 
    item.lesson.code !== 'IR');
    items.forEach(item => {
        const lessonName = document.createElement('div'); // Create a new div element
        lessonName.textContent = item.lesson.unit + item.lesson.title_zh; // Set the text content
        lessonNames.appendChild(lessonName); // Append the created element
    });
}
    
// Function to add course text and URL
function addCourseTextNLink(url, text) {
    const itemElement = document.createElement('div');
    itemElement.style.marginTop = '5%';
    // christmas, fiesta, tropical, galactic, candy, crayon, boisterous
    itemElement.innerHTML = `<a href="${url}" target="_blank" class="link-button-galactic fa fa-external-link" style="font-size: 32px; left: 2%;"><span style="font-size: 18px;">${text}</span></a>`;
    return itemElement
}
    
// for simulation of real data
function getRandomOption(options) {
    const keys = Object.keys(options);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    const randomOption = options[randomKey];
    return randomOption;
}
    
function randomizeItem(item) {
    // 組合
    if (item.phoneme1.value === '') {
        const randomStatus = getRandomOption(statuses)
        item.word.status = randomStatus
    // 切割
    } else {
        for (const key in item) {
        if (key === 'word') continue;
        
        const randomStatus = getRandomOption(statuses);
        item[key].status = randomStatus;
        }
    }
    return item
}

function showPage(pageNumber) {
  const squares = document.querySelectorAll('.square, .wrong-square, .correct-square');
  squares.forEach((square, index) => {
    if (index === 0 || index === 2) { // TODO: to accomodate phoneme case: three legends
      square.style.display = 'block';
    } else if (index >= pageNumber * squaresPerPage + 3 && index < (pageNumber + 1) * squaresPerPage + 3) {
      square.style.display = 'block';  
    } else {
      square.style.display = 'none';
    }
  });
}
    
function showNextPage() {
  const squares = document.querySelectorAll('.square, .wrong-square, .correct-square');
  if ((currentPage + 1) * squaresPerPage < squares.length) {
    currentPage++;
    showPage(currentPage);
  }
}
    
function showPreviousPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

// find categories of wrong squares
function findCategories() {
    const wrongCodesSet = new Set();
    const wrongSquareDivs = document.querySelectorAll('.wrong-square');
    const spanTexts = Array.from(wrongSquareDivs).map(div => div.querySelector('span').textContent);
    spanTexts.forEach(text => {
        sessionAnswers.forEach(item => {
            if (item.alphabet.value === text) {
                wrongCodesSet.add(item.alphabet.category);
            }
        });
    });
    return wrongCodesSet
}

// 字形字音
function createAlphabetBoard(answers) {
  squares.innerHTML = ''; // Clear existing squares
  for (let i = 0; i < answers.length; i++) {
    let square = document.createElement('div');
    square.setAttribute('id', i);
    square.classList.add('square');
    // TODO: to replace with real alphabet data
    square = applyAlphabetFormat(square, answers[i]);
    squares.appendChild(square);
  }
  showPage(currentPage);
}

// 字形字音格式
function applyAlphabetFormat(square, item) {
    const correctAnswer = document.createElement('span');
    correctAnswer.textContent = item.alphabet.value;
    const randomNumber = Math.random();
    // student is correct
    // if (item.alphabet.student === correctAnswer.textContent)
    if (randomNumber < 0.85) {
        item.alphabet.status = statuses[0]
        square.appendChild(correctAnswer);
        square.classList.add('correct-square');
        const smileImage = document.createElement('img');
        smileImage.src = 'images/Hu_smile2.png';
        smileImage.classList.add('correct-img');
        square.appendChild(smileImage);
    }
    // student is wrong
    else {
        item.alphabet.status = statuses[1]
        square.appendChild(correctAnswer);
        square.classList.add('wrong-square');
        const button1 = document.createElement('button');
        button1.style.fontSize = '72px';
        button1.style.bottom = '7%';
        button1.style.right = '5%';
        button1.classList.add('fa', 'fa-volume-up');
        square.appendChild(button1);
        
        const categoryCode = item.alphabet.category;
        const entry = zooTitlesNLinks.find(item => categoryCode.includes(item.lesson.code));
        lesson = addCourseTextNLink(entry.lesson.link, ' 學習教材');
        square.appendChild(lesson);
    }
    return square;
}

// 音素
function createPhonemeBoard(answers) {
  squares.innerHTML = ''; // Clear existing squares
  for (let i = 0; i < answers.length; i++) {
    let square = document.createElement('div');
    square.setAttribute('id', i);
      
    // TODO: to replace with real phoneme data
    answers[i] = randomizeItem(answers[i]);
    square = applyPhonemeFormat(square, answers[i]);   
    squares.appendChild(square);
  }
  showPage(currentPage);
}
    
// 音素格式
function applyPhonemeFormat(square, item) {
    // square elements
    // 組合&切割: 訂正後變為正確 - wrong answers been judged as correct by the model at non-first attempt
    const existingButtons = square.querySelectorAll('button');
    if (existingButtons !== null && existingButtons.length > 0) { // once wrong
        console.log(square)
        if (square.style.backgroundColor === squareColors.correct) { // judged as correct
            element.removeChild(existingButtons);
            element.appendChild(smileImage);
        }
    } else {
        const studentAnswer = document.createElement('span');
        // 組合
        if (item.phoneme1.value === '') {
            studentAnswer.textContent = item.word.value;
            // 組合: 原始答案即正確
            if (item.word.status === statuses[0]){
                square.classList.add('correct-square');   
                const smileImage = document.createElement('img');
                smileImage.src = 'images/Hu_smile2.png';
                smileImage.classList.add('correct-img');
                square.appendChild(smileImage);
            // 組合: 原始答案及後續訂正皆錯
            } else {
                square.classList.add('wrong-square');
                const button1 = document.createElement('button');
                button1.style.fontSize = '45px';
                button1.classList.add('fa', 'fa-volume-up');
                square.appendChild(button1);
                const button2 = document.createElement('button');
                button2.style.fontSize = '45px';
                button2.classList.add('fa', 'fa-microphone');
                square.appendChild(button2);
            }
        // 切割
        } else {
            let html = '';
            for (const key in item) {
                if (key === 'word') continue;
                const fontColor = fontColors[item[key].status];
                const coloredPhoneme = `<span style="color: ${fontColor};">${item[key].value}</span>`;
                const coloredHyphen = `<span style="color: rgb(5,71,42);">-</span>`;
                html += coloredPhoneme + coloredHyphen;
            }   
            html = html.slice(0,-36); // coloredHyphen.length
            studentAnswer.innerHTML = html;

            // 以背景色代表音素切割整題對錯
            let backgroundColor = squareColors.correct;
            for (const key in item) {
                if (key === 'word') continue;
                if (item[key].status === (statuses[1])) {
                    backgroundColor = squareColors.wrong;
                    break;
                }
            }
            // 切割: 原始答案即正確
            if (backgroundColor === squareColors.correct) {
                square.classList.add('correct-square');
                const smileImage = document.createElement('img');
                smileImage.src = 'images/Hu_smile2.png';
                smileImage.classList.add('correct-img');
                square.appendChild(smileImage);
            // 切割: 原始答案及後續訂正皆錯
            } else {
                square.classList.add('wrong-square');
                const button1 = document.createElement('button');
                button1.style.fontSize = '45px';
                button1.classList.add('fa', 'fa-volume-up');
                square.appendChild(button1);
                const button2 = document.createElement('button');
                button2.style.fontSize = '45px';
                button2.classList.add('fa', 'fa-microphone');
                square.appendChild(button2);
            }
        }
        square.appendChild(studentAnswer);
        }
    return square;
}

// 字音字形子項目選擇功能
dropdown.addEventListener('change', (event) => {
    addCourseTitle()
    sessionAnswers = alphabets.filter(answer => validCategories.includes(answer.alphabet.category));
    score = 0; // 現有分數歸零
    marked = [];
    createAlphabetBoard(sessionAnswers);
});

    
// 音素訂正功能
let clickCount = 0;
function makeCorrection(){
    const idMicrophonePairs = getIdsAndMicrophoneButtons();
    
    idMicrophonePairs.forEach(pair => {
        pair['microphoneButton'].addEventListener('click', function() {
            clickCount++;
            if (clickCount % 2 === 1) {
                pair['microphoneButton'].classList.remove('fa-microphone');
                pair['microphoneButton'].classList.add('fa-stop');
            } else {
                pair['microphoneButton'].classList.remove('fa-stop');
                pair['microphoneButton'].classList.add('fa-microphone');
                id = pair['id']
                sessionAnswers[id] = randomizeItem(sessionAnswers[id]);
                let square = document.createElement('div');
                square.setAttribute('id', id);
                square = applyPhonemeFormat(square, sessionAnswers[id]);
                var parentElement = document.getElementsByClassName("squares")[0];
                var divToReplace = document.getElementById(id);
                parentElement.insertBefore(square, divToReplace);
                parentElement.removeChild(divToReplace);
            }
        });
    });
}
// 音素訂正輔助功能 
function getIdsAndMicrophoneButtons() {
    const microphoneButtons = document.querySelectorAll('.fa.fa-microphone');
    const idMicrophonePairs = [];

    microphoneButtons.forEach(button => {
        const id = button.closest('div').id;
        idMicrophonePairs.push({ 'id': id, 'microphoneButton': button });
    });
    
    return idMicrophonePairs;
}

// 更新總分
function updateScore(squares, sessionAnswers) {
    for (let i = 0; i < sessionAnswers.length; i++) {
    const element = document.getElementById(i);
    const computedStyle = window.getComputedStyle(element);

    if (computedStyle.backgroundColor === squareColors.correct && !marked.includes(i)) {
      score += 1;
      // TODO: to add 題本名稱
      /*const filteredTitles = zooTitlesNLinks.filter(item => validCategories.includes(item.lesson.code))
        .map(item => item.lesson.title_zh);
      console.log(filteredTitles)*/
      marked.push(i);}
     }
     scoreDisplay.innerHTML = "在 "+sessionAnswers.length +" 題的挑戰中，<br>你順利通過了 "+score+" 題";
}
  
// 更新星星顏色&位置
function updateStarColorNRelocate(score, sessionAnswers) {
    let color = '';

    // Get the path element of the star
    const starPath = document.getElementById('star-path');
    const starSvg = document.querySelector('.star-svg');
    
    if (score > 0.8*sessionAnswers.length) {
        starPath.setAttribute('fill', '#2ecc71')
        starSvg.style.left = '30%'
    } else if (score > 0.6*sessionAnswers.length) {
        starPath.setAttribute('fill', '#85e62c')
        starSvg.style.left = '40%'
    } else if (score > 0.4*sessionAnswers.length) {
        starPath.setAttribute('fill', '#faeb36')
        starSvg.style.left = '50%'
    } else if (score > 0.2*sessionAnswers.length) {
        starPath.setAttribute('fill', '#ffa500')
        starSvg.style.left = '60%'
    } else {
        starPath.setAttribute('fill', '#e74c3c')
        starSvg.style.left = '70%'
    }

    const scoreBoard = document.querySelector('.score-board');
    scoreBoard.style.backgroundColor = color;
}
    
// 定時偵測分數動態
window.setInterval(function(){
    updateScore(squares, sessionAnswers);
    console.log(score)
    updateStarColorNRelocate(score, sessionAnswers);
  }, 100)

// 離開功能
const exitButton = document.getElementById('exitButton');
exitButton.addEventListener('click', function(event) {   
    const divElements = document.querySelectorAll('.squares > div')
                                                  
    let confirmationMessage = '離開前，再複習一下吧' ;
    let hasWrongSquare = false;
    divElements.forEach(div => {
        // 音素訂正未完成
        if ((sessionAnswers === G4_phonemes) && div.classList.contains('wrong-square')) {
            hasWrongSquare = true;
            confirmationMessage = '訂正尚未完成，確定要離開此頁面嗎？';
        }
    });
    if (!confirm(confirmationMessage)) {
        // Prevent the default action (exit) if the user clicks cancel
        event.preventDefault();
    }
});
    
// 翻頁功能
const showNextPageButton = document.getElementById('showNextPageButton');
const showPreviousPageButton = document.getElementById('showPreviousPageButton');

if (showNextPageButton && showPreviousPageButton) {
showNextPageButton.addEventListener('click', function(event) {
  showNextPage();
});
showPreviousPageButton.addEventListener('click', function(event) {
  showPreviousPage();
});
} else {
console.error('Buttons not found in the DOM');
};
})
