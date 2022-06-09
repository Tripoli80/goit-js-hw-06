function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refBody =document.querySelector("body")
const refBtnToChange = document.querySelector(".change-color");
const refTextNumberColor = document.querySelector(".color");
refBtnToChange.addEventListener("click", changContainerColor)


function changContainerColor() {
  const newColor = getRandomHexColor();
  refTextNumberColor.textContent = newColor
  refBody.style.backgroundColor = newColor;
}



// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }