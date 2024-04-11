const questions = [
    {
        question: "Когда у Кати день рождение ?",
        optionA: "12 апреля",
        optionB: "5 апреля",
        optionC: "10 мая",
        optionD: "7 апреля",
        correctOption: "optionB"
    },
    {
        question: "Любимый сувенир с работы?",
        optionA: "стул",
        optionB: "фирменная футболка",
        optionC: "сломанная нервная система",
        optionD: "детские рисунки",
        correctOption: "optionA"
    },    
    {
        question: "Через что Катя ходила в школу",
        optionA: "через лес",
        optionB: "через раз",
        optionC: "через училище связи",
        optionD: "через церковь",
        correctOption: "optionC"
    },
    {
        question: "Кем она еще НЕ была на Хеллуин",
        optionA: "доктором",
        optionB: "Круэллой",
        optionC: "певицей в церковном хоре",
        optionD: "матерью драконов",
        correctOption: "optionD"
    },
    {
        question: "Страна, в которой она мечтает побывать",
        optionA: "Зверополис",
        optionB: "Греция",
        optionC: "Турция",
        optionD: "Дженовия",
        correctOption: "optionB"
    },
    {
        question: "Что бы она выбрала: ",
        optionA: "яйца Бенедикт",
        optionB: "школу Бенедикт",
        optionC: "Бенедикта Камбербэтча",
        optionD: "певца Шака Бенедикта",
        correctOption: "optionA"
    },
    {
        question: "Бармен:",
        optionA: "голубичка",
        optionB: "черничка",
        optionC: "вишенка",
        optionD: "смородинка",
        correctOption: "optionC"
    },
    {
        question: "Как Катя называет свою маму:",
        optionA: "циклон `Ольга`",
        optionB: "тайфун `Ольга`",
        optionC: "цунами `Ольга`",
        optionD: "торнадо `Ольга`",
        correctOption: "optionA"
    },
    {
        question: "Как её называли в школе",
        optionA: "Кора",
        optionB: "Пятёрочка",
        optionC: "Магнит",
        optionD: "Екатерина Ра",
        correctOption: "optionA"
    },
    {
        question: "Как Катя называет свою квартиру",
        optionA: "Колбаса",
        optionB: "Сосиска",
        optionC: "Спагетти",
        optionD: "Банан",
        correctOption: "optionB"
    },
    {
        question: "Какого возраста её студенты",
        optionA: "Катя кого-то учит?",
        optionB: "3-14",
        optionC: "3-12",
        optionD: "5-16",
        correctOption: "optionB"
    },
    {
        question: "Покруча ка локон светлый, буду я как.... ",
        optionA: "Крис Хемсворт",
        optionB: "Иден Кэпвелл",
        optionC: "Райан Гослинг",
        optionD: "Кэмерон Диас",
        correctOption: "optionB"
    },
    {
        question: "Чем Катя занималась в детстве?",
        optionA: "хернёй",
        optionB: "лыжами",
        optionC: "стрельбой",
        optionD: "гимнастикой",
        correctOption: "optionD"
    },
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
    const currentQuestion = questions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "#b5e48c"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "#b5e48c"
            wrongAttempt++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber < questions.length) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 2000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
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
    let remark = null
    let remarkColor = null

    if (playerScore <= 5) {
        remark = "Сомнительно, но ОКЭЭЭЭЙ"
        remarkColor = "#120101"
    }
    else if (playerScore >= 6 && playerScore < 10) {
        remark = "Слушаю Катю в пол уха"
        remarkColor = "orange"
    }
    else if (playerScore >= 10) {
        remark = "Я её отлично знаю. Таким результатом не стыдно и поделиться"
        remarkColor = "#b5e48c"
    }

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    finalUpdate(playerScore)
    // document.getElementById('right-answers').innerHTML = playerScore
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

