function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refBoxes = document.querySelector("#boxes");
const refCountBoxes = document.querySelector("input");
console.log("refCountBoxes :>> ", refCountBoxes);
const refBtnCreate =document.querySelector("button[data-create]")
const refBtnDestroy = document.querySelector("button[data-destroy]");

refBtnCreate.addEventListener("click", () => {
const refCountBoxes = document.querySelector("input");
  createBoxes(Number(refCountBoxes.value))
});

refBtnDestroy.addEventListener("click", () => {
  createBoxes(0);
});



function createBoxes(amount) {
  console.log(amount);
  refBoxes.innerHTML=""
  if (amount>0){const boxes = []
  for (let i = 0; i < amount; i += 1)
  {
    const tempElement = document.createElement("div")
    tempElement.style.width = `${30 + i * 10}px`
    tempElement.style.height = `${30 + i * 10}px`;
    tempElement.style.backgroundColor = getRandomHexColor();
    tempElement.textContent = i + 1;
    boxes.push(tempElement)  
  }
refBoxes.append(...boxes)}
  
}