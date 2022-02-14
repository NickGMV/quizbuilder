
/// next steps//
// get question to rotate/randomly generate
// get format nicely
// get it to deal with varying question lengths 
//https://stackoverflow.com/questions/5613834/convert-string-to-variable-name-in-javascript

var document = "quiz.html"

const qs = JSON.parse(questions);

//var check = JSON.parse(questions).Q1.Question;

//window.alert(check);
var quizstate = 0;
var answer = 0 ;
var i = 0;
//var question_list = object.keys(qs);
var score = 0;
var keys = [];
for(var k in qs) keys.push(k);

var question = keys[i]



function startQuiz(){
    
    if(quizstate != 1){
        document.getElementById("choices").innerHTML = '';
        window.alert(quizstate);
        document.getElementById("quizover").style.display = "none";
         quizstate = 1;
        //window.alert(gamestate);
        generatequestion(question);    
    }
    else{
        quizover();
        quizstate = 0;
    }
}

function quizover(){
    document.getElementById("quizover").style.display = "block";
    
    document.getElementById('outof').innerHTML = i;
}

function generatequestion(question){
    //window.alert('question being generated')
    //var incorrect = 0;
    var question1 = eval("qs."+ question);
    var question2 = question1.Question; 
    document.getElementById('question').innerHTML = question2;
    //console.log(question)
    answer = question1.Correctanswer;
    //console.log(answer)
    var incorrect = question1.incorrect.map((x)=>x);
    console.log(incorrect);
    incorrect.push(answer);
    var answers = incorrect;
    var answers2 = answers.sort((a, b) => 0.5 - Math.random());
    console.log(answers2);

    for(var i = 0; i < answers.length; i++) {
        //window.alert(answers[i]);
        gen_box(answers[i],i,'choices');}
        
    //answers.forEach((x, i) => gen_box(x,i,'choices'));
}

function gen_box(x,i,y){
    //window.alert('box being generated')
    document.getElementById(y).innerHTML+='<div class="box" id="box'+ i + '"onclick="checkAnswer(' + i + ')"><p class="limit">'+ x +'</p></div>'
}


function checkAnswer(b){
    window.alert(answer)
    //var b = document.getElementById("box"+b).textContent;
    window.alert(b);
   //check answer from box
    if(document.getElementById("box"+b).textContent === answer.toString())
    //if answer is correct
    {document.getElementById("correct").style.display = "block";
    setTimeout(function(){document.getElementById("correct").style.display = "none"},1000)
    //update score
     updateScore();
     document.getElementById("choices").innerHTML = '';
     //new question
    generatequestion(question);
    
    }
    //if answer is incorrect
    else{document.getElementById("wrong").style.display = "block";
    setTimeout(function(){document.getElementById("wrong").style.display = "none"},1000)}
}

function updateScore() {
    score += 1;
    document.getElementById("scorevalue").innerHTML = score;
    document.getElementById("quizscore").innerHTML = score;

    i+=1;
    if(i<keys.length){
        question = keys[i];  
    }
    else{
        quizover()
        i = 0;
    }
    
    //window.alert(question);
    //window.alert(score);
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

