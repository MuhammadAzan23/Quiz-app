var questions = [
    {
        title: 'What is HTML?',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Markup Language'
    },
    {
        title: 'What is CSS?',
        options: ['Styling Language', 'Gora Language', 'Kala Language', 'None of the above'],
        correctAnswer: 'Styling Language'
    },
    {
        title: 'What is JS?',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Programming Language'
    },
    {
        title: 'What is React?',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Programming Language'
    }
];

var currentQuestionIndex = 0;
var score = 0;

function startQuiz() {
    var startButton = document.getElementById('start-button');
    var questionElement = document.getElementById('question');
    var optionsElement = document.getElementById('options');
    var nextButton = document.getElementById('next-button');

    startButton.style.display = 'none';
    questionElement.style.display = 'block';
    optionsElement.style.display = 'block';
    nextButton.style.display = 'block';

    loadQuestion(currentQuestionIndex);
}

function loadQuestion(index) {
    var questionElement = document.getElementById('question');
    var optionsElement = document.getElementById('options');
    var question = questions[index];

    questionElement.textContent = question.title;
    optionsElement.innerHTML = '';

    question.options.forEach(function(option, i) {
        var optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.onclick = function() {
            checkAnswer(option);
        };
        optionsElement.appendChild(optionButton);
    });
}

function checkAnswer(selectedOption) {
    var question = questions[currentQuestionIndex];

    if (selectedOption === question.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

function showResult() {
    var questionElement = document.getElementById('question');
    var optionsElement = document.getElementById('options');
    var nextButton = document.getElementById('next-button');
    var resultElement = document.getElementById('result');
    var restartButton = document.getElementById('restart-button');

    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    nextButton.style.display = 'none';

    resultElement.textContent = 'Quiz completed! Your score is: ' + score + '/' + questions.length;
    resultElement.style.display = 'block';
    restartButton.style.display = 'block';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    var resultElement = document.getElementById('result');
    var restartButton = document.getElementById('restart-button');
    var questionElement = document.getElementById('question');
    var optionsElement = document.getElementById('options');
    var nextButton = document.getElementById('next-button');

    resultElement.style.display = 'none';
    restartButton.style.display = 'none';
    questionElement.style.display = 'block';
    optionsElement.style.display = 'block';
    nextButton.style.display = 'block';

    loadQuestion(currentQuestionIndex);
}
