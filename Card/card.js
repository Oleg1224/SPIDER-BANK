let block2 = document.querySelector('.block2');
let cardInside = document.querySelector('.block2-cardinside');
let input = document.querySelector('.input__text');
let btn = document.querySelector('.block2__card-text2');
let choose = document.querySelector('.btn__text')
choose.addEventListener('click', function() {
    input.value = btn.textContent
})