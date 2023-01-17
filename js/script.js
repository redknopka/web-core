function initSlider() {
    if (window.innerWidth < 768 ) {
        let slider = document.querySelector('.swiper');
        let newSwiper = new Swiper(slider, {
            spaceBetween: 16,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        slider.dataset.mobile = 'true';
    }
}
initSlider();

if (window.innerWidth > 767 && window.innerWidth < 1119) {
    let amountShowedCards = 6;
    let brandsContainer = document.querySelectorAll('.brands__card');
    for (let i = amountShowedCards; i < 11; i++) {
        brandsContainer[i].classList.add('invisible');
    }
}
if (window.innerWidth > 1119) {
    let amountShowedCards = 8;
    let brandsContainer = document.querySelectorAll('.brands__card');
    for (let i = amountShowedCards; i < 11; i++) {
        brandsContainer[i].classList.add('invisible');
    }
}

let buttonShowLess = document.querySelector('.show-less');
let buttonShowMore = document.querySelector('.show-more');
buttonShowMore.addEventListener('click', function() {
    buttonShowMore.classList.add('invisible');
    buttonShowLess.classList.remove('invisible');
    let brandsContainer = document.querySelectorAll('.brands__card');
    for (let i = 0; i < 11; i++) {
        brandsContainer[i].classList.remove('invisible');
    }
});
buttonShowLess.addEventListener('click', function() {
    buttonShowLess.classList.add('invisible');
    buttonShowMore.classList.remove('invisible');
    let brandsContainer = document.querySelectorAll('.brands__card');
    if (window.innerWidth > 767 && window.innerWidth < 1119) {
        let amountShowedCards = 6;
        for (let i = amountShowedCards; i < 11; i++) {
            brandsContainer[i].classList.add('invisible');
        }
    }
    if (window.innerWidth > 1119) {
        let amountShowedCards = 8;
        let brandsContainer = document.querySelectorAll('.brands__card');
        for (let i = amountShowedCards; i < 11; i++) {
            brandsContainer[i].classList.add('invisible');
        }
    }
});