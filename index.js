//Step 1 to make array for question answer and correct answer.
const quizData = [
    {
        question: "Which type of JavaScript language is ___",
        options: [" Object-Oriented",
            " Object-Based",
            " Assembly-language",
            " High-level"],
        correct: "1",
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        options: [" Alternative to if-else",
            " Switch statement",
            " If-then-else statement",
            " immediate if"],
        correct: "3",
    },
    {
        question: "In JavaScript, what is a block of statement?",
        options: [" Conditional block",
            " block that combines a number of statements into a single compound statement",
            " both conditional block and a single statement",
            " block that contains a single statement"],
        correct: "1",
    },
    {
        question: "When interpreter encounters an empty statements, what it will do:",
        options: [" Shows a warning",
            " Prompts to complete the statement",
            " Throws an error",
            " Ignores the statements"],
        correct: "3",
    },
    {
        question: 'The "function" and " var" are known as:',
        options: [" Keywords",
            " Data types",
            " Declaration statements",
            " Prototypes"],
        correct: "2",
    },
    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        options: [" Global variable",
            " The local element",
            " The two of the above",
            " None of the above"],
        correct: "1",
    },
    {
        question: "Which one of the following is the correct way for calling the JavaScript code?",
        options: [" Preprocessor",
            "Triggering Event",
            " RMI ",
            " Function/Method"],
        correct: "3",
    },
    {
        question: "Which of the following type of a variable is volatile?",
        options: [" Mutable variable",
            " Dynamic variable",
            " Volatile variable",
            " Immutable variable"],
        correct: "0",
    },
    {
        question: "Which of the following option is used as hexadecimal literal beginning?",
        options: [" 00",
            " 0x",
            " 0X",
            " Both 0x and 0X"],
        correct: "3",
    },
    {
        question: "In the JavaScript, which one of the following is not considered as an error:",
        options: [" Syntax error",
            " Missing of semicolons",
            " Division by zero",
            " Missing of Bracket"],
        correct: "2",
    }
];


//Step 2 JavaScript initialization

const [questionElem, option_1, option_2, option_3, option_4] = document.querySelectorAll("#question, #option_0, #option_1, #option_2, #option_3");
const answerElem = document.querySelectorAll(".answer");
const submitBtn = document.getElementById('submit');
const previousBtn = document.getElementById('pre');
const quiz = document.getElementById('quiz')

let currentQuestion = 0;
let score = 0;
let selectedAnswerArray = []

//Step 3 Load the function means set questions and answer dynamically.

const loadQuize = () => {
    const { question, options } = quizData[currentQuestion]
    questionElem.innerText = `${currentQuestion + 1}: ${question}`;

    options.forEach((curentOption, index) => {
        window[`option_${index + 1}`].innerText = curentOption;
    })
}

loadQuize();


//step 4 Get Select Answer function on button submit.


const getSelectedOption = () => {
    let ans_index;
    answerElem.forEach((curentOption, index) => {
        if (curentOption.checked) {
            ans_index = index;
        }
    })
    return ans_index;
}

const deSelectQuiz = () => {
    answerElem.forEach((selectedAnswer) => { selectedAnswer.checked = false })
}


previousBtn.addEventListener('click',()=>{
    if (currentQuestion>0) {
        currentQuestion--;
        loadQuize();
        let selectedOption = selectedAnswerArray[currentQuestion];
        answerElem[selectedOption].checked = true;
    }
})

submitBtn.addEventListener('click', () => {
    const selectedAnswer = getSelectedOption();
    selectedAnswerArray[currentQuestion] = selectedAnswer;

    if (selectedAnswer === parseInt(quizData[currentQuestion].correct)) {
        score = score+1;
    }

    currentQuestion++;

    if (selectedAnswer>=0 && selectedAnswer <4) {
        if (currentQuestion < quizData.length) {
            deSelectQuiz();
            loadQuize();
            if(currentQuestion<selectedAnswerArray.length){let selectedOption = selectedAnswerArray[currentQuestion];
            answerElem[selectedOption].checked = true;}
        } else {
            quiz.innerHTML = `<h2>You answered  ${score} /  ${quizData.length} correctly...</h2>` 
            submitBtn.innerHTML = 'Reload';
            submitBtn.setAttribute('onclick','location.reload()')
        }
    }

})
