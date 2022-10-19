import { validated } from "./validaciones.js";
import { handleSubmit } from "./submit.js";

const inputs = document.querySelectorAll("input");
const textAreas = document.querySelectorAll("textarea");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validated(input.target);
  });
});

textAreas.forEach((textArea) => {
    textArea.addEventListener("blur", (textArea) => {
      validated(textArea.target);
    });
  });

const myForm = document.querySelector('#form');
myForm.addEventListener('submit', handleSubmit);