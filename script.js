const questions = [
    {
        question: "Başkentinin adı nedir?",
        answer: "Ankara"
    },
    {
        question: "Dünyanın en uzun nehrinin adı nedir?",
        answer: "Nil"
    },
    {
        question: "Hangi gezegen Güneş Sistemi'ndeki en büyük gezegendir?",
        answer: "Jüpiter"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const submitAnswerButton = document.getElementById("submit-answer");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score-value");
const restartGameButton = document.getElementById("restart-game");


function displayQuestion() {
    questionElement.textContent = questions[currentQuestionIndex].question;
}

function checkAnswer() {
    const userAnswer = answerInput.value.toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        score++;
        resultElement.textContent = "Doğru!";
    } else {
        resultElement.textContent = `Yanlış! Doğru cevap: ${correctAnswer}`;
    }

    answerInput.value = "";
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }

    updateScore();
}

function updateScore() {
    scoreElement.textContent = score;
}

function endGame() {
    questionElement.textContent = "Oyun bitti!";
    submitAnswerButton.disabled = true;
    restartGameButton.style.display = "block";
}

submitAnswerButton.addEventListener("click", checkAnswer);
restartGameButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    submitAnswerButton.disabled = false;
    restartGameButton.style.display = "none";
    resultElement.textContent = "";
    displayQuestion();
    updateScore();
});

displayQuestion();
updateScore();
