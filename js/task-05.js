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
