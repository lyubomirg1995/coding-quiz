var timeEl = document.getElementById("counter-key");
var secondsEl = document.getElementById("counter-value");
var secondsLeft = 40;
const startButton = document.getElementById("start-button");
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answers-buttons');
 
startButton.addEventListener('click', startGame);
// How to switch to next question? 


let shuffledQuestions, currentQuestionIndex;


function startGame () {

    answerButtonsElement.addEventListener('click',() => {
        currentQuestionIndex++
        setNextQuestion()
    })

    //Sets interval in variable
    console.log('Start Game');
        var timerInterval = setInterval(function() {
            document.getElementById("counter-value").innerHTML = secondsLeft;
            secondsLeft--;
            secondsLeft.textContent = secondsEl;
    
            if(secondsLeft === 0) {
                clearInterval(timerInterval);
                alert("You're out of time!");
    

            };
            
            
        }, 1000);


    
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState() 
    console.log(currentQuestionIndex);
    if(currentQuestionIndex > shuffledQuestions.length -1) {
        showQuestion(shuffledQuestions[currentQuestionIndex])
    } else {
        
    }
    //Call function to end game and enter highscore
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answers.text

        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState () {
    clearStatusClass(document.body);
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    };

}

function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    // How to dynamically switch to last screen?
    if (shuffledQuestions.length > currentQuestionIndex +1) {
        
    } else {
        
    }

}

const questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: 'strings', correct: false },
            { text: 'booleans', correct: true },
            { text: 'alerts', correct: false },
            { text: 'numbers', correct: false },
        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed within ___.',
        answers: [
            { text: 'quotes', correct: false },
            { text: 'curly brackets', correct: false },
            { text: 'parantheses', correct: true },
            { text: 'square brackets', correct: false },
        ]
    },
    {
        question: 'Arrays in Javascript can be used to store____.',
        answers: [
            { text: 'numbers and strings', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all of the above', correct: true },
        ]
    },
    {
        question: 'String values must be enclosed within ___ when being assigned to variables',
        answers: [
            { text: 'commas', correct: false },
            { text: 'curly brackets', correct: false},
            { text: 'quotes', correct: true },
            { text: 'parentheses', correct: false },     
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            { text: 'Javascript', correct: false },
            { text: 'terminal/bash,', correct: false },
            { text: 'for loops', correct: false },
            { text: 'console log', correct: true },
        ]
    }

]


// Present feedback??

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct');
    }
}


// add CSS class in styles.css --> should remove feedback after moving to next question 
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');

}

