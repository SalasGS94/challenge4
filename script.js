const start = document.querySelector(".start");
const startBtn = document.querySelector(".start-button");
const quiz = document.querySelector(".quiz");
const question = document.querySelector(".question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const timer = document.querySelector(".timer");
const counter = document.querySelector(".counter");

let questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts CORRECT",
        choiceD: "numbers",
        correct: "C"
    },{
        question: "The condition in an If/else statement is enclosed within ___.",
        choiceA: "quotes",
        choiceB: "curly brackets CORRECT",
        choiceC: "parentheses",
        choiceD: "square brackets",
        correct: "B"        
    }
]

function renderQuestion(){
    let q= questions[0];
    question.innerHTML= "<p>"+ q.question +"</p>";
    choiceA.innerHTML= q.choiceA;
    choiceB.innerHTML= q.choiceB;
    choiceC.innerHTML= q.choiceC;
    choiceD.innerHTML= q.choiceD;
}

startBtn.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display= "block";
}

