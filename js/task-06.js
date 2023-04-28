const inputEl = document.querySelector('#validation-input');


const handleInputCheckValid = (event) => {
    const stringInputLength = inputEl.value.length.toString();
    
    if (stringInputLength === inputEl.dataset.length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};

inputEl.addEventListener('blur', handleInputCheckValid);