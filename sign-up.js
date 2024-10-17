// Confirm passwords are the same
let passwordError = document.querySelector("#password-error");
const button = document.querySelector("#btn");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (password.value == "" && confirmPassword.value == "") {
    passwordError.style.color = "red";
    passwordError.innerHTML = "*Passwords do not match!";
  }

  console.log(e);
});

if (password !== confirmPassword) {
  passwordError.style.color = "red";
  passwordError.innerHTML = "*Passwords do not match!";

  // passwordError.innerText = "Passwords do not match!";
}
