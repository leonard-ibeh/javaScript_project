"use strict";
// 1. Enter a number as your guess.
// 2. If your guess matches the target number, you have won the game and achieved a high score.
// 3. If your guess does not match the target number, enter a different number as your next guess.
// 4. If your score reaches 0, you have lost the game.
// 5. Whether you win or lose the game, you have the option to play again.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
const displayNumber = (number) => {
  document.querySelector(".number").textContent = number;
};

const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("Enter a number");
  } else if (guess === secretNumber) {
    displayMessage("YOU WON");
    displayMessage(secretNumber);
    document.querySelector("body").style.backgroundColor = "#367c2b";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "TOO High" : " T00 low");
      score--;
      displayScore(score);
    } else {
      displayMessage("You lost the game");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  displayScore(score);
  displayNumber("?");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
