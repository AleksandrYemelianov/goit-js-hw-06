const inputEl = document.querySelector('#validation-input');


const handelInputCheckValid = (event) => {
    const stringInputLength = inputEl.value.length;

    if (stringInputLength >= inputEl.dataset.length) {
        console.log(stringInputLength > inputEl.dataset.length);
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};

inputEl.addEventListener('blur', handelInputCheckValid);