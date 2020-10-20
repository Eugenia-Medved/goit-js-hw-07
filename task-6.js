const inputValidator = document.querySelector('#validation-input');



function oninputValidation() {
    if (inputValidator.value.length < Number(inputValidator.dataset.length)) {
        inputValidator.classList.add('invalid');
        inputValidator.classList.remove('valid')
    } else {
        inputValidator.classList.add('valid');
        inputValidator.classList.remove('invalid');
    }
}

inputValidator.addEventListener('focus', () => {
    inputValidator.classList = '';
})

inputValidator.addEventListener('blur', oninputValidation)