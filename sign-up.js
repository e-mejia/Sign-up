// Confirm passwords are the same
let passwordError = document.querySelector("#password-error");
const form = document.querySelector("#form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

form.addEventListener("submit", (e) => {
  if (password.value !== confirmPassword.value) {
    passwordError.style.color = "red";
    passwordError.innerHTML = "*Passwords do not match!";
    password.value = "";
    confirmPassword.value = "";
    e.preventDefault();
  }
});

password.style.color = "green";
confirmPassword.style.color = "green";
