"use strict";

const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
};


const onInputChange = () => {
    if (refs.input.value === '') {
        refs.output.textContent = "Anonymous";
    }
    else refs.output.textContent = refs.input.value;
}

refs.input.addEventListener('input', onInputChange);