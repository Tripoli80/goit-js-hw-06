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
