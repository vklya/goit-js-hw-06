"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  text: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};

const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.text.textContent = getRandomHexColor();
}

refs.button.addEventListener('click', changeColor);