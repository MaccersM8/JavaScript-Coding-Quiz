// Declaring A Variable Which Selects The "#Start" ID On HTML Page (The Start Quiz Button)
var StartQuiz = document.getElementById("start");
// Declaring A Variable Which Selects The "#Time" ID On HTML Page (The Timer Counter)
var TimerCounter = document.querySelector('#time');
// Declaring A Variable Which Indicates Where The Timer Should Start (75 Seconds)
var SecondsLeft = 75;
// Declaring A Variable Which Selects The "#Start-Screen" ID On HTML Page
var StartScreen = document.querySelector('#start-screen');
// Declaring A Variable Which Selects The First ".Hide" Class On HTML Page
var QuestionsSectionClass = document.querySelector('.hide');
// Declaring A Variable Which Selects The "#Question-Title" ID On HTML Page
var QuestionTitle = document.querySelector('#question-title');
// Declaring A Variable Which Selects The "#Choices" ID On HTML Page
var QuestionChoices = document.querySelector("#choices");
// Declaring A Variable Which Holds The Value Of The Quiz Score
var QuizScore = 0;
// Creating An Object Which Contains The Quiz Questions And Answers
var QuizQuestions = {
    0: {
        Question_Title: "Inside Which HTML Element Do We Put The JavaScript?",
        Choices: {
            Choice_A: "<script>",
            Choice_B: "<js>",
            Choice_C: "<scripting>",
            Choice_D: "<javascript>",
        },
        Correct_Answer: "<script>",
    },
    1: {
        Question_Title: "Where Is The Correct Place To Insert A JavaScript?",
        Choices: {
            Choice_A: "The <body> Section",
            Choice_B: "Both The <head> Section And The <body> Section Are Correct",
            Choice_C: "The <head> Section",
        },
        Correct_Answer: "Both The <head> Section And The <body> Section Are Correct",
    },
    2: {
        Question_Title: "What Is The Correct Syntax For Referring To An External Script Called 'XXX.js'?",
        Choices: {
            Choice_A: "<script href='XXX.js'>",
            Choice_B: "<script name='XXX.js'>",
            Choice_C: "<script src='XXX.js'>",
        },
        Correct_Answer: "<script src='XXX.js'>",
    },
    3: {
        Question_Title: "How Would You Write An IF Statement In JavaScript?",
        Choices: {
            Choice_A: "if(i == 5)",
            Choice_B: "if i = 5",
            Choice_C: "if i = 5 then",
            Choice_D: "if i == 5 then",
        },
        Correct_Answer: "if(i == 5)",
    },
    4: {
        Question_Title: "How Does A FOR Loop Start?",
        Choices: {
            Choice_A: "for i = 1 to 5",
            Choice_B: "for(i = 0; i <= 5; i++)",
            Choice_C: "for(i <= 5; i++)",
            Choice_D: "for(i = 0; i <= 5)",
        },
        Correct_Answer: "for(i = 0; i <= 5; i++)",
    },
    5: {
        Question_Title: "How Can You Add A Comment In JavaScript?",
        Choices: {
            Choice_A: "//This Is A Comment",
            Choice_B: "'This Is A Comment'",
            Choice_C: "<!--This Is A Comment -->",
        },
        Correct_Answer: "//This Is A Comment",
    },
    6: {
        Question_Title: "How Do You Round The Number 7.25 To The Nearest Integer?",
        Choices: {
            Choice_A: "round(7.25)",
            Choice_B: "rnd(7.25)",
            Choice_C: "Math.round(7.25)",
            Choice_D: "Math.rnd(7.25)",
        },
        Correct_Answer: "Math.round(7.25)",
    },
    7: {
        Question_Title: "How Do You Find The Number With The Highest Value Of X And Y?",
        Choices: {
            Choice_A: "top(x, y)",
            Choice_B: "ceil(x, y)",
            Choice_C: "Math.ceil(x, y)",
            Choice_D: "Math.max(x, y)",
        },
        Correct_Answer: "Math.max(x, y)",
    },
    8: {
        Question_Title: "JavaScript Is The Same As Java.",
        Choices: {
            Choice_A: "True",
            Choice_B: "False",
        },
        Correct_Answer: "False",
    },
    9: {
        Question_Title: "How Do You Declare A JavaScript Variable?",
        Choices: {
            Choice_A: "v carName;",
            Choice_B: "variable carName",
            Choice_C: "var carName;",
        },
        Correct_Answer: "var carName;",
    },
}
// Declaring A Variable Which Selects The ".EndHide" ID On HTML Page
var EndScreen = document.querySelector('.endHide');
// Declaring A Variable For The Timer Clock
var TimerClock
// Declaring A Variable Which Selects The "#Final-Score" ID On HTML Page
var FinalScore = document.querySelector('#final-score');
var TimePoints
var QuestionFeedback = document.querySelector('#feedback');
var Initials = document.querySelector('#initials');
var SubmitButton = document.querySelector('#submit');
var UserData = {
    Initials: Initials,
    Score: QuizScore,
};

