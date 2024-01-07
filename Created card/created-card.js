let aName = sessionStorage.getItem('nameInputValue')
let aDocument = document.querySelector('.head__btn').innerHTML = aName
let firstCard = document.querySelector('.first-card');
let block2Text = document.querySelector('.block2__card-text');
firstCard.addEventListener('click', function() {
    window.location.href='../Card/card.html'
    let backgroundImageUrl = '../img/video_game-marvel_s_spider_man_2-miles_morales-spider_man-1042590.jpeg'
    sessionStorage.setItem('backgroundImage', backgroundImageUrl)
})
let secondCard = document.querySelector('.second-card');
secondCard.addEventListener('click', function() {
    let backgroundImageUrl = '../img/Человек паук 2 обом.jpg'
    sessionStorage.setItem('backgroundImage', backgroundImageUrl)
    window.location.href='../Card/card.html'
})
let thirdCard = document.querySelector('.third-card');
thirdCard.addEventListener('click', function() {
    let backgroundImageUrl = '../img/img2.akspic.ru-chudo_chelovek_pauk_majl_morales-chelovek_pauk-majlz_morales-piter_parker-playstation_5-3840x2160.jpg'
    sessionStorage.setItem('backgroundImage', backgroundImageUrl)
    window.location.href='../Card/card.html'
})
let fourthCard = document.querySelector('.fourth-card');
fourthCard.addEventListener('click', function() {
    let backgroundImageUrl = '../img/video_game-spider_man_ps4-aunt_may_parker-harry_osborn-mary_jane_watson-peter_parker-spider_man-423622.jpeg'
    sessionStorage.setItem('backgroundImage', backgroundImageUrl)
    window.location.href='../Card/card.html'
})
let fifthCard = document.querySelector('.fifth-card');
fifthCard.addEventListener('click', function() {
    let backgroundImageUrl = '../img/125295-geroj-fikciya-chelovek_pauk-zheleznyj_chelovek-videoigra-3840x2160.jpg'
    sessionStorage.setItem('backgroundImage', backgroundImageUrl)
    window.location.href='../Card/card.html'
})
let sixthCard = document.querySelector('.sixth-card');
sixthCard.addEventListener('click', function() {
    let backgroundImageUrl = '../img/marvels-spiderman-2-hd-wallpaper-1920x1080-uhdpaper.com-689.1_b.jpg'
    sessionStorage.setItem('backgroundImage', backgroundImageUrl)
    window.location.href='../Card/card.html'
})
let seventhCard = document.querySelector('.seventh-card');
seventhCard.addEventListener('click', function() {
    let backgroundImageUrl = '../img/marvels-spider-man-2-be-greater-together-4k-4d-1920x1080.jpg'
    sessionStorage.setItem('backgroundImage', backgroundImageUrl)
    window.location.href='../Card/card.html'
})
let eighthCard = document.querySelector('.eighth-card');
eighthCard.addEventListener('click', function() {
    let backgroundImageUrl = '../img/marvels-spider-man-miles-morales-5120x2880-14048.png'
    sessionStorage.setItem('backgroundImage', backgroundImageUrl)
    window.location.href='../Card/card.html'
})
let ninthCard = document.querySelector('.ninth-card');
ninthCard.addEventListener('click', function() {
    let backgroundImageUrl = '../img/marvels-spider-man-miles-morales-3840x2158-3110.jpg'
    sessionStorage.setItem('backgroundImage', backgroundImageUrl)
    window.location.href='../Card/card.html'
})
let tenthCard = document.querySelector('.tenth-card');
tenthCard.addEventListener('click', function() {
    let backgroundImageUrl = '../img/venom-suit-3840x2160-17587.jpeg'
    sessionStorage.setItem('backgroundImage', backgroundImageUrl)
    window.location.href='../Card/card.html'
})
let eleventhCard = document.querySelector('.eleventh-card');
eleventhCard.addEventListener('click', function() {
    let backgroundImageUrl = '../img/marvels-spider-man-2-4k-wallpaper-3840x2160-15590.jpeg'
    sessionStorage.setItem('backgroundImage', backgroundImageUrl)
    window.location.href='../Card/card.html'
})
