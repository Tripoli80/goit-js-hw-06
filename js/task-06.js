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



// Задание 6
// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.