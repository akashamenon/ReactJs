const form = document.getElementById("registration-form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
const address = document.getElementById("address");
let validationFlag = false;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("validationFlag",validationFlag);
    validateInputs();
    console.log("validationFlag",validationFlag);
    if (validationFlag) {
      return (window.location.href = "table.html");
    }
});
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const isValidContact = (email) => {
  const re = /^\d{10}$/; 
  return re.test(String(email).toLowerCase());
};
const validateInputs = () => {
  const firstNameValue = firstname.value.trim();
  const lastNameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const contactValue = contact.value.trim();
  const addressValue = address.value.trim();

  if (firstNameValue === "") {
    setError(firstname, "First Name is required");
    validationFlag = false;
  } else {
    setSuccess(firstname);
    validationFlag = true;
    console.log("validationFlag",validationFlag);
  }

  if (lastNameValue === "") {
    setError(lastname, "Last Name is required");
    validationFlag = false;
  } else {
    setSuccess(lastname);
    validationFlag = true;
    console.log("validationFlag",validationFlag);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
    validationFlag = false;
    console.log("validationFlag",validationFlag);
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
    validationFlag = false;
    console.log("validationFlag",validationFlag);
  } else {
    setSuccess(email);
    validationFlag = true;
    console.log("validationFlag",validationFlag);
  }

  if (contact === "") {
    setError(contact, "Contact is required");
    validationFlag = false;
  } else if (!isValidContact(contactValue)) {
    setError(contact, "Provide a valid contact number");
    validationFlag = false;
  } else {
    setSuccess(contact);
    validationFlag = true;
    console.log("validationFlag",validationFlag);
  }

  if (lastNameValue === "") {
    setError(lastname, "Last Name is required");
    validationFlag = false;
  } else {
    setSuccess(lastname);
    validationFlag = true;
    console.log("validationFlag",validationFlag);
  }

  if (lastNameValue === "") {
    setError(lastname, "Last Name is required");
    validationFlag = false;
  } else {
    setSuccess(lastname);
    validationFlag = true;
    console.log("validationFlag",validationFlag);
  }

  if (addressValue === "") {
    setError(address, "Address is required");
    validationFlag = false;
  } else {
    setSuccess(address);
    validationFlag = true;
    console.log("validationFlag",validationFlag);
  }
};
