document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    validateForm();
    event.preventDefault();
  });

var inputElements = [
  document.getElementById("name"),
  document.getElementById("email"),
  document.getElementById("address"),
  document.getElementById("phone"),
  document.getElementById("dob"),
  document.getElementById("dept"),
  document.getElementById("status"),
  document.getElementById("msg"),
];

inputElements.forEach(function (input) {
  input.addEventListener("input", function () {
    if (input.value) {
      input.classList.remove("error");
    } else {
      input.classList.add("error");
    }
  });
});

function validateForm() {
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  inputElements.forEach(function (input) {
    if (!input.value) {
      input.classList.add("error");
      valid = false;
    } else {
      input.classList.remove("error");
    }
  });

  var anyElementIsFalse = inputElements.some(function (element) {
    console.log(element.value);
    return element.value === null || element.value === "";
  });

  console.log(`anyElementsFalse: ${anyElementIsFalse}`);

  if (anyElementIsFalse) {
    alert("All fields must be filled out");
    return false;
  }

  if (!validateEmail(email)) {
    console.log(email);
    alert("Please enter a valid email address");
    return false;
  }

  if (!validatePhone(phone)) {
    alert("Please enter a valid phone number");
    return false;
  }

  return true;
}

function validateEmail(email) {
  var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

function validatePhone(phone) {
  // Srilankan Mobile Numbers Only
  var re = /^(?:7|0|(?:\+94))[0-9]{9,10}$/;
  return re.test(phone);
}
