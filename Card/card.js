/* let block2 = document.querySelector('.block2');
let cardInside = document.querySelector('.block2-cardinside');
let input = document.querySelector('.input__text');
let btn = document.querySelector('.block2__card-text2');
let choose = document.querySelector('.btn__text')
choose.addEventListener('click', function() {
    btn.textContent = input.value
}) */
let backgroundImageUrl = sessionStorage.getItem('backgroundImage');
let card = document.querySelector('.card');
card.style.backgroundImage = `url('${backgroundImageUrl}')`

let input = document.querySelector('.input__text');
let btn = document.querySelector('.block2__card-text2');
input.addEventListener('input', function() {
    btn.textContent = input.value
})

let inputDate = document.querySelector('.input__date');
let h2 = document.querySelector('.block2__card-text1')
inputDate.addEventListener('change', function() {
    let inputDateValue = inputDate.value
    let btn2Calendar = inputDateValue.split('-')
    if (btn2Calendar.length === 3) {
        let day = btn2Calendar[2]
        let month = btn2Calendar[1]
        let year = btn2Calendar[0]
        let yearNumber = Number.parseInt(year)
        let aYear = yearNumber + 5
        h2.textContent = `${month}/${aYear}`
    }
})



let firstCard = document.querySelector('.first-card');
let block2Text = document.querySelector('.card-text');
    // window.location.href='../Card/card.html'
    let generationCard = Math.floor(Math.random() * 9000 + 1000)
    let generationCardFirst = Math.floor(Math.random() * 9000 + 1000)
    let generationCardSecond = Math.floor(Math.random() * 9000 + 1000)
    block2Text.textContent = `2456 ${generationCard} ${generationCardFirst} ${generationCardSecond}`

let aName = sessionStorage.getItem('nameInputValue')
let aDocument = document.querySelector('.head__btn').innerHTML = aName
