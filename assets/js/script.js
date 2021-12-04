const startButton = document.getElementById('startbtn')

const answerContainer = document.getElementById('answer-container')

const quizInstructions = document.getElementById('quiz-instructions')

const question = document.getElementById('question')

const nextButton = document.getElementById('nextbtn')

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', setNextQuestion)

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

    console.log(nextButton.classList)
    nextButton.classList.toggle('hide');

}

function setNextQuestion() {

}

function selectAnswer() {

}



