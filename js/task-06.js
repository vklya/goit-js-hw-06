"use strict";

const input = document.querySelector('#validation-input');
const valid = input.getAttribute("data-length");
const inValid = parseInt(valid, 10);

const inputValidation = () => {
    if (input.value.length === inValid) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}

input.addEventListener('blur', inputValidation);