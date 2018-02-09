var playerOneBtn = document.querySelector("#playerOne");
var playerTwoBtn = document.querySelector("#playerTwo");
var playerOneDisplay = document.querySelector("#playerOneDisplay");
var playerTwoDisplay = document.querySelector("#playerTwoDisplay");
var playerOneScore = 0;
var playerTwoScore = 0;

var resetBtn = document.querySelector("#reset");


playerOneBtn.addEventListener("click", function() {
    playerOneScore++;
    playerOneDisplay.textContent = playerOneScore;
});

playerTwoBtn.addEventListener("click", function() {
    playerTwoScore++;
    playerTwoDisplay.textContent = playerTwoScore;
});

