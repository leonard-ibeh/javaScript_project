"use strict";

function changeColor() {
  document.body.style.backgroundColor = rgb(
    " + Math.round(Math.random() * 255) + ",
    " + Math.round(Math.random() * 255) + ",
    " + Math.round(Math.random() * 255) + "
  );
}

const back = document.querySelector(".btn");

back.addEventListener("click", function () {
  console.log("okay");
});
