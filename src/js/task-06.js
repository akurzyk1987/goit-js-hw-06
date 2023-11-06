"use strict";

const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value;
  const dataLengthInput = validationInput.getAttribute("data-length");

  if (inputValue.length <= dataLengthInput) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
