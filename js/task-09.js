function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  text: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};

const changeColor = () => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.text.textContent = color;
}

refs.button.addEventListener('click', changeColor);