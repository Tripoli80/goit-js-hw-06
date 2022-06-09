const refInput = document.querySelector("#name-input");
const refNameOutput = document.querySelector("#name-output");

window.addEventListener("keydown", clearTextArea);
refInput.addEventListener("input", changeTextArea);

function changeTextArea(event) {
  refNameOutput.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymous";
}

function clearTextArea(event) {
  if (event.key === "Escape") {
    refInput.value = "";
    changeTextArea(event);
  }
}

// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
