const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);
const sendDataToServer = (data) => {
  if (data) {
      console.log("Data to server sending..... : ", data);
      return
    }
    console.log("No Data to sending: ", data);
};

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }
  const pass = password.value;
  const mail = email.value;
  const formData = {
    mail,
    pass,
  };

  sendDataToServer(formData);
  event.currentTarget.reset();
}
