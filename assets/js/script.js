const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("repassword");

function error(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}
function succes(input) {
  input.className = "form-control is-valid";
}

const checkEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function checkRequerd(inputs) {
  inputs.forEach(function (input) {
    if (input.value === "") {
      error(input, `${input.id} required`);
    } else {
      succes(input);
    }
  });
}

function checkLenght(input, min, max) {
  if (input.value.length < min) {
    error(input, `${input.id} en az ${min} karakter olmalidir.`);
  } else if (input.value.length > max) {
    error(input, `${input.id} en cox ${max} karakter olmalidir.`);
  } else {
    succes(input);
  }
}
function checkPassword(input1, input2) {
  if (input1.value !== input2.value) {
    error(input2, "Parollar eyni deyil!");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequerd([userName, email, password, rePassword]);
  checkEmail(email);
  checkLenght(userName, 7, 15);
  checkPassword(password, rePassword);

  //   if (userName.value === "") {
  //     error(userName, "User Name yazin");
  //   } else {
  //     succes(userName);
  //   }

  //   if (email.value === "") {
  //     error(email, "Email yazin");
  //   }else if (!validateEmail(email.value)) {
  //     error(email,"Emaili duzgun yazin")
  //   }
  //   else {
  //     succes(email);
  //   }

  //   if (password.value === "") {
  //     error(password, "Password yazin");
  //   } else {
  //     succes(password);
  //   }

  //   if (rePassword.value === "") {
  //     error(rePassword, "Yeniden password yazin");
  //   } else {
  //     succes(rePassword);
  //   }
});