var HideFeedback = document.querySelector('.hideFeedback');
var Feedback = document.querySelector('#feedback');

// Creating A Function Called SetTime (This Dictates The Timer Functionality For The Quiz)
function SetTime() {
    // Creating A Function Within A Variable (This Dictates The Interval For The Timer Functionality For The Quiz)
    TimerClock = setInterval(function () {
        // Indicates That The Value Of The SecondsLeft Variable Should Decrease When Function Is Called
        SecondsLeft--;
        // Tells Program To Display The Value Of The SecondsLeft Variable On Web Page
        TimerCounter.textContent = SecondsLeft;


        // The Timer Functionality Should Run At 1000 MiliSeconds (This Is Equal To One Second)    
    }, 1000);

    // IF The Value Of The SecondsLeft Variable Is Equal To Zero ....
    if (SecondsLeft == 0) {
        EndOfQuiz();
    }
    // Removing The Content Shown With The "#StartScreen" ID On HTML Page
    StartScreen.style.display = 'none';
    // Changing The Display Attribute For Question Section On CSS Page To Be Visible
    QuestionsSectionClass.style.display = 'block';
}

// Creating A Function Which Displays The First Question In The Quiz
function DisplayQuestionOne() {
    // Making The "#Question-Title" ID Have The Same Value As The First Question Title In The Quiz Questions Object
    QuestionTitle.textContent = QuizQuestions[0].Question_Title;

    // Creating And Appending A Button For Choice A Of Question "0" In Quiz Questions Object
    var Q1B1 = document.createElement('button');
    Q1B1.innerText = QuizQuestions[0].Choices.Choice_A;
    QuestionChoices.appendChild(Q1B1);


    // Creating And Appending A Button For Choice B Of Question "0" In Quiz Questions Object
    var Q1B2 = document.createElement('button');
    Q1B2.innerText = QuizQuestions[0].Choices.Choice_B;
    QuestionChoices.appendChild(Q1B2);

    // Creating And Appending A Button For Choice C Of Question "0" In Quiz Questions Object
    var Q1B3 = document.createElement('button');
    Q1B3.innerText = QuizQuestions[0].Choices.Choice_C;
    QuestionChoices.appendChild(Q1B3);

    // Creating And Appending A Button For Choice D Of Question "0" In Quiz Questions Object
    var Q1B4 = document.createElement('button');
    Q1B4.innerText = QuizQuestions[0].Choices.Choice_D;
    QuestionChoices.appendChild(Q1B4);

    // Creating A Event Listener And Subsequent Function When Choice A Of Question "0" Is Selected
    Q1B1.addEventListener("click", function() {
        CorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionTwo();
    })

    // Creating A Event Listener And Subsequent Function When Choice B Of Question "0" Is Selected
    Q1B2.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionTwo();
    })

    // Creating A Event Listener And Subsequent Function When Choice C Of Question "0" Is Selected
    Q1B3.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionTwo();
    })

    // Creating A Event Listener And Subsequent Function When Choice D Of Question "0" Is Selected
    Q1B4.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionTwo();
    })
}

