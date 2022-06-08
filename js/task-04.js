//https://youtu.be/2Dd5Q2L457o?t=5597

const valueUI = document.querySelector("#value");

const btnRefPlus = document.querySelector('button[data-action="increment"]');
const btnRefMinus = document.querySelector('button[data-action="decrement"]');

const changeCount = function ({ currentValue = 0, step = 1 }) {
  return currentValue + step;
};

const increment = function () {
  valueUI.textContent = changeCount({
    currentValue: Number(valueUI.textContent),
    step: 1,
  });
};
const decrement = function () {
  valueUI.textContent = changeCount({
    currentValue: Number(valueUI.textContent),
    step: -1,
  });
};



btnRefMinus.addEventListener("click", decrement);
btnRefPlus.addEventListener("click", increment);



// btnRefMinus.dataset.action = "dddd"
// console.log("object :>> ", btnRefMinus.dataset.action);
