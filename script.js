var startButton = document.querySelector(".start-button");
var highscoreButton = document.querySelector(".highscore-button");
var question = document.querySelector(".question");
var subtext = document.querySelector(".sub-text");
var ansList = document.querySelector(".selection");
var choices = document.querySelectorAll(".choice");
var ansCheck = document.querySelector(".ans-check");
var ans1 = document.querySelector(".choice-1");
var ans2 = document.querySelector(".choice-2");
var ans3 = document.querySelector(".choice-3");
var ans4 = document.querySelector(".choice-4");
var timer = document.querySelector(".timer-text");
var namePrompt = document.querySelector(".name-input");
var submitButton = document.querySelector(".submit-button");
var nameBar = document.querySelector(".name-input-prompt");
var questions = ["Witch is not a common value type in JavaScript?",
"Witch method is used to retrieve an element from html?",
"Witch html element's uses include adding a stylesheet?",
"Witch JavaScript method is used to stop event bubbling?",
"All the following are options for the CSS property Display except"];
var answers = [["boolean", "number","prompt","string"],
["querySelector","addEventListener","setInterval","setAttribute"],
["a","figure","nav","link"],
["preventDefault","addEventListener","stopPropagation","getElementById"],
["flex","relative","absolute","definite"]];
var i = 0;
var secondsLeft = 30
var isEnd = false
var changeQuestion = function() {
    console.log(i);
    var currentQ = questions[i];
    var currentAns = answers[i];
    console.log(`${currentQ},${currentAns}`);
    appendQ(currentQ,currentAns)
}
var correctAns = function() {
    ansCheck.textContent = "Correct!"
                ansCheck.style.visibility = "visible"
                setInterval(function(){
                    ansCheck.style.visibility = "hidden"
                    ansCheck.textContent = " "
                    return;
                }, 4000)   
}
var wrongAns = function() {
    ansCheck.textContent = "Wrong!"
    secondsLeft -= 5;
                ansCheck.style.visibility = "visible"
                setInterval(function(){
                    ansCheck.style.visibility = "hidden"
                    ansCheck.textContent = " "
                    return;
                }, 4000)   
}
    ansList.addEventListener("click", function(event){
        var select = event.target;
        console.log(select);
        console.log(ans1);
        if(i == 0){
            if(select == ans3){
               correctAns();
            }else if(select != ans3){
               wrongAns();
            }
            i++
            changeQuestion()
        }else if(i == 1){
            if(select == ans1){
                correctAns();
            }else{
                wrongAns();
            }
            i++
            changeQuestion()
        }else if(i == 2){
            if(select == ans4){
                correctAns();
            }else{
                wrongAns();
            }
            i++
            changeQuestion()
        }else if(i == 3){
            if(select == ans3){
                correctAns();
            }else{
                wrongAns();
            }
            i++
            changeQuestion()
        }else if(i == 4){
            if(select == ans4){
                correctAns()
                isEnd = true
            }else{
                wrongAns()
                isEnd = true
            }
            if(isEnd){
                ansList.style.display = "none"
                endGame();
            }
        }
    })
var appendQ = function(Q, A) {
    console.log(question);
    console.log(Q);
    startButton.style.visibility = "hidden";
    highscoreButton.style.visibility = "hidden";
    for(var k = 0; k < 4; k++){
    choices[k].style.visibility = "visible";
    }
    question.textContent = Q;
    subtext.textContent = " ";
    for(var j = 0; j < 4; j++){
       choices[j].textContent = A[j];
    }
}
var endGame = function(){
    question.textContent = "All Done!!!";
    subtext.textContent = `Final Score: ${secondsLeft} seconds`;
    namePrompt.style.display = "contents";
}
startButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log("working");
    var startTimer = setInterval(function(){
        secondsLeft--;
        timer.textContent = `${secondsLeft} seconds left`;
        if (secondsLeft <= 0 || isEnd == true){
            clearInterval(startTimer);
        }
    }, 1000);
    changeQuestion();
});
submitButton.addEventListener("submit",function(event){
    event.preventDefault()
    localStorage.setItem(nameBar.Value, secondsLeft);
})