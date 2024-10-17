// Confirm passwords are the same
let passwordError = document.querySelector("#password-error");
const button = document.querySelector("#btn");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (password.value !== confirmPassword.value) {
    console.log(password, confirmPassword);
    passwordError.style.color = "red";
    passwordError.innerHTML = "*Passwords do not match!";
    password.value = "";
    confirmPassword.value = "";

    // passwordError.innerText = "Passwords do not match!";
  } else {
    passwordError.style.color = "green";
    passwordError.innerHTML = "*Good to go.";
    password.value = "";
    confirmPassword.value = "";
  }

  console.log(e);
});
