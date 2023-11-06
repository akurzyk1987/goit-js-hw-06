"use strict";

const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("Wszystkie pola powinny być wypełnione");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    console.log(formData);
    form.reset();
  }
});
