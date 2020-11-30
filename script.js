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
var form = document.querySelector(".card")
var hidden = document.querySelector("#hidden")
var answerA = document.querySelector("#answer-a")
var answerB = document.querySelector("#answer-b")
var answerC = document.querySelector("#answer-c")
var answers = document.querySelector("#answers")


hidden.style.visibility = "hidden"
function minusSeconds() {
    seconds-10;
}
var questions = [
    { q: "How do you call a function in Javascript?", a: "()", b: "[]", c: "{}" },
    { q: "How do you link Bootstrap in your html file?", a: "Add the link inside the head", b: "Add the link after the body", c: "Go fetch me an apple" },
    { q: "How do you insert a timer?", a: "Declare var count = 0", b: "setInterval(function)", c: "Use jQuery" },
  ];

  //for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    //var answer = confirm(questions[i].q);

    // Compare answers
    //if ((answer === true && questions[i].a === "t") ||
      //(answer === false && questions[i].a === "f")) {
      // Increase score
      //score++;
      //alert("Correct!");
    //}
    //else {
      //alert("Wrong!");
    //}
  //}




center.textContent = "Click the start button when you are ready. You will have 300 seconds to answer 5 questions."
countdown.textContent = "Time left: " + seconds + " seconds";


    

function game() {
 /*   questionOne();
}
function questionOne() {
i = 0;
    question.textContent = "Question " + questionNum;
    center.textContent = questions[i].q; 
    answerA.textContent = questions[i].a; 
    answerB.textContent = questions[i].b; 
    answerC.textContent = questions[i].c;

    
    answerA.addEventListener("click", function() {
        score++;
        questionNum++; 
        i++;
        console.log(score);

        question.textContent = "Question " + questionNum

        center.textContent = questions[i].q; 
        answerA.textContent = questions[i].a; 
        answerB.textContent = questions[i].b; 
        answerC.textContent = questions[i].c;
        
    })
    answerB.addEventListener("click", function(){
        minusSeconds();
        questionNum++; 
        i++;

        question.textContent = "Question " + questionNum

        center.textContent = questions[i].q; 
        answerA.textContent = questions[i].a; 
        answerB.textContent = questions[i].b; 
        answerC.textContent = questions[i].c;

    })
}

    
    //center.textContent = questions[i].q; 
    //answerA.textContent = questions[i].a; 
    //answerB.textContent = questions[i].b; 
    //answerC.textContent = questions[i].c;
    //changeQuestion()
////}*/


i = 0;
    question.textContent = "Question " + questionNum;
    center.textContent = questions[i].q; 
    answerA.textContent = questions[i].a; 
    answerB.textContent = questions[i].b; 
    answerC.textContent = questions[i].c;
    changeQuestion()
}

function changeQuestion(){

    //change questions

    answers.addEventListener("click", function(event) {
                i++;
        questionNum++;
        question.textContent = "Question " + questionNum

        center.textContent = questions[i].q; 
        answerA.textContent = questions[i].a; 
        answerB.textContent = questions[i].b; 
        answerC.textContent = questions[i].c;

    })
}

function countScore(event) {
if (i = 0) {
        var answerA = event.target;
        if (answerA === true) {
        score++;
        console.log(score)
        }
} 
    

if (i = 1) {
    answerA = event.target;
    score++;
    console.log(score)

} 
if (i = 2) {
    answerB = event.target;
    score++;
    console.log(score);
}

        
    

}



//this is where it fucks up all the way to 
    //answerA.addEventListener("click", countScore)
    //answerB.addEventListener("click", addScore)


//count score
//function countScore(event) {
    //var correctA = event.answerA
   // if (i < 2) {
       // score++;
       //if (correctA === true) {
           //score++;
       
        //console.log(score)
       
    //} 

//}*/

//function addScore(event) {
   // if (i = 2) {
     //   score++;
     //   console.log(score)
   // }
//}

//here is the end of the fuck up

//and append correct




        //center.textContent = questions[i++].q 
        //answerA.textContent = questions[i++].a 
        //answerB.textContent = questions[i++].b 
        // answerC.textContent = questions[i++].c
    





    



// How do you insert a timer? setInterval(function)


function setSeconds() {

var timerInterval = setInterval(function() {
    seconds--;
    countdown.textContent = "Time left: " + seconds + " seconds";

    //if(seconds > 19) {
       // game()
    //}
    if (seconds === 0) {
        clearInterval(timerInterval);
        center.textContent = "Game Over!";
        answerA.style.display = "none"
        answerB.style.display = "none"
        answerC.style.display = "none"

        //to store the user's score
        var score = localStorage.getItem("score");
    }
}, 1000);
 
}







start.addEventListener("click", function() {
    game()
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

