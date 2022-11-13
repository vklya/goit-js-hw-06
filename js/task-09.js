function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  text: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};

const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.text.textContent = document.body.style.backgroundColor;
}

refs.button.addEventListener('click', changeColor);