"use strict";

const InputFontSizeControl = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

InputFontSizeControl.addEventListener("input", () => {
  const fontSize = InputFontSizeControl.value;
  spanText.style.fontSize = `${fontSize}px`;
});
