// let block2 = document.querySelector('.block2');
// let cardInside = document.querySelector('.block2-cardinside');
// let input = document.querySelector('.input__text');
// let btn = document.querySelector('.block2__card-text2');
// let choose = document.querySelector('.btn__text')
// choose.addEventListener('click', function() {
//     btn.textContent = input.value
// })

let input = document.querySelector('.input__text');
let btn = document.querySelector('.block2__card-text2');
input.addEventListener('input', function() {
    btn.textContent = input.value
})

let inputDate = document.querySelector('.input__date');
let btn2 = document.querySelector('.block2__card-text1')
inputDate.addEventListener('input', function() {
    btn2.textContent = inputDate.value
})

let firstCard = document.querySelector('.first-card');
let block2Text = document.querySelector('.card-text');
    // window.location.href='../Card/card.html'
    let generationCard = Math.floor(Math.random() * 9000 + 1000)
    let generationCardFirst = Math.floor(Math.random() * 9000 + 1000)
    let generationCardSecond = Math.floor(Math.random() * 9000 + 1000)
    block2Text.textContent = `2456 ${generationCard} ${generationCardFirst} ${generationCardSecond}` 
// let secondCard = document.querySelector('.second-card');
// let card2 = document.querySelector('.card2')
// secondCard.addEventListener('click', function() {
//     window.location.href='../Card/card.html'
//     /* card.backgroundImage = url('../img/Человек паук 2 обом.jpg') */
//     /* card2.style.backgroundImage.url = '../img/Человек\ паук\ 2\ обом.jpg' */
// })