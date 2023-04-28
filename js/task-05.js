const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const handleInputName = (event) => {
    let value = event.currentTarget.value;

    if (inputName.value.trim() === '') {
        return outputName.textContent = 'Anonymous';
    }

    outputName.textContent = value;
};

inputName.addEventListener('input', handleInputName);