// Creating A Function Which Displays The Second Question In The Quiz
function DisplayQuestionTwo() {
    // Clears HTML Elements Within Question Choices Section Of HTML Document To Blank
    QuestionChoices.innerHTML = "";
    // Making The "#Question-Title" ID Have The Same Value As The Second Question Title In The Quiz Questions Object
    QuestionTitle.textContent = QuizQuestions[1].Question_Title;

    // Creating And Appending A Button For Choice A Of Question "1" In Quiz Questions Object
    var Q2B1 = document.createElement('button');
    Q2B1.innerText = QuizQuestions[1].Choices.Choice_A;
    QuestionChoices.appendChild(Q2B1);

    // Creating And Appending A Button For Choice B Of Question "1" In Quiz Questions Object
    var Q2B2 = document.createElement('button');
    Q2B2.innerText = QuizQuestions[1].Choices.Choice_B;
    QuestionChoices.appendChild(Q2B2);

    // Creating And Appending A Button For Choice C Of Question "1" In Quiz Questions Object
    var Q2B3 = document.createElement('button');
    Q2B3.innerText = QuizQuestions[1].Choices.Choice_C;
    QuestionChoices.appendChild(Q2B3);


    // Creating A Event Listener And Subsequent Function When Choice A Of Question "1" Is Selected
    Q2B1.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionThree();
        
    });

    // Creating A Event Listener And Subsequent Function When Choice B Of Question "1" Is Selected
    Q2B2.addEventListener("click", function() {
        CorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionThree();
        
    });

    // Creating A Event Listener And Subsequent Function When Choice C Of Question "1" Is Selected
    Q2B3.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionThree();

    });
}

// Creating A Function Which Displays The Third Question In The Quiz
function DisplayQuestionThree() {
    // Clears HTML Elements Within Question Choices Section Of HTML Document To Blank
    QuestionChoices.innerHTML = "";
    // Making The "#Question-Title" ID Have The Same Value As The Third Question Title In The Quiz Questions Object
    QuestionTitle.textContent = QuizQuestions[2].Question_Title;

    // Creating And Appending A Button For Choice A Of Question "2" In Quiz Questions Object
    var Q3B1 = document.createElement('button');
    Q3B1.innerText = QuizQuestions[2].Choices.Choice_A;
    QuestionChoices.appendChild(Q3B1);

    // Creating And Appending A Button For Choice B Of Question "2" In Quiz Questions Object
    var Q3B2 = document.createElement('button');
    Q3B2.innerText = QuizQuestions[2].Choices.Choice_B;
    QuestionChoices.appendChild(Q3B2);

    // Creating And Appending A Button For Choice C Of Question "2" In Quiz Questions Object
    var Q3B3 = document.createElement('button');
    Q3B3.innerText = QuizQuestions[2].Choices.Choice_C;
    QuestionChoices.appendChild(Q3B3);

    // Creating A Event Listener And Subsequent Function When Choice A Of Question "2" Is Selected
    Q3B1.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionFour();
    });

    // Creating A Event Listener And Subsequent Function When Choice B Of Question "2" Is Selected
    Q3B2.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionFour();
    });

    // Creating A Event Listener And Subsequent Function When Choice C Of Question "2" Is Selected
    Q3B3.addEventListener("click", function() {
        CorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionFour();
    });
}

