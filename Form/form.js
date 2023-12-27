let formBtn = document.querySelector('.form-button');
formBtn.addEventListener('click', function() {
    let nameInput = document.querySelector('.name-input')
    let passwordInput = document.querySelector('.password-input')
    let emailInput = document.querySelector('.email-input')
    let phoneInput = document.querySelector('.phone-input')
    let checkInput = document.querySelector('.check-input')
    let modalName = document.querySelector('.modal-name')
    if (nameInput.value === '') {
        // alert('Введите имя!!!!!')
        modalName.classList.add('name')
        setTimeout(function() {
            modalName.classList.remove('name')
            formLable.style.color = 'black'
        }, 1500)
        let formLable = document.querySelector('.form-lable')
        formLable.style.color = 'red'
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
    else if (!checkInput.checked) {
        alert('Вы не agree')
    }
    else if (true) {
        window.location.href='../Created card/created-card.html'
    }
})