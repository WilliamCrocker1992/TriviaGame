// have timer on page
//have a start button
//when the start button is pushed hidden text appears


var timer = 30;
var intervalId;



$("#timer").on("click", run)



function run(){
  intervalId = setInterval(decrement, 1000);
  
};


function decrement(){
  timer--;
  if (timer === 0) {
    clearInterval(intervalId);
    alert("PaThEtIc")
  }
    $("#timer").html("<h1>" + timer + "</h2>");
};


$("#timer").on("click", show)
function show(){
  $("#text").show();
};

$("#timer").on("click", show2)
function show2(){
  $("#submit").show();
}


//-------------------------------------------------------------------------------------------------------------
// make it so at the end of the timer it counts how many you got right and wrong
$("#submit").on("click", score)

var correct = 0
var incorrect = 0



function score() {
  questioncheckOne();
  questioncheckTwo();
  questioncheckThree();
  questioncheckFour();
  console.log(correct);
  console.log(incorrect);
  $("#correct1").html(correct)
  $("#incorrect1").html(incorrect)
};

function questioncheckOne(){
    var correctAnswer = document.getElementById("a1")
    if (correctAnswer.checked == true) {
        correct++;
            }
    else {
            incorrect ++;
    }
    // console.log(correct)
    // console.log(incorrect)
};


function questioncheckTwo(){
    var correctAnswer = document.getElementById("b4")
    if (correctAnswer.checked == true) {
        correct++;
    }
    else {
            incorrect++;
    }
};


function questioncheckThree(){
    var correctAnswer = document.getElementById("c3")
    if (correctAnswer.checked == true) {
        correct++;
    }
    else {
            incorrect++;
    }
};


function questioncheckFour(){
    var correctAnswer = document.getElementById("d2")
    if (correctAnswer.checked == true) {
        correct++;
        
    }
    else {
            incorrect++;
    }

 };

$("#submit").on("click", hide)

function hide(){
  $("#submit").hide();
};

$("#submit").on("click", leeroy)
function leeroy(){
  $("#leeroy").show();
};

$("#submit").on("click", duh)
function duh(){
  $("#reset").show();
}
 var reset = document.getElementById('reset');

    reset.addEventListener('click', function(event) {
      location.reload();
    }, false);


// make it so the text is hidden, the start button is hidden
// just the score is visible
// add a restard button that sends it back to the begginning
//make it so the reset button is hidden until u push submit






