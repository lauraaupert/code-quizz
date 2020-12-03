

var countdown = document.querySelector("#countdown");
var highScores = document.querySelector("#high-scores");
var button = document.getElementById("#start");
var seconds = 20;
var center = document.querySelector("#quizz-text");
var question = document.querySelector("#question");
var questionNum = 1;
var msgDiv = document.querySelector("#msg");
var score = 0;
var submitBtn = document.querySelector("#submit");
var form = document.querySelector(".card");
var hidden = document.querySelector("#hidden");
var answerA = document.querySelector("#answer-a");
var answerB = document.querySelector("#answer-b");
var answerC = document.querySelector("#answer-c");
var possibilities = document.querySelector("#answers");
var title = document.querySelector("#title");
var done = document.querySelector("#done");
var displayAllScores = document.querySelector(".end-stuff");
var viewScore = document.querySelector("#view-score");
var viewHighScores = document.querySelector("#view-high-scores");
//var initials = localStorage.getItem("initials");
//var totalScore = localStorage.getItem("totalScore");
var highScoreDisplay = document.querySelector("#high-scores-display");
var allScores = [];
var correct = document.querySelector("#correct");
var restartBtn = document.querySelector("#restart-button");
var disScore = document.createElement("h4");


hidden.style.display = "none"
displayAllScores.style.visibility = "hidden"
possibilities.style.display = "none"
done.style.display = "none"
viewScore.style.display = "none"

//add a restart button
//correct or incorrect after question



//init();
function renderInitials() {
    // to store the user's initials (must create a form first)

       var initials = localStorage.getItem("initials");

       if (!initials) {
           return;
       }

    question.textContent = "Welcome " + initials + "!"
    form.style.display = "block"
    form.style.display = "none"
 

  }

  var initials = localStorage.getItem("initials");
  initials = localStorage.setItem("initials", initials);
  totalScore = localStorage.setItem("totalScore", score)

  function setSeconds() {

    var timerInterval = setInterval(function() {
        seconds--;
        countdown.textContent = "Time left: " + seconds + " seconds";
    
    
        if (seconds === 0 || seconds < 0) {
            clearInterval(timerInterval);
            center.textContent = "Game Over!";
            answerA.style.display = "none"
            answerB.style.display = "none"
            answerC.style.display = "none"
            countdown.textContent = "Time left: 0"
            correct.textContent = "";

        } 
        }, 1000);
     
    }
    

var questions = [
    { q: "How do you call a function in Javascript?", 
        answers: [
         {option:"()", answer: true},
         {option:"[]", answer: false},
         {option:"{}", answer: false},
        ]
    },
    { q: "How do you link Bootstrap in your html file?", 
        answers: [
            {option: "Add the link after the body", answer: false},
            {option:"Add the link inside the head", answer: true},
            {option: "Got fetch me an apple", answer: false} 
        ]
    },
    { q: "How do you insert a timer?", 
        answers: [
            {option: "Declare var count = 0", answer: false},
            {option: "setInterval(function)", answer: true},
            {option: "Use CSS styling", answer: false},
        ]
    }
  ];




center.textContent = "Click the start button when you are ready. You will have 300 seconds to answer 5 questions."
countdown.textContent = "Time left: " + seconds + " seconds";

    

function firstQuestion() {
console.log(questions[0].answers[0].answer)
possibilities.style.display = "block"

i = 0
    question.textContent = "Question " + questionNum;
    center.textContent = questions[i].q; 
    answerA.innerHTML = questions[i].answers[0].option; 
    answerB.innerHTML = questions[i].answers[1].option; 
    answerC.innerHTML = questions[i].answers[2].option;
    
    console.log(questions[i].answers)

        answerA.addEventListener("click", () => {
            score++;
            console.log(score)
            secondQuestion();
            correct.textContent = "Correct!";

        })
        answerB.addEventListener("click", () => {
            secondQuestion();
            seconds = seconds - 10;
            correct.textContent = "Wrong!";

            });
        answerC.addEventListener("click", () => {
            seconds = seconds - 10;
            secondQuestion();
            correct.textContent = "Wrong!";
        });    
    
}




