"use strict";

const form = document.querySelector('.login-form');

const loginFormSubmit = (event) => {
    event.preventDefault();
    const { elements: email, password } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('All fields are required to be completed!');
    }

    const result = { email: email.value, password: password.value };
    console.log(result);
    event.currentTarget.reset();
}

form.addEventListener('submit', loginFormSubmit);