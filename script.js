//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score

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

// Creating A Function Called SetTime (This Dictates The Timer Functionality For The Quiz)
function SetTime() {
    // Creating A Function Within A Variable (This Dictates The Interval For The Timer Functionality For The Quiz)
    var TimerInterval = setInterval(function () {
        // Indicates That The Value Of The SecondsLeft Variable Should Decrease When Function Is Called
        SecondsLeft--;
        // Tells Program To Display The Value Of The SecondsLeft Variable On Web Page
        TimerCounter.textContent = SecondsLeft;


        // The Timer Functionality Should Run At 1000 MiliSeconds (This Is Equal To One Second)    
    }, 1000);

    // IF The Value Of The SecondsLeft Variable Is Equal To Zero ....
    if (SecondsLeft === 0) {
        // Stop The Timer Functionality Of The Quiz
        clearInterval(TimerInterval);
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
        // Calling Correct Answer Function
        CorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Two Function
        DisplayQuestionTwo();
    })

    // Creating A Event Listener And Subsequent Function When Choice B Of Question "0" Is Selected
    Q1B2.addEventListener("click", function() {
        // Calling Incorrect Answer Function
        IncorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Two Function
        DisplayQuestionTwo();
    })

    // Creating A Event Listener And Subsequent Function When Choice C Of Question "0" Is Selected
    Q1B3.addEventListener("click", function() {
        // Calling Incorrect Answer Function
        IncorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Two Function
        DisplayQuestionTwo();
    })

    // Creating A Event Listener And Subsequent Function When Choice D Of Question "0" Is Selected
    Q1B4.addEventListener("click", function() {
        // Calling Incorrect Answer Function
        IncorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Two Function
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
        // Calling Incorrect Answer Function
        IncorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Three Function
        DisplayQuestionThree();
    });

    // Creating A Event Listener And Subsequent Function When Choice B Of Question "1" Is Selected
    Q2B2.addEventListener("click", function() {
        // Calling Correct Answer Function
        CorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Three Function
        DisplayQuestionThree();
    });

    // Creating A Event Listener And Subsequent Function When Choice A Of Question "1" Is Selected
    Q2B1.addEventListener("click", function() {
        // Calling Incorrect Answer Function
        IncorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Three Function
        DisplayQuestionThree();
        
    });

    // Creating A Event Listener And Subsequent Function When Choice A Of Question "1" Is Selected
    Q2B2.addEventListener("click", function() {
        // Calling Correct Answer Function
        CorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Three Function
        DisplayQuestionThree();
        
    });

    // Creating A Event Listener And Subsequent Function When Choice C Of Question "1" Is Selected
    Q2B3.addEventListener("click", function() {
        // Calling Incorrect Answer Function
        IncorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Three Function
        DisplayQuestionThree();

    });
}

// Creating A Function Which Displays The Third Question In The Quiz
function DisplayQuestionThree() {
    // Clears HTML Elements Within Question Choices Section Of HTML Document To Blank
    QuestionChoices.innerHTML = "";
    // Making The "#Question-Title" ID Have The Same Value As The Second Question Title In The Quiz Questions Object
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
        // Calling Incorrect Answer Function
        IncorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Four Function
        DisplayQuestionFour();
    });

    // Creating A Event Listener And Subsequent Function When Choice B Of Question "2" Is Selected
    Q3B2.addEventListener("click", function() {
        // Calling Incorrect Answer Function
        IncorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Four Function
        DisplayQuestionFour();
    });

    // Creating A Event Listener And Subsequent Function When Choice C Of Question "2" Is Selected
    Q3B3.addEventListener("click", function() {
        // Calling Correct Answer Function
        CorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Four Function
        DisplayQuestionFour();
    });
}

