"use strict";
// 1. This is a two-player game.
// 2. There are three buttons: "New Game," "Roll Dice," and "Hold."
// 3. To start the game, click on the "New Game" button.
// 4. Player One begins their turn by clicking on the "Roll Dice" button, which generates a random number between one and six.
// 5. If the generated number is one, it becomes Player Two's turn.
// 6. Player One can choose to hold the generated number by clicking the "Hold" button, or they can roll the dice again to get a new random number.
// 7. If the generated number is not one, it is added to Player One's current score.
// 8. If the generated number is one, Player One loses their accumulated score, and it becomes Player Two's turn.
// 9. Whenever a player decides to hold the generated number by clicking the "Hold" button, it is added to their total score.
// 10.The game continues with alternating turns between the players.
// 11. Each player's current score is updated by adding the newly generated numbers when they decide to hold.
// 12. The game ends when one of the players reaches a score of 100 or more.
// 13. The player who reaches a score of 100 or more wins the game.
// 14. After the game concludes, players have the option to start a new game and play again.

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
diceEl.classList.add("hidden");

let scores, currentScore, activePlayer, playing;

//  starting condition

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//  Rolling dice Functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a Random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //  1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //  2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      //  Finish the game;
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
