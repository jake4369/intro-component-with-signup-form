const fNameInput = document.getElementById("fname");
const fNameLabel = document.getElementById("fname-label");
const fNameErrorIcon = document.getElementById("fname-icon-error");

const lNameInput = document.getElementById("lname");
const lNameLabel = document.getElementById("lname-label");
const lNameErrorIcon = document.getElementById("lname-icon-error");

const emailInput = document.getElementById("email");
const emailLabel = document.getElementById("email-label");
const emailErrorIcon = document.getElementById("email-icon-error");

const passwordInput = document.getElementById("password");
const passwordLabel = document.getElementById("password-label");
const passwordErrorIcon = document.getElementById("password-icon-error");

const submitBtn = document.getElementById("submitBtn");

let fNameValid;
let lNameValid;
let emailValid;
let passwordValid;

function error(input, label, icon) {
  input.style.border = "2px solid #FF7979";
  input.style.marginBottom = "6px";
  input.classList.add("error");
  label.style.display = "block";
  label.style.marginBottom = "19px";
  icon.style.display = "block";
}

function success(input, label, icon) {
  input.style.border = "2px solid #4BB543";
  input.classList.remove("error");
  label.style.display = "none";
  input.style.marginBottom = "16px";
  icon.style.display = "none";
}

function checkFirstName() {
  const firstName = fNameInput.value;
  if (firstName.length < 2 || firstName === "") {
    error(fNameInput, fNameLabel, fNameErrorIcon);
    fNameValid = false;
  } else {
    success(fNameInput, fNameLabel, fNameErrorIcon);
    fNameValid = true;
  }
}

function checkLastName() {
  const lastName = lNameInput.value;
  if (lastName.length < 2 || lastName === "") {
    error(lNameInput, lNameLabel, lNameErrorIcon);
    lNameValid = false;
  } else {
    success(lNameInput, lNameLabel, lNameErrorIcon);
    lNameValid = true;
  }
}

function checkEmail() {
  const email = emailInput.value;
  const filter = new RegExp(
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  );

  if (email === "" || !filter.test(email)) {
    error(emailInput, emailLabel, emailErrorIcon);
    emailInput.placeholder = "email@example/com";
    emailValid = false;
  } else {
    success(emailInput, emailLabel, emailErrorIcon);
    emailInput.placeholder = "Email Address";
    emailValid = true;
  }
}

function CheckPassword() {
  const passw = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (!passwordInput.value.match(passw) || passwordInput.value === "") {
    error(passwordInput, passwordLabel, passwordErrorIcon);
    passwordInput.placeholder = "Min-length: 8 characters";
    passwordValid = false;
  } else {
    success(passwordInput, passwordLabel, passwordErrorIcon);
    passwordValid = true;
  }
}

submitBtn.addEventListener("click", (e) => {
  checkFirstName();
  checkLastName();
  checkEmail();
  CheckPassword();

  if (!fNameValid || !lNameValid || !emailValid || !passwordValid) {
    e.preventDefault();
  }
});

// TYPEWRITER
let i = 0;
let target = document.querySelector("h1");
let text = target.innerHTML;
target.innerHTML = " ";
let speed = 75; //speed duration of effect in millisec

typeWriter(); //to call function
function typeWriter() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
