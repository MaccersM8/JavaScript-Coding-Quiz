//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score

/* PSUEDO CODE FOR STEP ONE:
When Clicking On The Start Button, The Timer Starts
Timer Should Start At = 90 Seconds
Timer Should Decrease 1 Second At A Time Until Timer Reaches = 0 */

// Declaring A Variable Which Selects The "#Start" ID On HTML Page (The Start Quiz Button)
var StartQuiz = document.querySelector('#start');
// Declaring A Variable Which Selects The "#Time" ID On HTML Page (The Timer Counter)
var TimerCounter = document.querySelector('#time');
// Declaring A Variable Which Indicates Where The Timer Should Start (90 Seconds)
var SecondsLeft = 90;

// Creating A Function Called SetTime (This Dictates The Timer Functionality For The Quiz)
function SetTime() {
    // Creating A Function Within A Variable (This Dictates The Interval For The Timer Functionality For The Quiz)
    var TimerInterval = setInterval(function() {
        // Indicates That The Value Of The SecondsLeft Variable Should Decrease When Function Is Called
        SecondsLeft--;
        // Tells Program To Display The Value Of The SecondsLeft Variable On Web Page
        TimerCounter.textContent = SecondsLeft;

        // IF The Value Of The SecondsLeft Variable Is Equal To Zero ....
        if(SecondsLeft === 0) {
            // Stop The Timer Functionality Of The Quiz
            clearInterval(TimerInterval);
        }
    // The Timer Functionality Should Run At 1000 MiliSeconds (This Is Equal To One Second)    
    }, 1000);
}

// Creating A Function Called StartOfQuiz (This Dictates What Happens When Start Quiz Button Is Clicked)
function StartOfQuiz() {
    // Creating A Function That Happens When The Start Button Is Clicked On Web Page
    StartQuiz.addEventListener('click', function() {
        // Calling The SetTime Function
        SetTime();
    });
}

// Calling The StartOfQuiz Function
StartOfQuiz();




