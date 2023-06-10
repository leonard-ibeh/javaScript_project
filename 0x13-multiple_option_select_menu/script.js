"use strict";

// Display the multiple option selector menu.
// A toggle drop-down icon next to the menu to indicate it can be expanded.
// When the user clicks on an option, toggle a tick or checkmark next to the selected item to indicate it has been picked.
// Keep track of the number of selected items by updating a counter.
// If the user wants to change their selection, allow them to click on the ticked item again to remove the selection.
// Update the counter accordingly by incrementing or decrementing the count of selected items.

const selectBtn = document.querySelector(".select-btn"),
  items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", function () {
  selectBtn.classList.toggle("open");
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked"),
      btnText = document.querySelector(".btn-text");

    if (checked && checked.length > 0) {
      btnText.innerHTML = `${checked.length} Selected`;
    } else {
      btnText.innerHTML = "Select Language";
    }
  });
});
