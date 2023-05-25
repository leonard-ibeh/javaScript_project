"use strict";

// 1. Create a web page with a button that triggers the display of a hidden model.
// 2. When the button is clicked, show the hidden model.
// 3. Include a "Cancel" button inside the hidden model.
// 4. When the "Cancel" button is clicked, hide the hidden model.
// 5. Allow the hidden model to be canceled by clicking outside the model as well.

const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-model");
const btnOpenModel = document.querySelectorAll(".show-model");

const openModel = function () {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnOpenModel.length; i++)
  btnOpenModel[i].addEventListener("click", openModel);

const closeModel = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModel.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    closeModel();
  }
});
