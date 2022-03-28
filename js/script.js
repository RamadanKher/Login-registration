let userNameInput = document.getElementById("userNameInput");
let passwordInput = document.getElementById("passwordInput");
let userEmail = document.getElementById("userEmail");
// let signUpBtn = document.getElementById("signUpBtn");

let users;
if (localStorage.getItem("userData") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("userData"));
}

function signUpBtn() {
  inputsValditon(); // for inputs valditin

  if (inputsValditon() == true) {
    let userValues = {
      name: userNameInput.value,
      email: userEmail.value,
      password: passwordInput.value,
    };
    users.push(userValues); //arry of object
    let sucssesAlert = document.getElementById("sucssesAlert");
    sucssesAlert.classList.remove("d-none");
    localStorage.setItem("userData", JSON.stringify(users));
    emptyBttoms();
  } else {
  }
}

function userNameValditon() {
  var userNameSignUpAlert = document.getElementById("userNameSignUpAlert");
  var rejex = /^[A-Za-z]{3,10}\s?([A-Za-z]{3,10})?$/gm;
  if (rejex.test(userNameInput.value) == true && userNameInput.value != "") {
    userNameSignUpAlert.classList.add("d-none");
    return true;
  } else {
    userNameSignUpAlert.classList.remove("d-none");
    return false;
  }
}

function userPasswordValditon() {
  var userPasswordSignUpAlert = document.getElementById(
    "userPasswordSignUpAlert"
  );

  var rejex = /^.{5,15}$/gm;
  if (rejex.test(passwordInput.value) == true && passwordInput.value != "") {
    userPasswordSignUpAlert.classList.add("d-none");
    return true;
  } else {
    userPasswordSignUpAlert.classList.remove("d-none");
    return false;
  }
}

function userEmailValditon() {
  var userEmailSignUpAlert = document.getElementById("userEmailSignUpAlert");

  var rejex = /^[a-z A-Z]{5,10}[0-9]?@[a-z]{5,10}(\.com)$/;
  if (rejex.test(userEmail.value) == true && userEmail.value != "") {
    userEmailSignUpAlert.classList.add("d-none");
    return true;
  } else {
    userEmailSignUpAlert.classList.remove("d-none");
    return false;
  }
}
//for valdition all inputs
function inputsValditon() {
  userNameValditon();
  userPasswordValditon();
  userEmailValditon();
  if (
    userNameValditon() == true &&
    userPasswordValditon() == true &&
    userEmailValditon() == true
  ) {
    return true;
  } else {
    return false;
  }
}

function login() {
  let loginEmail = document.getElementById("loginEmail");
  let loginPassword = document.getElementById("loginPassword");
  if (loginEmail.value == "" || loginPassword.value == "") {
    //empty inputs
    let alertLogin = document.getElementById("alertLogin");
    alertLogin.classList.remove("d-none");
    return false;
  }
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].email.toLowerCase() == loginEmail.value.toLowerCase() &&
      users[i].password.toLowerCase() == loginPassword.value.toLowerCase()
    ) {
      localStorage.setItem("userName", users[i].name);
      let loginBtnnn = document.getElementById("loginBtnnn");
      loginBtnnn.setAttribute("href", "welcoming.html");
    } else {
      let wrongMsg = document.getElementById("wrongMsg");
      wrongMsg.classList.remove("d-none");
      let alertLogin = document.getElementById("alertLogin");
      alertLogin.classList.add("d-none");
    }
  }
}

let userNName = localStorage.getItem("userName");
function welcomUser() {
  document.getElementById("userNameDiv").innerHTML = "Welcom " + userNName;
}

function logout() {
  localStorage.removeItem("userName");
}
//empt btooms afeter soignup scusses
function emptyBttoms() {
  userNameInput.value = "";
  userEmail.value = "";
  passwordInput.value = "";
}
