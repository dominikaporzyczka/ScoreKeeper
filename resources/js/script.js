var playerOneBtn = document.querySelector("#playerOne");
var playerTwoBtn = document.querySelector("#playerTwo");
var playerOneDisplay = document.querySelector("#playerOneDisplay");
var playerTwoDisplay = document.querySelector("#playerTwoDisplay");
var playerOneScore = 0;
var playerTwoScore = 0;

var gameOver = false;
var winningScore = 5;

var resetBtn = document.querySelector("#reset");


playerOneBtn.addEventListener("click", function() {
    if(!gameOver) {
        playerOneScore++;
            if(playerOneScore === winningScore) {
                playerOneDisplay.classList.add("winner");
                gameOver = true;
            }

        playerOneDisplay.textContent = playerOneScore;
    }
    
});

playerTwoBtn.addEventListener("click", function() {
    if(!gameOver) {
        playerTwoScore++;
            if(playerTwoScore === winningScore) {
                playerTwoDisplay.classList.add("winner");
                gameOver = true;
            }
        playerTwoDisplay.textContent = playerTwoScore;
    }
   
});

