"use strict";
const countCategori = document.querySelector("#categories").children;
// console.log("Number of categories: ", countCategori.length);
// console.log("object :>> ", countCategori);
let result = `Number of categories: ${countCategori.length} \n\n\n`;

Array(...countCategori).map((item) => {
  const nameCategory = item.querySelector("h2").textContent;
  const CountSubCategory = item.querySelectorAll("li").length;

  result = result + `Category: ${nameCategory} \n`;
  result = result + `Elements: ${CountSubCategory} \n\n\n`;
});
console.log(result);
