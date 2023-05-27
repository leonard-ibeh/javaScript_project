"use strict";

// 1. Enter a guess number between 1 and 100.
// 2. If the guess is correct, you will be notified, and the game ends.
// 3. If the guess is incorrect, you will receive feedback of "TOO HIGH" or "TOO LOW".

const messageOne = document.getElementById("message1");
const messageTwo = document.getElementById("message2");
const messageThree = document.getElementById("message3");

const answer = Math.trunc(Math.random() * 100) + 1;
console.log(answer);

let noOfGuesses = 0;
let guessedNum = [];

function play() {
  const userPlay = Number(document.getElementById("guess").value);
  if (userPlay < 1 || userPlay > 100) {
    alert("please enter a number btn 1 and 100.");
  } else {
    guessedNum.push(userPlay);
    noOfGuesses += 1;

    if (userPlay < answer) {
      messageOne.textContent = "Your guess is too low.";
      messageTwo.textContent = "No. of guesses: " + noOfGuesses;
      messageThree.textContent = "Guessed numbers are: " + guessedNum;
    } else if (userPlay > answer) {
      messageOne.textContent = "Your guess is too High.";
      messageTwo.textContent = "No. of guesses: " + noOfGuesses;
      messageThree.textContent = "Guessed numbers are: " + guessedNum;
    } else if (userPlay === answer) {
      messageOne.textContent = "You Got IT.";
      messageTwo.textContent = "The Number was: " + answer;
      messageThree.textContent = "After " + guessedNum.length + " Trial.";
      document.getElementById("my-btn").disable = true;
    }
  }
}
