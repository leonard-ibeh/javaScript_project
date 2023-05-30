"use strict";
// simple password validator
// 1. Display a password input field and a checkbox toggle button for showing/hiding the password.
// a. Check if the password has a minimum length of 8 characters.
// b. Check if the password contains at least 1 number.
// c. Check if the password contains at least 1 lowercase letter.
// d. Check if the password contains at least 1 special character.
// e. Check if the password contains at least 1 uppercase letter.
// Display ticks or indicators next to each requirement to visually indicate if it is met.

const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");
const requirements = [
  { regex: /.{8,}/, index: 0 } /*Minimun of 8 characters*/,
  { regex: /[0-9]/, index: 1 } /* At least 1 number*/,
  { regex: /[a-z]/, index: 2 } /* At least one lowercase letter*/,
  { regex: /[^A-Za-z0-9]/, index: 3 } /*At least one specal character*/,
  { regex: /.[A-Z]/, index: 4 } /* At least one uppercase letter*/,
];

passwordInput.addEventListener("keyup", (e) => {
  requirements.forEach((item) => {
    // Check if the password matches the requiremt regex
    const isValid = item.regex.test(e.target.value);
    const requirementItem = requirementList[item.index];

    if (isValid) {
      requirementItem.firstElementChild.className = "fa-solid fa-check";
      requirementItem.classList.add("valid");
    } else {
      requirementItem.firstElementChild.className = "fa-solid fa-circle";
      requirementItem.classList.remove("valid");
    }
  });
});

eyeIcon.addEventListener("click", () => {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  eyeIcon.className = `fa-solid fa-eye${
    passwordInput.type === "password" ? "" : "-slash"
  }`;
});
