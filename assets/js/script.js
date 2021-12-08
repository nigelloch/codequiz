var startButton = document.getElementById('startbtn')
var questionContainer = document.getElementById('question-container')
var quizInstructions = document.getElementById('quiz-instructions')
var questionIdElement = document.getElementById('questionId')
var nextButton = document.getElementById('nextbtn')
var questionText = document.getElementById('questionId')


// answer buttons
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var currentQuestion;
var timeRemainingSpan = document.getElementById('timer')
var timeRemaining;
var penalty = 10;



startButton.addEventListener('click', startGame)
//nextButton.addEventListener('click', setNextQuestion)

// start timer, hide start button, show question, show current score, reset timer
function startGame() {
    
    quizInstructions.classList.toggle('hide');
    startButton.classList.toggle('hide');
    questionContainer.classList.remove('hide');
    currentQuestion = 0;
    nextQuestions()
    timeRemaining = 60;
    timer()

}

// load next question and answers
function nextQuestions() {

    questionText.textContent = questionsList[currentQuestion].title;
    opt1.textContent = questionsList[currentQuestion].answers[0].text;
    opt2.textContent = questionsList[currentQuestion].answers[1].text;
    opt3.textContent = questionsList[currentQuestion].answers[2].text;
    opt4.textContent = questionsList[currentQuestion].answers[3].text;

}


// confirm answer correct or wrong - add 10 second penalty to timer if wrong
function checkAnswerandIterate (event) {
    var chosenAnswer = event.target.textContent


    currentQuestion++;
    if(currentQuestion<questionsList.length){
        nextQuestions()
    }
}


function timer () {
    var interval= setInterval(function(){
        //decrease time every second
        timeRemaining--;
        timeRemainingSpan.textContent = timeRemaining
        if(timeRemaining <= 0) {
            clearInterval(interval)
        }
    }, 1000)
    
}

// game complete all questions answered - total points - save to localStorage for high score - play again option




opt1.addEventListener("click", checkAnswerandIterate);
opt2.addEventListener("click", checkAnswerandIterate);
opt3.addEventListener("click", checkAnswerandIterate);
opt4.addEventListener("click", checkAnswerandIterate);