import { handleValid } from "./validations.js"; 
import { handleSubmit } from "./submit.js";

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
  input.addEventListener('blur', (input) => {
    handleValid(input.target);
  });
});

const textAreas = document.querySelectorAll('textarea');
textAreas.forEach((textArea) => {
  textArea.addEventListener('blur', (textArea) => {
    handleValid(textArea.target);
  });
});

const myForm = document.querySelector('#form');
myForm.addEventListener('submit', handleSubmit);
