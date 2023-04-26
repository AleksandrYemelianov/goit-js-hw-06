const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const handelInputName = (event) => {
    let value = event.currentTarget.value;

    if (inputName.value === '') {
        return outputName.textContent = 'Anonymous';
    }

    outputName.textContent = value;
};

inputName.addEventListener('input', handelInputName);