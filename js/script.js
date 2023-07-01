"use strict";

const btnSubmit = document.querySelector(".btn-submit");
const form = document.querySelector(".newsletter-form");
const formInput = document.querySelector(".newsletter-input");
const errorEl = document.querySelector(".error-message");

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

btnSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Click");
});
