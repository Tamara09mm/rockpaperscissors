// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function(){
var userChoice= $("#input").val();
$("#userChoice").text(userChoice)
var computerChoice = Math.random();

console.log(computerChoice);
if(computerChoice < 1/3){
 $("#computerChoice").html("rock");
}else if (computerChoice > 2/3){
 $("#computerChoice").html("paper");
}
else {
 $("#computerChoice").html("scissors");
}
});


// DOCUMENT READY FUNCTION BELOW

