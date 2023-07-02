"use strict";

const signUpState = document.querySelector(".sign-up-state");
const successState = document.querySelector(".success-state");
const btnSubmit = document.querySelector(".btn-submit");
const btnDismiss = document.querySelector(".btn-dismiss");
const confirmationEmailEl = document.querySelector(".confirmation-email");
const form = document.querySelector(".newsletter-form");
const formInput = document.querySelector(".newsletter-input");
const errorEl = document.querySelector(".error-message");

let inputValue = "";

formInput.addEventListener("invalid", (e) => {
  e.preventDefault();

  formInput.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
  formInput.style.border = "1px solid hsl(4, 100%, 67%)";
  formInput.style.color = "hsl(4, 100%, 67%)";

  errorEl.classList.remove("hidden");
  if (formInput.value === "") {
    errorEl.textContent = "Email required";
  } else {
    errorEl.textContent = "Valid email required";
  }
});

formInput.addEventListener("focus", () => {
  formInput.style.backgroundColor = "hsl(0, 0%, 100%)";
  formInput.style.border = "1px solid hsl(231, 7%, 60%)";
  formInput.style.color = "hsl(235, 18%, 26%)";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputValue = formInput.value;
  confirmationEmailEl.textContent = inputValue;
  signUpState.classList.add("hidden");
  successState.classList.remove("hidden");
});

btnDismiss.addEventListener("click", () =>
  successState.classList.add("hidden")
);
