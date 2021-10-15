//First Player's details
var player1 = prompt("Player 1 : Please Enter your name - ");
document.querySelectorAll("p")[0].innerHTML = player1;

//Second Player's details
var player2 = prompt("Player 2 : Please Enter your name - ");
document.querySelectorAll("p")[1].innerHTML = player2;

//Random number generation for player1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImgSrc1 = "images/dice" + randomNumber1 + ".png";
var x = document.querySelectorAll("img")[0];
x.setAttribute("src", randomImgSrc1);

//Random number generation for player2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImgSrc2 = "images/dice" + randomNumber2 + ".png";
var x = document.querySelectorAll("img")[1];
x.setAttribute("src", randomImgSrc2);


//Result of the game
if(randomNumber1 > randomNumber2){
  var x = document.querySelector("h1").innerHTML = player1 + " is Winner!&#129409;";
}else if(randomNumber1 < randomNumber2){
  var x = document.querySelector("h1").innerHTML = player2 + " is Winner!&#129409;";
}else {
  var x = document.querySelector("h1").innerHTML = "Draw!";
}