// Creating A Function Which Displays The Fourth Question In The Quiz
function DisplayQuestionFour() {
    // Clears HTML Elements Within Question Choices Section Of HTML Document To Blank
    QuestionChoices.innerHTML = "";
    // Making The "#Question-Title" ID Have The Same Value As The Fourth Question Title In The Quiz Questions Object
    QuestionTitle.textContent = QuizQuestions[3].Question_Title;

    // Creating And Appending A Button For Choice A Of Question "3" In Quiz Questions Object
    var Q4B1 = document.createElement('button');
    Q4B1.innerText = QuizQuestions[3].Choices.Choice_A;
    QuestionChoices.appendChild(Q4B1);

    // Creating And Appending A Button For Choice B Of Question "3" In Quiz Questions Object
    var Q4B2 = document.createElement('button');
    Q4B2.innerText = QuizQuestions[3].Choices.Choice_B;
    QuestionChoices.appendChild(Q4B2);

    // Creating And Appending A Button For Choice C Of Question "3" In Quiz Questions Object
    var Q4B3 = document.createElement('button');
    Q4B3.innerText = QuizQuestions[3].Choices.Choice_C;
    QuestionChoices.appendChild(Q4B3);

    // Creating And Appending A Button For Choice D Of Question "3" In Quiz Questions Object
    var Q4B4 = document.createElement('button');
    Q4B4.innerText = QuizQuestions[3].Choices.Choice_D;
    QuestionChoices.appendChild(Q4B4);

    // Creating A Event Listener And Subsequent Function When Choice A Of Question "3" Is Selected
    Q4B1.addEventListener("click", function() {
        CorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionFive();
    });

    // Creating A Event Listener And Subsequent Function When Choice B Of Question "3" Is Selected
    Q4B2.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionFive();
    });

    // Creating A Event Listener And Subsequent Function When Choice C Of Question "3" Is Selected
    Q4B3.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionFive();
    });

    // Creating A Event Listener And Subsequent Function When Choice D Of Question "3" Is Selected
    Q4B4.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionFive();
    });
}

// Creating A Function Which Displays The Fifth Question In The Quiz
function DisplayQuestionFive() {
    // Clears HTML Elements Within Question Choices Section Of HTML Document To Blank
    QuestionChoices.innerHTML = "";
    // Making The "#Question-Title" ID Have The Same Value As The Fifth Question Title In The Quiz Questions Object
    QuestionTitle.textContent = QuizQuestions[4].Question_Title;

    // Creating And Appending A Button For Choice A Of Question "4" In Quiz Questions Object
    var Q5B1 = document.createElement('button');
    Q5B1.innerText = QuizQuestions[4].Choices.Choice_A;
    QuestionChoices.appendChild(Q5B1);

    // Creating And Appending A Button For Choice B Of Question "4" In Quiz Questions Object
    var Q5B2 = document.createElement('button');
    Q5B2.innerText = QuizQuestions[4].Choices.Choice_B;
    QuestionChoices.appendChild(Q5B2);

    // Creating And Appending A Button For Choice C Of Question "4" In Quiz Questions Object
    var Q5B3 = document.createElement('button');
    Q5B3.innerText = QuizQuestions[4].Choices.Choice_C;
    QuestionChoices.appendChild(Q5B3);

    // Creating And Appending A Button For Choice D Of Question "4" In Quiz Questions Object
    var Q5B4 = document.createElement('button');
    Q5B4.innerText = QuizQuestions[4].Choices.Choice_D;
    QuestionChoices.appendChild(Q5B4);

    // Creating A Event Listener And Subsequent Function When Choice A Of Question "4" Is Selected
    Q5B1.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionSix();
    });

    // Creating A Event Listener And Subsequent Function When Choice B Of Question "4" Is Selected
    Q5B2.addEventListener("click", function() {
        CorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionSix();
    });

    // Creating A Event Listener And Subsequent Function When Choice C Of Question "4" Is Selected
    Q5B3.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionSix();
    });

    // Creating A Event Listener And Subsequent Function When Choice D Of Question "4" Is Selected
    Q5B4.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionSix();
    });
}

