let formBtn = document.querySelector('.form-button');
formBtn.addEventListener('click', function() {
    let nameInput = document.querySelector('.name-input')
    let passwordInput = document.querySelector('.password-input')
    let emailInput = document.querySelector('.email-input')
    let phoneInput = document.querySelector('.phone-input')
    let checkInput = document.querySelector('.check-input')
    if (nameInput.value === '') {
        let modalName = document.querySelector('.modal-name')
        modalName.classList.add('name')
        setTimeout(function() {
            modalName.classList.remove('name')
            formLable.style.color = 'black'
            nameInput.style.color = 'black'
        }, 1500)
        let formLable = document.querySelectorAll('.form-lable')
        formLable.style.color = 'red'
        nameInput.style.color = 'red'
    }
    else if (nameInput.value.length > 18) {
        let modalName2 = document.querySelector('.modal-name2')
        modalName2.classList.add('name2')
        setTimeout(function() {
            modalName2.classList.remove('name2')
            formLable.style.color = 'black'
            nameInput.style.color = 'black'
        }, 1500)
        let formLable = document.querySelectorAll('.form-lable')
        formLable.style.color = 'red'
        nameInput.style.color = 'red'
    }
    else if (nameInput.value.includes('!') || nameInput.value.includes('?')) {
        let modalName3 = document.querySelector('.modal-name3')
        modalName3.classList.add('name3')
        setTimeout(function() {
            modalName3.classList.remove('name3')
            formLable.style.color = 'black'
            nameInput.style.color = 'black'
        }, 1500)
        let formLable = document.querySelectorAll('.form-lable')
        formLable.style.color = 'red'
        nameInput.style.color = 'red'
    }
    else if (passwordInput.value === '') {
        let modalPassword = document.querySelector('.modal-password')
        modalPassword.classList.add('password')
        setTimeout(function() {
            modalPassword.classList.remove('password')
            formLable.style.color = 'black'
            passwordInput.style.color = 'black'
        }, 1500)
        let formLable = document.querySelectorAll('.form-lable')
        formLable.style.color = 'red'
        passwordInput.style.color = 'red'
    }
    else if (passwordInput.value.length < 6) {
        let modalPassword2 = document.querySelector('.modal-password2')
        modalPassword2.classList.add('password2')
        setTimeout(function() {
            modalPassword2.classList.remove('password2')
            formLable.style.color = 'black'
            passwordInput.style.color = 'black'
        }, 1500)
        let formLable = document.querySelectorAll('.form-lable')
        formLable.style.color = 'red'
        passwordInput.style.color = 'red'
    }
    else if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        let modalEmail = document.querySelector('.modal-email')
        modalEmail.classList.add('email')
        setTimeout(function() {
            modalEmail.classList.remove('email')
            formLable.style.color = 'black'
            emailInput.style.color = 'black'
        }, 1500)
        let formLable = document.querySelectorAll('.form-lable')
        formLable.style.color = 'red'
        emailInput.style.color = 'red'
    }
    else if (phoneInput.value === '') {
        let modalPhone = document.querySelector('.modal-phone')
        modalPhone.classList.add('phone')
        setTimeout(function() {
            modalPhone.classList.remove('phone')
            formLable.style.color = 'black'
            emailInput.style.color = 'black'
        }, 1500)
        let formLable = document.querySelectorAll('.form-lable')
        formLable.style.color = 'red'
        emailInput.style.color = 'red'
    }
    else if (!phoneInput.value.includes('+380')) {
        let modalPhone2 = document.querySelector('.modal-phone2')
        modalPhone2.classList.add('phone2')
        setTimeout(function() {
            modalPhone2.classList.remove('phone2')
            formLable.style.color = 'black'
            emailInput.style.color = 'black'
        }, 1500)
        let formLable = document.querySelectorAll('.form-lable')
        formLable.style.color = 'red'
        emailInput.style.color = 'red'
    }
    else if (phoneInput.value.length !== 13) {
        let modalPhone3 = document.querySelector('.modal-phone3')
        modalPhone3.classList.add('phone3')
        setTimeout(function() {
            modalPhone3.classList.remove('phone3')
            formLable.style.color = 'black'
            emailInput.style.color = 'black'
        }, 1500)
        let formLable = document.querySelectorAll('.form-lable')
        formLable.style.color = 'red'
        emailInput.style.color = 'red'
    }
    else if (!checkInput.checked) {
        let modalCheck = document.querySelector('.modal-check')
        modalCheck.classList.add('check')
        setTimeout(function() {
            modalCheck.classList.remove('check')
            formLable.style.color = 'black'
            checkInput.style.color = 'black'
        }, 1500)
        let formLable = document.querySelectorAll('.form-lable')
        formLable.style.color = 'red'
        checkInput.style.color = 'red'
    }
    else {
        let nameInputValue = nameInput.value
        sessionStorage.setItem('nameInputValue', nameInputValue)
        window.location.href='../Created card/created-card.html'
    }
})