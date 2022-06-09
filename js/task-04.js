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


// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
