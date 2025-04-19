const questions = [
    {
        question : "Which is largest animal in the world",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffee", correct: false}
        ]
    },
    {
        question : "national animal of india",
        answers: [
            {text: "tiger", correct: true},
            {text: "peacock", correct: false},
            {text: "Elephant", correct: false},
            {text: "Giraffee", correct: false}
        ]
    },
    {
        question : "national bird of india",
        answers: [
            {text: "tiger", correct: false},
            {text: "peacock", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffee", correct: false}
        ]
    }
]

const questionElement = document.getElementById("question")
const answerBtn = document.getElementById("answer-button")
const nextBtn = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let Score = 0;

function StartQuiz(){
    currentQuestionIndex = 0;
    Score= 0;
    nextBtn.innerHTML="Next"
    showQuestion()
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerBtn.appendChild(button);
        button.addEventListener("click", selectAnswer);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
    })
}
function resetState(){
    nextBtn.style.display = "none"
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct")
        Score++
    }else{
        selectedBtn.classList.add("Incorrect")
    }
    Array.from(answerBtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = "true"
    })
    nextBtn.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${Score} out of ${questions.length}!`
    nextBtn.innerHTML = "Play Again"
    nextBtn.style.display = "block"
}

function handleNextButton(){
 currentQuestionIndex++;
 if(currentQuestionIndex < questions.length){
    showQuestion();
 }else{
    showScore()
 }
}

nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        StartQuiz();
    }
})

StartQuiz()

