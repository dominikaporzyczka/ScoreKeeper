var playerOneBtn = document.querySelector("#playerOne");
var playerTwoBtn = document.querySelector("#playerTwo");
var resetBtn = document.querySelector("#reset");

var playerOneDisplay = document.querySelector("#playerOneDisplay");
var playerTwoDisplay = document.querySelector("#playerTwoDisplay");
var playerOneScore = 0;
var playerTwoScore = 0;

var gameOver = false;
var winningScore = 5;

playerOneBtn.addEventListener("click", function () {
    if (!gameOver) {
        playerOneScore++;
        if (playerOneScore === winningScore) {
            playerOneDisplay.classList.add("winner");
            gameOver = true;
        }

        playerOneDisplay.textContent = playerOneScore;
    }

});

playerTwoBtn.addEventListener("click", function () {
    if (!gameOver) {
        playerTwoScore++;
        if (playerTwoScore === winningScore) {
            playerTwoDisplay.classList.add("winner");
            gameOver = true;
        }
        playerTwoDisplay.textContent = playerTwoScore;
    }

});

resetBtn.addEventListener("click", function () {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneDisplay.textContent = 0;
    playerTwoDisplay.textContent = 0;
    playerOneDisplay.classList.remove("winner");
    playerTwoDisplay.classList.remove("winner");
    gameOver = false;
});

