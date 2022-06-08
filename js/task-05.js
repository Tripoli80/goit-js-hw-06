const refInput = document.querySelector("#name-input");
const refNameOutput = document.querySelector("#name-output");

refInput.addEventListener("input", changeTextArea);

function changeTextArea(event) {
  refNameOutput.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymous";
}
