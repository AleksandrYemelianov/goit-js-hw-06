const loginFormEl = document.querySelector('.login-form');

const handleBtnSubmitForm = (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if ((email.value === '') || (password.value === '')) {
        alert('Всі поля повинні бути заповнені!')
    }

    const userData = {
        [email.name]: email.value,
        [password.name]: password.value,
    };

    console.log('userData', userData);

    loginFormEl.reset()
};

loginFormEl.addEventListener('submit', handleBtnSubmitForm);





