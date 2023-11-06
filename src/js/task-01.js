"use strict";

const category = document.querySelector("#categories");
const categoryList = category.querySelectorAll("li.item");
const numberCategoryList = categoryList.length;
console.log("Number of categories:", numberCategoryList);

categoryList.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2");
  const categoryElements = categoryItem.querySelectorAll("li");
  const numberOfElements = categoryElements.length;
  console.log("Category:", categoryTitle.textContent);
  console.log("Elements", numberOfElements);
});
