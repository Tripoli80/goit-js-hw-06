const validInput = document.querySelector("#validation-input");

validInput.addEventListener("blur", validation);

function validation(event) {
  switch (true) {
    case event.currentTarget.value.length === Number(validInput.dataset.length):
      classAdd.bind(this)("valid");
      break;

    case event.currentTarget.value.length !==
      Number(validInput.dataset.length) && event.currentTarget.value.length > 0:
      classAdd.bind(this)("invalid");
      break;

    default:
      classAdd.bind(this)("no-style");
  }
}

function classAdd(nameStyle) {
  this.classList.remove("valid", "invalid");
  nameStyle !== "no-style"
    ? this.classList.add(nameStyle)
    : this.classList.remove("valid", "invalid");
}
