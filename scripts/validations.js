export function handleValid(input) {
    const typeInput = input.dataset.type;

    if (input.validity.valid) {
      input.parentElement.classList.remove("formcontato__input__container--invalid");
      input.parentElement.querySelector(".formcontato__message__error").innerHTML = "";
    } else {
      input.parentElement.classList.add("formcontato__input__container--invalid");
      input.parentElement.querySelector(".formcontato__message__error").innerHTML =
      showErrorMessage(typeInput, input);
    }
}


const typeErrors = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];


const errorMessage = {
    name: {
      valueMissing: "El nombre no puede estar vacío",
      patternMismatch: "El nombre debe contener entre 1 a 50 caracteres.",
    },
    email: {
      valueMissing: "El correo no puede estar vacío",
      typeMismatch: "El correo no es válido",
    },
    subject: {
      valueMissing: "El asunto no puede estar vacío",
      patternMismatch: "El asunto debe contener entre 1 a 50 caracteres.",
    },
    message: {
      valueMissing: "El mensaje no puede estar vacío",
      patternMismatch: "El mensaje debe contener entre 1 a 300 caracteres.",
    }
};


function showErrorMessage(typeInput, input) {
    let menssage = "";
    typeErrors.forEach((error) => {
      if (input.validity[error]) {
          menssage = errorMessage[typeInput][error];
      }
    });
    return menssage;
}