// Creating A Function Which Displays The Sixth Question In The Quiz
function DisplayQuestionSix() {
    // Clears HTML Elements Within Question Choices Section Of HTML Document To Blank
    QuestionChoices.innerHTML = "";
    // Making The "#Question-Title" ID Have The Same Value As The Sixth Question Title In The Quiz Questions Object
    QuestionTitle.textContent = QuizQuestions[5].Question_Title;

    // Creating And Appending A Button For Choice A Of Question "5" In Quiz Questions Object
    var Q6B1 = document.createElement('button');
    Q6B1.innerText = QuizQuestions[5].Choices.Choice_A;
    QuestionChoices.appendChild(Q6B1);

    // Creating And Appending A Button For Choice B Of Question "5" In Quiz Questions Object
    var Q6B2 = document.createElement('button');
    Q6B2.innerText = QuizQuestions[5].Choices.Choice_B;
    QuestionChoices.appendChild(Q6B2);

    // Creating And Appending A Button For Choice C Of Question "5" In Quiz Questions Object
    var Q6B3 = document.createElement('button');
    Q6B3.innerText = QuizQuestions[5].Choices.Choice_C;
    QuestionChoices.appendChild(Q6B3);

    // Creating A Event Listener And Subsequent Function When Choice A Of Question "5" Is Selected
    Q6B1.addEventListener("click", function() {
        CorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionSeven();
    });

    // Creating A Event Listener And Subsequent Function When Choice B Of Question "5" Is Selected
    Q6B2.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionSeven();
    });

    // Creating A Event Listener And Subsequent Function When Choice C Of Question "5" Is Selected
    Q6B3.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionSeven();
    });
}

// Creating A Function Which Displays The Seventh Question In The Quiz
function DisplayQuestionSeven() {
    // Clears HTML Elements Within Question Choices Section Of HTML Document To Blank
    QuestionChoices.innerHTML = "";
    // Making The "#Question-Title" ID Have The Same Value As The Seventh Question Title In The Quiz Questions Object
    QuestionTitle.textContent = QuizQuestions[6].Question_Title;

    // Creating And Appending A Button For Choice A Of Question "6" In Quiz Questions Object
    var Q7B1 = document.createElement('button');
    Q7B1.innerText = QuizQuestions[6].Choices.Choice_A;
    QuestionChoices.appendChild(Q7B1);

    // Creating And Appending A Button For Choice B Of Question "6" In Quiz Questions Object
    var Q7B2 = document.createElement('button');
    Q7B2.innerText = QuizQuestions[6].Choices.Choice_B;
    QuestionChoices.appendChild(Q7B2);

    // Creating And Appending A Button For Choice C Of Question "6" In Quiz Questions Object
    var Q7B3 = document.createElement('button');
    Q7B3.innerText = QuizQuestions[6].Choices.Choice_C;
    QuestionChoices.appendChild(Q7B3);

    // Creating And Appending A Button For Choice D Of Question "6" In Quiz Questions Object
    var Q7B4 = document.createElement('button');
    Q7B4.innerText = QuizQuestions[6].Choices.Choice_D;
    QuestionChoices.appendChild(Q7B4);

    // Creating A Event Listener And Subsequent Function When Choice A Of Question "6" Is Selected
    Q7B1.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionEight();
    });

    // Creating A Event Listener And Subsequent Function When Choice B Of Question "6" Is Selected
    Q7B2.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionEight();
    });

    // Creating A Event Listener And Subsequent Function When Choice C Of Question "6" Is Selected
    Q7B3.addEventListener("click", function() {
        CorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionEight();
    });

    // Creating A Event Listener And Subsequent Function When Choice D Of Question "6" Is Selected
    Q7B4.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionEight();
    });
}

