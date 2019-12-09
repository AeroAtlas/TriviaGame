//Variables
var set = 0;
var correct = 1;
var right = 0;
var wrong = 0;

//Functions for each set of questions
function questions1(){
  $(".form-check-label").prop("disabled", false);
  q1 = "Who owned Neverland Ranch"
  a1 = "Bob Ross"
  a2 = "Albert Einstein"
  a3 = "Michael Jackson"
  a4 = "Flea"
  document.getElementById("question").innerHTML = q1
  document.getElementById("answer1").innerHTML = a1
  document.getElementById("answer2").innerHTML = a2
  document.getElementById("answer3").innerHTML = a3
  document.getElementById("answer4").innerHTML = a4
  correct = 3;
}
function questions2(){
  $(".form-check-label").prop("disabled", false);
  q1 = "What country has the highest income per capita"
  a1 = "Denmark"
  a2 = "Luxembourg"
  a3 = "Australia"
  a4 = "Zimbabwe"
  document.getElementById("question").innerHTML = q1
  document.getElementById("answer1").innerHTML = a1
  document.getElementById("answer2").innerHTML = a2
  document.getElementById("answer3").innerHTML = a3
  document.getElementById("answer4").innerHTML = a4
  correct = 2;
}
function questions3(){
  $(".form-check-label").prop("disabled", false);
  q1 = "What year did 9/11 happen"
  a1 = "1999"
  a2 = "2003"
  a3 = "2002"
  a4 = "2001"
  document.getElementById("question").innerHTML = q1
  document.getElementById("answer1").innerHTML = a1
  document.getElementById("answer2").innerHTML = a2
  document.getElementById("answer3").innerHTML = a3
  document.getElementById("answer4").innerHTML = a4
  correct = 4;
}
function endScreen(){
  $('#timer').remove()
  $('#question').remove()
  $('#answer1').remove()
  $('#answer2').remove()
  $('#answer3').remove()
  $('#answer4').remove()
  createButton();
  document.getElementById("winLose").innerHTML = "YOU WIN"
  document.getElementById("resultWin").innerHTML = `You got ${right} right`
  document.getElementById("resultLose").innerHTML = `You got ${wrong} wrong`
  clearInterval(count)
}
function ranOut(){
  $('#timer').remove()
  $('#question').remove()
  $('#answer1').remove()
  $('#answer2').remove()
  $('#answer3').remove()
  $('#answer4').remove()
  document.getElementById("winLose").innerHTML = "YOU LOSE"
  document.getElementById("resultWin").innerHTML = `You got ${right} right`
  document.getElementById("resultLose").innerHTML = `You got ${wrong} wrong`
}
function createButton(){
  var button = $("<button>");
  button.attr("id", "reset");
  button.attr("onclick", "clickReset()")
  button.text("Try Again");
  $("#reset-button").append(button);
}


//Timer
var timeleft = 19;
var count = setInterval(function(){
  document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(count);
    ranOut()
  }
}, 1000);


//Click Event
$(".form-check-label").on("click", function(){
  var a = $(this).attr("value")
  $(".form-check-label").prop("disabled", true);
  console.log(a)
  console.log(correct)
  if(a == correct){
    $("#winLose").append("Correct!")
    right++
  } else {
    $("#winLose").append("Nope")
    wrong++
  }
  //Gives time to see result and get new questions
  setTimeout(function(){
    $("#winLose").empty();
    set++
    console.log(set)
    switch(set){
    case 1:
      questions1();
      break;
    case 2:
      questions2()
      break;
    case 3:
      questions3()
      break;
    case 4:
      endScreen()
      break;
    }
  }, 2000)
})

//Reset Function
function clickReset(){
  window.location.reload();
};