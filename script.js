const start = document.querySelector(".start");
const startBtn = document.querySelector(".start-button");
const quiz = document.querySelector(".quiz");
const question = document.querySelector(".question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const timerText = document.querySelector(".timer-text");
const timerEl = document.querySelector(".timer-count");

let questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        correct: "C"
    },{
        question: "The condition in an If/else statement is enclosed within ___.",
        choiceA: "quotes",
        choiceB: "curly brackets",
        choiceC: "parentheses",
        choiceD: "square brackets",
        correct: "B"        
    },{
        question: "Arrays in Javascript can be used to store ___.",
        choiceA: "numbers and strings",
        choiceB: "other arrays",
        choiceC: "booleans",
        choiceD: "all of the above",
        correct: "D"        
    },{
        question: "String values must be enclosed within ___ when being assigned to variables.",
        choiceA: "commas",
        choiceB: "curly brackets",
        choiceC: "quotes",
        choiceD: "parentheses",
        correct: "C"        
    }
]

function renderQuestion(){
    let q= questions[currentQ];
    question.innerHTML= "<p>"+ q.question +"</p>";
    choiceA.innerHTML= q.choiceA;
    choiceB.innerHTML= q.choiceB;
    choiceC.innerHTML= q.choiceC;
    choiceD.innerHTML= q.choiceD;
}

var lastQ = questions.length;
var currentQ = 0;
var score = 0;
var timer;
var timerCount;

startBtn.addEventListener("click",startQuiz);

function startQuiz(){
    timerCount = 30;
    start.style.display = "none";
    renderQuestion();
    quiz.style.display= "block";
    startTimer()
}

function startTimer(){
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount >=0) {
            if (currentQ === lastQ){
                gameOver();
            }
        }
        if (timerCount === 0) {
            gameOver();
        }
    }, 1000);
}

function AnswerIncorrect() {
    timerCount -= 5;
  }

function gameOver() {
    start.style.display = "block";
    quiz.style.display= "none";
    start.innerHTML= "<p> Game Over. Your score is "+ score +" </p>";
    timerText.style.display= "none";
    clearInterval(timer);
  }

  function checkAnswer(answer) {
    if (answer === questions[currentQ].correct) {
      score++;
    }else{
      AnswerIncorrect();
    }
    if(currentQ < lastQ){
        currentQ++;
        renderQuestion();
    }else{
        gameOver;
    }
  }