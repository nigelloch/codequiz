const startButton = document.getElementById('startbtn')

const answerContainer = document.getElementById('answer-container')

const quizInstructions = document.getElementById('quiz-instructions')

const question = document.getElementById('question')

startButton.addEventListener('click', startGame)

// start timer, hide start button, show question, show current score, reset timer
function startGame() {
    console.log(answerContainer.classList)
    answerContainer.classList.toggle('hide');

    console.log(quizInstructions.classList)
    quizInstructions.classList.toggle('hide');

    console.log(question.classList)
    question.classList.toggle('hide');

    console.log(startButton.classList)
    startButton.classList.toggle('hide');

}

function setNextQuestion() {

}

function selectAnswer() {

}



