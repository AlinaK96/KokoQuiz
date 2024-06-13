const questionImages = [
    "",
    "https://sun9-33.userapi.com/impg/xAOx2RgJoNbTjC5AJk5xG5rlGA3rRLtiDToB1Q/iETEIWWtaqU.jpg?size=763x1621&quality=95&sign=fa650f5eef55a27516142baf1d089f2f&type=album",
    "https://sun9-31.userapi.com/impg/PdKgqFJj8OK4KbTkhMm3uWVCdXikFuURrPgZ-Q/k25AGxub4F8.jpg?size=629x695&quality=95&sign=d56b16537849a7b41b54c245ab941663&type=album",
    "https://sun9-24.userapi.com/impg/Byqh9yrZJTC2fO7iqLErf0ukju9it9b61jD-RQ/de4mdHuxlAE.jpg?size=924x1626&quality=95&sign=02677cb3301199b9a2678dff86976548&type=album",
    "https://sun9-22.userapi.com/impg/vWVNLcHPS9dl_gxb8zpx1dv8xGaBJXiqVd3-uw/Yyb1GLC7ukg.jpg?size=1620x2160&quality=95&sign=c2c0703fbedf5accfd1d723fcbcee063&type=album",
    "https://sun9-64.userapi.com/impg/HVkJFlmc2Iuj6L_gtnxbpr-PAaQXWV_MGhKRgg/NEcTJtw6W7w.jpg?size=1620x2160&quality=95&sign=ba03a101e8114205c007579599342fbb&type=album",
    "https://sun9-72.userapi.com/impg/KcR884edKCMHImUYby3J1PS7ltoJHYzGOaUm_Q/jlCACNjjRfQ.jpg?size=960x1280&quality=95&sign=21691fc8b671e69d0900048291b91622&type=album",
    "https://sun9-74.userapi.com/impg/lMpwIoABRxHJLeF1NIJmFSn5YECpDBHsxmtTSQ/QPyRz6MbNiM.jpg?size=960x1280&quality=95&sign=715b6ac2916e59484c4556db3c285204&type=album",
    "https://sun9-64.userapi.com/impg/C3ef5Ti_weJncKYF4fu_J1fTpXD4E29ykCxJLw/rOXidOkb3qc.jpg?size=1620x2160&quality=95&sign=a0754987f3a947ef2f10c7585bf0c641&type=album",
    "https://sun9-14.userapi.com/impg/Tbb8T44lMQTeF736NbZPwi8rUC6QZ7XjAoA-KQ/MLwUaauydDs.jpg?size=428x435&quality=95&sign=5a21bf5b6e5d81c5f6bc1853a9c80e00&type=album",
    "https://sun9-51.userapi.com/impg/VLcn1rjJ8Oxs_gLmbwVL0UwoTMcV-XLaNbI1AA/MHfHuYQjEY8.jpg?size=965x1664&quality=95&sign=b75c33356d759567b83fd185cc735f23&type=album",
];

