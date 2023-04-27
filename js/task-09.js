const bodyEl = document.querySelector('body');
const currentColorValue = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

const onChangeColor = () => { 
  // currentColorValue.textContent = getRandomHexColor();
  // document.body.style.backgroundColor = currentColorValue.textContent;
  // bodyEl.style.backgroundColor = currentColorValue.textContent;

  const color = getRandomHexColor();

  currentColorValue.textContent = color;
  bodyEl.style.backgroundColor = color;
  console.log(bodyEl);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChangeColor.addEventListener('click', onChangeColor);




