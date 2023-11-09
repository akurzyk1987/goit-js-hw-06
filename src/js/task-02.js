"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const elements = [];
ingredients.forEach((element) => {
  const lastItem = document.createElement("li");
  lastItem.textContent = element;
  lastItem.classList.add("item");
  elements.push(lastItem);
});

list.append(...elements);
