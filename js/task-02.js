const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//знайти єлемент ul
//перебрати масив создаючи li
// записати в li class item   elem.classList.add(cls)
//запушити li до масиву
// всунути масив в element ul

const parentUl = document.querySelector("#ingredients");
console.log(parentUl);

let resultLi = [];
ingredients.map((item) => {
  const tempLi = document.createElement("li");
  tempLi.textContent = item;
  tempLi.classList.add("item");
  resultLi.push(tempLi);
});
parentUl.append(...resultLi);