const questions = [
    {
        question: "Фамилия Иришки",
        optionA: "Сёлова",
        optionB: "Городова",
        optionC: "Деревнева",
        optionD: "Мегаполисовна",
        correctOption: "optionB"
    },
    {
        question: "Любимая машина?",
        optionA: "Ford Fusion",
        optionB: "Honda Civic",
        optionC: "Kia Rio",
        optionD: "Волга",
        correctOption: "optionD"
    },    
    {
        question: "Любимый российский репер?",
        optionA: "Паша Техник",
        optionB: "Баста",
        optionC: "Тимати",
        optionD: "Джиган",
        correctOption: "optionA"
    },
    {
        question: "Что бы Ира выбрала покушать?",
        optionA: "салаааатик",
        optionB: "бутеррррбродик",
        optionC: "тортик",
        optionD: "чипсики",
        correctOption: "optionA"
    },
    {
        question: "В какой город Ире запрещен вьезд",
        optionA: "Зверополис",
        optionB: "город-герой Кедровка",
        optionC: "Ленинск-Кузнецкий",
        optionD: "Готем Сити",
        correctOption: "optionC"
    },
    {
        question: "Что нужно брать с собой, когда идешь к ней в гости: ",
        optionA: "пиво",
        optionB: "туалетную бумагу",
        optionC: "палочки 'Никитка'",
        optionD: "микрофон",
        correctOption: "optionD"
    },
    {
        question: "Кого бы выбрала Ира:",
        optionA: "Егор Крид",
        optionB: "Ченинг Татум",
        optionC: "Райна Рендольс",
        optionD: "Райан Гослинг",
        correctOption: "optionC"
    },
    {
        question: "Что, по мнению Иры, нужно всегда брать на тусовку:",
        optionA: "таблетки",
        optionB: "косметику",
        optionC: "запасные трусы",
        optionD: "пиво",
        correctOption: "optionA"
    },
    {
        question: "Вы едите на пикник. Чем будет заниматься Ира?",
        optionA: "жечь камни",
        optionB: "всем мешать",
        optionC: "спать",
        optionD: "приедет, когда всё будет готово",
        correctOption: "optionA"
    },
    {
        question: "Любимый мем",
        optionA: "Педро-педро",
        optionB: "Тиньков",
        optionC: "Тиньков",
        optionD: "Педро-педро",
        correctOption: "optionB"
    }
]



let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

function updateScore(playerScore) {
    const scoreSpan = document.getElementById("player-score");
    scoreSpan.innerHTML = ''; 

    for (let i = 0; i < playerScore; i++) {
        const img = document.createElement('img');
        img.src = "./flower.svg";
        img.alt = "";
        img.width = 25;
        scoreSpan.appendChild(img);
    }
}

function NextQuestion(index) {
    const currentQuestion = questions[index]
    updateScore(playerScore)
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
}


function checkForAnswer() {
    const currentQuestion = questions[indexNumber];
    const currentQuestionAnswer = currentQuestion.correctOption;
    const options = document.getElementsByName("option");
    let correctOption = null;

    let answered = false;

    options.forEach((option) => {
        if (option.checked === true) {
            answered = true;
            if (option.value === currentQuestionAnswer) {
                correctOption = option.labels[0].id;
                document.getElementById(correctOption).style.backgroundColor = "#b5e48c";
                playerScore++;
            } else {
                const wrongLabelId = option.labels[0].id;
                document.getElementById(wrongLabelId).style.backgroundColor = "red";
                document.getElementById(correctOption).style.backgroundColor = "#b5e48c";
                wrongAttempt++;
            }
        }
    });

    if (!answered) {
        document.getElementById('option-modal').style.display = "flex";
        return;
    }

    indexNumber++;

    setTimeout(() => {
        if (indexNumber < questions.length) {
            NextQuestion(indexNumber);
            displayAnswerImage(); // Отображаем картинку после изменения indexNumber
        } else {
            handleEndGame();
        }
        resetOptionBackground();
    }, 1000);
}

function displayAnswerImage() {
    document.getElementById('answer-image').src = questionImages[indexNumber];
    document.getElementById('answer-modal').style.display = "flex";
}


function closeAnswerModal() {
    document.getElementById('answer-modal').style.display = "none";
    handleNextQuestion();
    closeOptionModal()
}

function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    // displayAnswerImage()
    setTimeout(() => {
        if (indexNumber < questions.length) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function finalUpdate(playerScore) {
    const scoreSpan = document.getElementById("right-answers");
    scoreSpan.innerHTML = ''; 

    for (let i = 0; i < playerScore; i++) {
        const img = document.createElement('img');
        img.src = "./flower.svg";
        img.alt = "";
        img.width = 25;
        scoreSpan.appendChild(img);
    }
}


function handleEndGame() {
    finalUpdate(playerScore)
    document.getElementById('score-modal').style.display = "flex"

}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    questions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

