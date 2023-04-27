const inputEl = document.querySelector('#controls input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes')
boxesEl.style.display = 'flex';
boxesEl.style.flexWrap = 'wrap';

const createBoxes = (amount) => {
  amount = inputEl.value;
  let createBox = '';
  for (let i = 1; i <= amount; i++) {
    const color = getRandomHexColor();
    createBox += `<div style="width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: ${color}"></div>`;
  }
  boxesEl.insertAdjacentHTML('beforeend', createBox)
 };

const destroyBoxes = () => {
  boxesEl.innerHTML = '';
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
