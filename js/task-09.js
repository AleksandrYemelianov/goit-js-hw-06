const bodyEl = document.querySelector('body');
const currentColorValue = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

const onChangeColor = () => { 
  const color = getRandomHexColor();

  currentColorValue.textContent = color;
  bodyEl.style.backgroundColor = color;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChangeColor.addEventListener('click', onChangeColor);




