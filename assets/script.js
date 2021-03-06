//ARRAY OF QUESTIONS AND THEIR INITIAL STATUS
let questionDisplay = document.getElementById("questionPlaceholderSpace");
let buttonDivEl = document.getElementById("optionButton");
var currentQuestionIndex = 0;
var currentQuestion;
var currentAnswerToAdd;
var score = 0;
var scoreStorage = [];
var previousScores;
var userChoiceTaco;

let listOfQuestionsAndAnswers = [
    {
        question: "Arrays in Javascript can be used to store ___?",
        answerArray: ["Booleans", "Numbers and Strings", "Other Arrays", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Commonly used Data Types include ___.",
        answerArray: ["Booleans", "Strings", "Arrays", "All of the Above"],
        correctAnswer: "All of the Above"
    },
    {
        question: "The condition in an if/else statement is enclosed with a ___",
        answerArray: ["Bracket", "Curly Brace", "Parenthesis", "All of the above"],
        correctAnswer: "Parenthesis"
    },
    {
        question: "A very useful tool used during development and debugging",
        answerArray: ["Google", "For Loops", "Debugger", "all of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "String values must be enclosed with ___ when being assigned to variables.",
        answerArray: ["curly braces", "square brackets", "parentheses", "curly braces and parentheses"],
        correctAnswer: "Curly braces"
    },
    {
        question: "DOM stands for ___?",
        answerArray: ["Direct Optimized Model", "document Object Model", "Document Oblivion Matches", "Diligent Obtuse Monkey"],
        correctAnswer: "Document Object Model"
    },
    {
        question: "What is the point of HTML?",
        answerArray: ["HTML adds colors and fonts to a website", "HTML provides the basic layout of websites", "HTML adds logic to a website", "HTMl adds colors and logic to a website"],
        correctAnswer: "HTML proveds the basic layout of a website"
    },
    {
        question: "CSS stands for ___?",
        answerArray: ["Cartridge Section Styler", "Colorful Sheet Styler", "Cascading Style Sheets", "Card structure stylizer"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Which of the following are NOT forms of the command line?",
        answerArray: ["Kanban", "Bash", "Terminal", "All of the above"],
        correctAnswer: "Kanban"
    },
    {
        question: "Who created the World Wide Web?",
        answerArray: ["Tim Berners-Lee", "Steve Jobs", "Elon Musk", "Benjamin Franklin"],
        correctAnswer: "Tim Berners-Lee"
    }
]

// TIMER CODE
var time = 60
var timerInterval;
function tickTime() {
    time = time - 1;
    document.getElementById('timerStart').innerHTML = time;
}

//START BUTTON CODE
function startGame() {
    document.getElementById("startButton").addEventListener("click", function () {
        timerInterval = setInterval(() => { //start timer once the button is clicked
            if (time > 0) {
                tickTime();
            } else { //if the timer is equal to 0
                clearInterval(timerInterval);
                
                endGame();
            }
        }, 1000);
        //make the welcome dissappear when the button is clicked
        const initialWelcomeNotice = document.getElementById("initialWelcome")
        if (initialWelcomeNotice.style.display !== "none") {
            initialWelcomeNotice.style.display = "none";
        } else {
            initialWelcomeNotice.style.display = "block";
        }
        
        //make the question section visible
        var questionFormatting = document.getElementById("questionFormattingID"); //get the question section
        var displaySetting = questionFormatting.style.display; //get the current value of the div's display style
        if (displaySetting === 'block') {
            questionFormatting.style.display = "none"; //if the section is showing, hide it
        } else {
            questionFormatting.style.display = "block"; //if the section is not showing, show it
        }
        var pFormatting = document.getElementById("correctOrIncorrect");
        if (displaySetting === 'block') {
            pFormatting.style.display = "none";
        } else {
            pFormatting.style.display = 'block';
        }
        grabQuestion();
    })
};



//END GAME FUNCTION
function endGame() {
    //show score
}


//CYCLE THROUGH QUESTIONS CODE
function grabQuestion() {
    console.log(time);
    currentQuestion = listOfQuestionsAndAnswers[currentQuestionIndex].question;
    questionDisplay.textContent = currentQuestion; //set the question space to the current question in the array
    console.log(currentQuestion);
    buttonDivEl.innerHTML = ""; //set the buttons to an empty string so they don't hold onto previous data

    if (time > 0 || currentQuestionIndex <= listOfQuestionsAndAnswers.length) { //if the timer is greater than 0 or we aren't at the end of the array of questions, run this code
        for (let i = 0; i < listOfQuestionsAndAnswers[currentQuestionIndex].answerArray.length; i++) {
            currentAnswerToAdd = listOfQuestionsAndAnswers[currentQuestionIndex].answerArray[i];
            console.log("option: " + currentAnswerToAdd);
            let newButtonBeingCreated = document.createElement("button"); //create a button
            newButtonBeingCreated.innerHTML = currentAnswerToAdd;
            newButtonBeingCreated.type = "submit"; //sets it up t0 submit a value when clicked
            newButtonBeingCreated.name = "formBtn"; //name
            newButtonBeingCreated.addEventListener("click", function (event) {
                let target = event.target;
                if (target.matches('button')) {
                    userChoiceTaco = target.innerHTML
                    console.log(userChoiceTaco + " button was clicked"); //I THINK I NEED TO LOOK AT THIS IF STATEMENT ITS SUSPICIOUS/IDK WHAT EXACTLY ITS PURPOSE IS
                };
                console.log(currentAnswerToAdd);
                answerCheck();
            });
            buttonDivEl.appendChild(newButtonBeingCreated); //appends buttonBanana to buttons, or to the div in the html
        }
    } else { //if timer is 0 or we are past the last question, end game
        endGame();
    }
}



function answerCheck() { //function to check if the answer is correct
    console.log(userChoiceTaco);
    if (userChoiceTaco === listOfQuestionsAndAnswers[currentQuestionIndex].correctAnswer) { //if the answer matches the answer in the array
        currentQuestionIndex++; //move to the next question
        score + 1; //increase score
        console.log(score);
        document.getElementById("correctOrIncorrect").innerHTML = "CORRECT"; //make the p element reflect correct

    } else { //if teh user answer doesn't match the answer in the array
        time = time - 10;
        currentQuestionIndex++;
        document.getElementById("correctOrIncorrect").innerHTML = "INCORRECT";
    }
    grabQuestion();
}


//I NEED A FUNCTION TO KEEP TRACK OF SCORES
function keepScore () {

}



var myButton;
// when you hear a click on myButton fire my function called startGame
//myButton.addEventListener('click', startGame);
// fire my function callled startGame
startGame();
//grabQuestion();


