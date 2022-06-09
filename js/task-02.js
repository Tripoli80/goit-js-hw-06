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




// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.
