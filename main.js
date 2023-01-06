// Dom elements
let form = document.querySelector("form");
let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#cpassword");

// Event listener to submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleInput();
});

// What to do with inputs ?
function handleInput() {
  // Values from dom elements ( input )
  let userNameValue = userName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let confirmPasswordValue = confirmPassword.value.trim();

  //  Checking for username
  if (userNameValue === "") {
    setErrorFor(userName, "Username cannot be blank");
  } else {
    setSuccessFor(userName);
  }

  // Checking for email
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else {
    setSuccessFor(email);
  }

  // Checking for password
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } 
  else {
    setSuccessFor(password);
  }

  // Checking for confirm password
  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "Confirm Password cannot be blank");
  } else if (confirmPasswordValue !== passwordValue) {
    setErrorFor(confirmPassword, "Confirm password not matched with password");
  } else {
    setSuccessFor(confirmPassword);
  }
}

// If there is some error, than what we want to do with input ?
function setErrorFor(input, message) {
  let formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.innerText = message;
}

// If there is no error, than what we want to do with input ?
function setSuccessFor(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}

// To check if email is valid or not ?


function getInfo() {

  let userNameValue = userName.value.trim();
  let passwordValue = password.value.trim();

    var username1=localStorage.getItem('username');
    var passwaod1=localStorage.getItem('password');

    if(userNameValue==username1 && passwordValue==passwaod1){
       window.location.href="index-2.html";
    }
    console.log(username1);
    console.log(passwaod1);
  
}