// Creating A Function Which Displays The Eighth Question In The Quiz
function DisplayQuestionEight() {
    // Clears HTML Elements Within Question Choices Section Of HTML Document To Blank
    QuestionChoices.innerHTML = "";
    // Making The "#Question-Title" ID Have The Same Value As The Eighth Question Title In The Quiz Questions Object
    QuestionTitle.textContent = QuizQuestions[7].Question_Title;

    // Creating And Appending A Button For Choice A Of Question "7" In Quiz Questions Object
    var Q8B1 = document.createElement('button');
    Q8B1.innerText = QuizQuestions[7].Choices.Choice_A;
    QuestionChoices.appendChild(Q8B1);

    // Creating And Appending A Button For Choice B Of Question "7" In Quiz Questions Object
    var Q8B2 = document.createElement('button');
    Q8B2.innerText = QuizQuestions[7].Choices.Choice_B;
    QuestionChoices.appendChild(Q8B2);

    // Creating And Appending A Button For Choice C Of Question "7" In Quiz Questions Object
    var Q8B3 = document.createElement('button');
    Q8B3.innerText = QuizQuestions[7].Choices.Choice_C;
    QuestionChoices.appendChild(Q8B3);

    // Creating And Appending A Button For Choice D Of Question "7" In Quiz Questions Object
    var Q8B4 = document.createElement('button');
    Q8B4.innerText = QuizQuestions[7].Choices.Choice_D;
    QuestionChoices.appendChild(Q8B4);

    // Creating A Event Listener And Subsequent Function When Choice A Of Question "7" Is Selected
    Q8B1.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionNine();
    });

    // Creating A Event Listener And Subsequent Function When Choice B Of Question "7" Is Selected
    Q8B2.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionNine();
    });

    // Creating A Event Listener And Subsequent Function When Choice C Of Question "7" Is Selected
    Q8B3.addEventListener("click", function() {
        CorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionNine();
    });

    // Creating A Event Listener And Subsequent Function When Choice D Of Question "7" Is Selected
    Q8B4.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionNine();
    });
}

// Creating A Function Which Displays The Ninth Question In The Quiz
function DisplayQuestionNine() {
    // Clears HTML Elements Within Question Choices Section Of HTML Document To Blank
    QuestionChoices.innerHTML = "";
    // Making The "#Question-Title" ID Have The Same Value As The Ninth Question Title In The Quiz Questions Object
    QuestionTitle.textContent = QuizQuestions[8].Question_Title;

    // Creating And Appending A Button For Choice A Of Question "8" In Quiz Questions Object
    var Q9B1 = document.createElement('button');
    Q9B1.innerText = QuizQuestions[8].Choices.Choice_A;
    QuestionChoices.appendChild(Q9B1);

    // Creating And Appending A Button For Choice B Of Question "8" In Quiz Questions Object
    var Q9B2 = document.createElement('button');
    Q9B2.innerText = QuizQuestions[8].Choices.Choice_B;
    QuestionChoices.appendChild(Q9B2);

    // Creating A Event Listener And Subsequent Function When Choice A Of Question "8" Is Selected
    Q9B1.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionTen();
    });

    // Creating A Event Listener And Subsequent Function When Choice B Of Question "8" Is Selected
    Q9B2.addEventListener("click", function() {
        CorrectAnswer();
        QuestionTitle.textContent = " ";
        DisplayQuestionTen();
    });
}