function secondQuestion(){
        i = 1;
        questionNum++;
        question.textContent = "Question " + questionNum;
        center.textContent = questions[i].q; 
        answerA.innerHTML = questions[i].answers[0].option; 
        answerB.innerHTML = questions[i].answers[1].option; 
        answerC.innerHTML = questions[i].answers[2].option;

            answerA.addEventListener("click", (event) => {
                seconds = seconds - 10;
                thirdQuestion();
                correct.textContent = "Wrong!";
                });
            answerB.addEventListener("click", (event) => {
                score++;
                console.log(score)
                correct.textContent = "Correct!";
                thirdQuestion();
                })
            answerC.addEventListener("click", (event) => {
                seconds = seconds - 10;
                thirdQuestion();
                correct.textContent = "Wrong!";
                });
}



function thirdQuestion() {
    i = 2;
    question.textContent = "Question " + questionNum++;
    center.textContent = questions[i].q; 
    answerA.innerHTML = questions[i].answers[0].option; 
    answerB.innerHTML = questions[i].answers[1].option; 
    answerC.innerHTML = questions[i].answers[2].option;

    answerA.addEventListener("click", () => {
        correct.textContent = "";
        endGame();
    });
    answerB.addEventListener("click", () => {
        score++;
        console.log(score);
        endGame();
        correct.textContent = "";
    });
    answerC.addEventListener("click",() => {
        correct.textContent = "";
        endGame();
    });
}

function endGame() {
    hidden.style.display = "none";
    possibilities.style.display = "none";
    done.style.display = "block";
    countdown.style.display = "none";
    viewScore.style.display = "block";
}

function displayScore() {
    done.style.display = "none"
    viewScore.style.display = "none"
    displayAllScores.style.visibility = "visible";
    viewHighScores.style.visibility = "visible";

    var initials = localStorage.getItem("initials");
    localStorage.setItem("initials",initials)
    localStorage.setItem("totalScore", score)
    var para = document.createElement("p");
    title.append(para);
    title.append(disScore);
    disScore.setAttribute("style", "text-align: center; color: black;");
    disScore.textContent = initials + ": " + score;
    disScore = localStorage.getItem("disScore").toString
    localStorage.setItem("disScore", disScore)


}

/*
function listScores() {
    highScoreDisplay.innerHTML = "";
  
    for (var i = 0; i < allScores.length; i++) {
        disScore = allScores[i];
    
        var li = document.createElement("li");
        li.textContent = disScore
        li.setAttribute("data-index", i);
    
        highScoreDisplay.appendChild(li);
    
}
}

function init() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    // var storedScores = (localStorage.getItem("score"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (totalScore !== null) {
      allScores = totalScore;
    }
  
    // Render todos to the DOM
    listScores();
  }

  function storeScores() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("score", (allScores));
  }*/

  
  

function displayHighScores () {
        //title.append(disScore);


    viewHighScores.style.visibility = "hidden";

    var totalScore = localStorage.getItem("totalScore");
    var initials = localStorage.getItem("initials");
    initials = localStorage.setItem("initials", initials);
    totalScore = localStorage.setItem("score", score)

    restartBtn.style.display = "block"

    /*//var displayInitials = initials
    var totalScore = localStorage.setItem("score", score);
    var initials = document.querySelector("#initials").value;
   // highScoreDisplay.textContent = initials + totalScore*/
}

        //to store the user's score
        //var score = localStorage.getItem("score");


/*restartBtn.addEventListener("click",refreshPage());
function refreshPage(event){
    window.location.reload();
}*/


start.addEventListener("click", function() {
    firstQuestion()
    setSeconds()
    // hide start button
    start.style.display = "none"
    
    



})

 function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }
  
  
  function renderInitials() {
    // to store the user's initials (must create a form first)
       var initials = localStorage.getItem("initials");

       if (!initials) {
           return;
       }

    question.textContent = "Welcome " + initials + "!"
    form.style.display = "block"
    form.style.display = "none"
 

  }

    localStorage.setItem("initials", initials);

    //then use a concat to display initials and scores
    //+ " scored " + score
    
    //renderInitials()


submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = document.querySelector("#initials").value;

   

  if (initials === "") {
    displayMessage("error", "Initials cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");
    hidden.style.display = "block"
  }
  localStorage.setItem("initials", initials);

renderInitials();
})

viewScore.addEventListener("click", displayScore);
viewHighScores.addEventListener("click", displayHighScores());


