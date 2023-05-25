"use strict";

// 1. Create a web page with a button that triggers the display of a hidden model.
// 2. When the button is clicked, show the hidden model.
// 3. Include a "Cancel" button inside the hidden model.
// 4. When the "Cancel" button is clicked, hide the hidden model.
// 5. Allow the hidden model to be canceled by clicking outside the model as well.

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModel = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModel);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModel.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
