let formBtn = document.querySelector('.form-button');
formBtn.addEventListener('click', function() {
    let nameInput = document.querySelector('.name-input')
    let passwordInput = document.querySelector('.password-input')
    let emailInput = document.querySelector('.email-input')
    let phoneInput = document.querySelector('.phone-input')
    if (nameInput.value === '') {
        alert('Введите имя!!!!!')
    }
    else if (passwordInput.value.length < 6) {
        alert('Слишком короткий пароль!!!!')
    }
    else if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        alert('В вашем имейле нет @ или . !!!')
    }
    else if (!phoneInput.value.includes('+380') || phoneInput.value.length !== 13) {
        alert('введите номер')
    }
})