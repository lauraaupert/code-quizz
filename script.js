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
var initials = localStorage.getItem("initials");
var totalScore = localStorage.getItem("score");
var displayInitials = document.querySelector("#col-initials");
var displayTotal = document.querySelector("#col-scores");

hidden.style.visibility = "hidden"
displayAllScores.style.visibility = "hidden"
answers.style.visibility = "hidden"
done.style.visibility = "hidden"
viewScore.style.visibility = "hidden"


//add a restart button

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
  localStorage.setItem("initials", initials);
  localStorage.setItem("score", score)


function minusSeconds() {
    seconds-10;
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

function scoreCount() {
    score++;
    console.log(score)
    score = localStorage.getItem("score");

}
    

function firstQuestion() {
console.log(questions[0].answers[0].answer)
answers.style.visibility = "visible"

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
        })
        answerB.addEventListener("click", () => {
            minusSeconds();
            secondQuestion();
            });
        answerC.addEventListener("click", () => {
            minusSeconds();
            secondQuestion();
            });

        /*answerA.onclick = () => {
            if (questions[i].answers[0].answer === true) {
            score++;
            console.log(score);
        } else if (questions[i].answers[0].answer === false) {
            console.log("false")
        }
    }

        answerB.onclick = () => {
            score--;
            console.log(score)

        }*/
    
    
}




function secondQuestion(){

    //change questions

    //answers.addEventListener("click", function(event) {
                i = 1;
                questionNum++;
        question.textContent = "Question " + questionNum;
        center.textContent = questions[i].q; 
        answerA.innerHTML = questions[i].answers[0].option; 
        answerB.innerHTML = questions[i].answers[1].option; 
        answerC.innerHTML = questions[i].answers[2].option;

        answerA.addEventListener("click", () => {
                minusSeconds();
                thirdQuestion();
                });
            answerB.addEventListener("click", () => {
                score++;
                console.log(score)

                thirdQuestion();
                })
                
            answerC.addEventListener("click", () => {
                minusSeconds();
                thirdQuestion();
                });
        


    
}

function thirdQuestion() {
    i = 2;

    question.textContent = "Question " + questionNum++;
    center.textContent = questions[i].q; 
    answerA.innerHTML = questions[i].answers[0].option; 
    answerB.innerHTML = questions[i].answers[1].option; 
    answerC.innerHTML = questions[i].answers[2].option;


    answerA.addEventListener("click",endGame);
    answerB.addEventListener("click", () => {
        score++;
        console.log(score)

        endGame();
    });
    answerC.addEventListener("click",endGame);



}


function endGame() {
    hidden.style.visibility = "hidden";
    answers.style.visibility = "hidden";
    displayAllScores.append(hidden)
    displayAllScores.append(answers)

    done.textContent = "All done!";
    done.setAttribute("style", "text-align: center; color: black;");

    //title.append(done);
    var para = document.createElement("p");
    done.append(para);
    viewScore.setAttribute("style", "text-align: center;")

    countdown.style.visibility = "hidden";

    viewScore.addEventListener("click", displayScore)


}

function displayScore() {
    done.style.visibility = "hidden"
    //viewScore.style.visibility = "hidden"
    var initials = localStorage.getItem("initials");
    localStorage.setItem("initials", initials);
    var para = document.createElement("p");
    title.append(para);
    viewScore.style.visibility = "hidden"

    var disScore = document.createElement("h4");


    title.append(disScore);
    disScore.setAttribute("style", "text-align: center; color: black;");
    disScore.innerHTML = initials + ": " + score;

    viewHighScores.style.visibility = "visible";
    viewHighScores.innerHTML = "Display High Scores";
    
    viewHighScores.addEventListener("click", displayHighScores);
    localStorage.getItem("score")


}

function displayHighScores () {
    displayInitials = localStorage.setItem("initials", initials);
    totalScore = localStorage.setItem("score", score);
    

    displayInitials.style.visibility = "visible";
    displayTotal.style.visibility = "visible";

    displayInitials.textContent = initials;
    totalScore.textContent = score

    localStorage.setItem("scores", score);
    var initials = localStorage.getItem("initials");
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score)
  

}

function setSeconds() {

var timerInterval = setInterval(function() {
    seconds--;
    countdown.textContent = "Time left: " + seconds + " seconds";


    if (seconds === 0) {
        clearInterval(timerInterval);
        center.textContent = "Game Over!";
        answerA.style.display = "none"
        answerB.style.display = "none"
        answerC.style.display = "none"

    } 
}, 1000);
 
}

        //to store the user's score
        var score = localStorage.getItem("score");






start.addEventListener("click", function() {
    firstQuestion()
    setSeconds()
    // hide start button
    start.style.display = "none"
    
    



})

//score count



// INITIALS FORM AND SCORES SECTION
//Function to display message

//function to show initials with highest scores
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
    hidden.style.visibility = "visible"

  }
  localStorage.setItem("initials", initials);

renderInitials();
})

