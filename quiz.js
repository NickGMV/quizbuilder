
/// next steps//
// get question to rotate/randomly generate
// get format nicely
// get it to deal with varying question lengths 
//https://stackoverflow.com/questions/5613834/convert-string-to-variable-name-in-javascript

var document = "quiz.html"

var qs = JSON.parse(questions);

var check = JSON.parse(questions).Q1.Question;

//window.alert(check);
var quizstate = 0
var answer = 0 


function startQuiz(){
    
    if(quizstate != 1){
        window.alert(quizstate);
        document.getElementById("quizover").style.display = "none";
         quizstate = 1;
        //window.alert(gamestate);
        generatequestion();    
    }
    else{
        quizover();
        quizstate = 0;}
}

function quizover(){
    document.getElementById("quizover").style.display = "block";

}

function generatequestion(){
    //window.alert('question being generated')
    var question = qs.Q1.Question; 
    document.getElementById('question').innerHTML = question
    //console.log(question)
    var answer = qs.Q1.Correctanswer
    //console.log(answer)
    var incorrect = qs.Q1.incorrect
    console.log(incorrect)
    incorrect.push(answer);
    var answers = incorrect;
    const answers2 = answers.sort((a, b) => 0.5 - Math.random());
    console.log(answers2);

    for(var i = 0; i < answers.length-1; i++) {
        //window.alert(answers[i]);
        gen_box(answers[i],i,'choices');}
        
    //answers.forEach((x, i) => gen_box(x,i,'choices'));
}

function gen_box(x,i,y){
    //window.alert('box being generated')
    document.getElementById(y).innerHTML+='<div class="box" id="box'+ i + '"onclick="checkAnswer(' + i + ')">'+ x +'</div>'
}

function questionShow() {
   
    var answers = [answer0,answer1,answer2,answer3];
    //randomise order of answers to be placed in to boxes by for loop
    var answers2 = randomiseArray(answers);
    //window.alert(answers2);
    //place answers in to boxes
    for(i=0;i<5;i++){document.getElementById("box"+i).innerHTML = answers2[i];
                     
    }
}

function gameOver(){
    //window.alert("gameover");
    stopTimer();
    document.getElementById("gameover").style.display = "block";
}
//function to randomise an array 
function randomiseArray(array) {
    var array2 = [];
    
    while(array.length>0){
        var i = Math.floor(Math.random()*array.length);
        array2.unshift(array[i]);
        array.splice(i,1);
        }
    return array2;
}

      
function setTimer(){
   timer = window.setInterval(function(){myTimer()}, 1000); 
   document.getElementById("timeremaining").style.display = "block";
}       

        
function myTimer(){
    if(time>0){
    time--;
    document.getElementById("timeRemaining").innerHTML = time;
    }
    else {gameOver();}
}
 
function stopTimer(){
   // window.alert("timer stopped")
    clearInterval(timer);
    time = timesetting;
    document.getElementById("timeRemaining").innerHTML = time;
}


var score = 0;
var time = 10;
// having a default time will allow resetting of difficulty if i want to change it
var timesetting = 3;
var timer = ''; 
var gamestate = 0;

function checkAnswer(b){
    //window.alert(a)
    //var b = document.getElementById("box"+b).textContent;
    //window.alert(c);
   //check answer from box
    if(document.getElementById("box"+b).textContent === a.toString())
    //if answer is correct
    {document.getElementById("correct").style.display = "block";
    setTimeout(function(){document.getElementById("correct").style.display = "none"},1000)
    //update score
     updateScore();
     //new question
    questionShow();
    
    }
    //if answer is incorrect
    else{document.getElementById("wrong").style.display = "block";
    setTimeout(function(){document.getElementById("wrong").style.display = "none"},1000)}
}

function updateScore() {
    score += 10;
    document.getElementById("scorevalue").innerHTML = score;
    document.getElementById("gamescore").innerHTML = score;
    //window.alert(score);
}


function startGame(){
    
    if(gamestate != 1){
        //window.alert(gamestate);
        document.getElementById("gameover").style.display = "none";
         gamestate=1;
        //window.alert(gamestate);
        questionShow();
       
        
    }
    else{
        gameOver();
        gamestate=0;}
}
function questionShow() {
    stopTimer();
    setTimer();
    //generating two random digits 1-10
    var numberOne = Math.floor(Math.random()*10)+1;
    var numberTwo = Math.floor(Math.random()*10)+1;
    //write out quesiton in the window
    document.getElementById("question").innerHTML = numberOne + " &times; " + numberTwo;
    //create answer and dupes
    var answer0 = numberOne*numberTwo;
    a = answer0;
    var answer1 = answer0 - 1;
    var answer2 = answer0 + (Math.floor(Math.random()*2)+1)
    var answer3 = answer0 + (Math.floor(Math.random()*3)+5)
    //put answers in to array to be randomised
    var answers = [answer0,answer1,answer2,answer3];
    //randomise order of answers to be placed in to boxes by for loop
    var answers2 = randomiseArray(answers);
    //window.alert(answers2);
    //place answers in to boxes
    for(i=0;i<5;i++){document.getElementById("box"+i).innerHTML = answers2[i];
                     
    }
}

function gameOver(){
    //window.alert("gameover");
    stopTimer();
    document.getElementById("gameover").style.display = "block";
}
//function to randomise an array 
function randomiseArray(array) {
    var array2 = [];
    
    while(array.length>0){
        var i = Math.floor(Math.random()*array.length);
        array2.unshift(array[i]);
        array.splice(i,1);
        }
    return array2;
}

      
function setTimer(){
   timer = window.setInterval(function(){myTimer()}, 1000); 
   document.getElementById("timeremaining").style.display = "block";
}       

        
function myTimer(){
    if(time>0){
    time--;
    document.getElementById("timeRemaining").innerHTML = time;
    }
    else {gameOver();}
}
 
function stopTimer(){
   // window.alert("timer stopped")
    clearInterval(timer);
    time = timesetting;
    document.getElementById("timeRemaining").innerHTML = time;
}

