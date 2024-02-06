let createButton = document.querySelector(".create-account");
let passwordInput = document.querySelector("#password");
let passwordConfirm = document.querySelector("#confirm");
let errorMessage = document.querySelector(".error-message");

createButton.addEventListener("click", function () {
  let passwordInputString = passwordInput.value;
  let passwordConfirmString = passwordConfirm.value;

  if (passwordInputString !== passwordConfirmString) {
    passwordInput.classList.add("error");
    passwordConfirm.classList.add("error");
    errorMessage.classList.remove("hidden");
    console.log(passwordInputString, passwordConfirmString);
  }
});
