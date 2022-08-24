/** Implement password confirmation validation. */
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("password doesn't match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.oninput = validatePassword;
confirm_password.oninput = validatePassword;