// Creating A Function Which Displays The Fourth Question In The Quiz
function DisplayQuestionFour() {
    // Clears HTML Elements Within Question Choices Section Of HTML Document To Blank
    QuestionChoices.innerHTML = "";
    // Making The "#Question-Title" ID Have The Same Value As The Second Question Title In The Quiz Questions Object
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
        // Calling Correct Answer Function
        CorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Five Function
        DisplayQuestionFive();
    });

    // Creating A Event Listener And Subsequent Function When Choice B Of Question "3" Is Selected
    Q4B2.addEventListener("click", function() {
        // Calling Incorrect Answer Function
        IncorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Five Function
        DisplayQuestionFive();
    });

    // Creating A Event Listener And Subsequent Function When Choice C Of Question "3" Is Selected
    Q4B3.addEventListener("click", function() {
        // Calling Incorrect Answer Function
        IncorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Five Function
        DisplayQuestionFive();
    });

    // Creating A Event Listener And Subsequent Function When Choice D Of Question "3" Is Selected
    Q4B4.addEventListener("click", function() {
        // Calling Incorrect Answer Function
        IncorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Five Function
        DisplayQuestionFive();
    });
}

// Creating A Function Which Displays The Fifth Question In The Quiz
function DisplayQuestionFive() {
    // Clears HTML Elements Within Question Choices Section Of HTML Document To Blank
    QuestionChoices.innerHTML = "";
    // Making The "#Question-Title" ID Have The Same Value As The Second Question Title In The Quiz Questions Object
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
        // Calling Correct Answer Function
        IncorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Six Function
        DisplayQuestionSix();
    });

    // Creating A Event Listener And Subsequent Function When Choice B Of Question "4" Is Selected
    Q5B2.addEventListener("click", function() {
        // Calling Correct Answer Function
        CorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Six Function
        DisplayQuestionSix();
    });

    // Creating A Event Listener And Subsequent Function When Choice C Of Question "4" Is Selected
    Q5B3.addEventListener("click", function() {
        // Calling Correct Answer Function
        IncorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Six Function
        DisplayQuestionSix();
    });

    // Creating A Event Listener And Subsequent Function When Choice D Of Question "4" Is Selected
    Q5B4.addEventListener("click", function() {
        // Calling Correct Answer Function
        IncorrectAnswer();
        // Removing Content Of Question Title
        QuestionTitle.textContent = " ";
        // Calling Display Question Three Function
        DisplayQuestionSix();
    });
}

// Creating A Function Which Displays The Sixth Question In The Quiz
function DisplayQuestionSix() {
    // Clears HTML Elements Within Question Choices Section Of HTML Document To Blank
    QuestionChoices.innerHTML = "";
    // Making The "#Question-Title" ID Have The Same Value As The Sixth Question Title In The Quiz Questions Object
    QuestionTitle.textContent = QuizQuestions[5].Question_Title;

    
}

// Creating A Function Called StartOfQuiz (This Dictates What Happens When Start Quiz Button Is Clicked)
function StartOfQuiz() {
    // Creating A EventListener That Happens When The Start Button Is Clicked On Web Page
    StartQuiz.addEventListener('click', SetTime);
    DisplayQuestionOne();
}

// Creating A Function Called Correct Answer (This Will Apply When Correct Choice Is Selected)
function CorrectAnswer() {
    // Clearing Question Choices HTML Elements
    QuestionChoices.innerHTML = "";
    // Creating A New P Element In HTML Document
    var CorrectResponse = document.createElement('p');
    // Giving New P Element Some Content
    CorrectResponse.textContent = "Correct!";
    // Appending New P Element To Bottom Of Question Choices Section
    QuestionChoices.appendChild(CorrectResponse);
    // Adding A Value Of Three To To Quiz Score
    QuizScore = QuizScore + 3;
}

// Creating A Function Called Incorrect Answer (This Will Apply When Incorrect Choice Is Selected)
function IncorrectAnswer() {
    // Clearing Question Choices HTML Elements
    QuestionChoices.innerHTML = "";
    // Creating A New P Element In HTML Document
    var IncorrectResponse = document.createElement('p');
    // Giving New P Element Some Content
    IncorrectResponse.textContent = "Oops! Incorrect";
    // Appending New P Element To Bottom Of Question Choices Section
    QuestionChoices.appendChild(IncorrectResponse);
    // Reducing Timer By 5 Seconds
    SecondsLeft = SecondsLeft - 5;
}

// Calling The StartOfQuiz Function
StartOfQuiz();