// Creating A Function Which Displays The Tenth Question In The Quiz
function DisplayQuestionTen() {
    // Clears HTML Elements Within Question Choices Section Of HTML Document To Blank
    QuestionChoices.innerHTML = "";
    // Making The "#Question-Title" ID Have The Same Value As The Tenth Question Title In The Quiz Questions Object
    QuestionTitle.textContent = QuizQuestions[9].Question_Title;

    // Creating And Appending A Button For Choice A Of Question "9" In Quiz Questions Object
    var Q10B1 = document.createElement('button');
    Q10B1.innerText = QuizQuestions[9].Choices.Choice_A;
    QuestionChoices.appendChild(Q10B1);

    // Creating And Appending A Button For Choice B Of Question "9" In Quiz Questions Object
    var Q10B2 = document.createElement('button');
    Q10B2.innerText = QuizQuestions[9].Choices.Choice_B;
    QuestionChoices.appendChild(Q10B2);

    // Creating And Appending A Button For Choice C Of Question "9" In Quiz Questions Object
    var Q10B3 = document.createElement('button');
    Q10B3.innerText = QuizQuestions[9].Choices.Choice_C;
    QuestionChoices.appendChild(Q10B3);

    // Creating A Event Listener And Subsequent Function When Choice A Of Question "9" Is Selected
    Q10B1.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        EndOfQuiz();
    });

    // Creating A Event Listener And Subsequent Function When Choice B Of Question "9" Is Selected
    Q10B2.addEventListener("click", function() {
        IncorrectAnswer();
        QuestionTitle.textContent = " ";
        EndOfQuiz();
    });

    // Creating A Event Listener And Subsequent Function When Choice C Of Question "9" Is Selected
    Q10B3.addEventListener("click", function() {
        CorrectAnswer();
        QuestionTitle.textContent = " ";
        EndOfQuiz();
    });
}

// Creating A Function Called StartOfQuiz (This Dictates What Happens When Start Quiz Button Is Clicked)
function StartOfQuiz() {
    // Creating A EventListener That Happens When The Start Button Is Clicked On Web Page
    StartQuiz.addEventListener('click', SetTime);
    HideFeedback.style.display = 'block';
    DisplayQuestionOne();
}

// Creating A Function Called EndOfQuiz (This Dictates What Happens When The Quiz Is Finished)
function EndOfQuiz() {
    // Stopping The Timer Shown On The Web Page
    clearInterval(TimerClock);
    // Clearing The HTML Elements Of The Question Choices Section
    QuestionChoices.innerHTML = "";
    // Changing The Display Property Of The End Screen To Block
    EndScreen.style.display = 'block';
    // Displaying The Quiz Score On The Web Page
    FinalScore.textContent = QuizScore;
    
    SubmitButton.addEventListener("click", function(event){
        event.preventDefault();
    });
    
    localStorage.setItem("User", UserData);
}

// Creating A Function That Will Play Correct Sound Effect
function PlayCorrectSound(){
    var correctaudio = new Audio('assets/sfx/correct.wav');
    correctaudio.play();
};

// Creating A Function Called Correct Answer (This Will Apply When Correct Choice Is Selected)
function CorrectAnswer() {
    // Clearing Text Content Of Feedback Section
    Feedback.textContent = "";
    // Creating A New P Element In HTML Document
    var CorrectResponse = document.createElement('p');
    // Giving New P Element Some Content
    CorrectResponse.textContent = "Correct! 3 Points Added To Your Score!!";
    // Appending New P Element To Bottom Of Feedback Section
    Feedback.appendChild(CorrectResponse);
    // Calling Correct Sound Function
    PlayCorrectSound();
    // Adding A Value Of Three To To Quiz Score
    QuizScore = QuizScore + 3;
}

// Creating A Function That Will Play Incorrect Sound Effect
function PlayIncorrectSound(){
    var incorrectaudio = new Audio('assets/sfx/incorrect.wav');
    incorrectaudio.play();
}

// Creating A Function Called Incorrect Answer (This Will Apply When Incorrect Choice Is Selected)
function IncorrectAnswer() {
    // Clearing Text Conent Of Feedback Section
    Feedback.textContent = "";
    // Creating A New P Element In HTML Document
    var IncorrectResponse = document.createElement('p');
    // Giving New P Element Some Content
    IncorrectResponse.textContent = "Oops! Incorrect! 5 Seconds Removed Off Your Time!!";
    // Appending New P Element To Bottom Of Feedback Section
    Feedback.appendChild(IncorrectResponse);
    // Calling Incorrect Sound Function
    PlayIncorrectSound();
    // Reducing Timer By 5 Seconds
    SecondsLeft = SecondsLeft - 5;
}

// Calling The StartOfQuiz Function
StartOfQuiz();