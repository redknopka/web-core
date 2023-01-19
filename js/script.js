const MIN_HEIGHT_GRID_4 = 1119;
const MIN_HEIGHT_GRID_3 = 767;
const MOBI_HEIGHT = 768;
function initSlider() {
    if (window.innerWidth < MOBI_HEIGHT ) {
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



let brandsContainer = document.querySelectorAll('.brands__card');

var hideCards = function() {
    if (window.innerWidth > MIN_HEIGHT_GRID_3 && window.innerWidth < MIN_HEIGHT_GRID_4) {
        let amountShowedCards = 6;
        for (let i = amountShowedCards; i < 11; i++) {
            brandsContainer[i].classList.add('invisible');
        }
    }
    if (window.innerWidth > MIN_HEIGHT_GRID_4) {
        let amountShowedCards = 8;
        for (let i = amountShowedCards; i < 11; i++) {
            brandsContainer[i].classList.add('invisible');
        }
    }
}

hideCards();
let buttonShowMoreLess = document.querySelector('.brands__footer-button');
buttonShowMoreLess.addEventListener('click', function() {
    let brandsContainer = document.querySelectorAll('.brands__card');
    if (buttonShowMoreLess.classList.contains('show-more')) {
        buttonShowMoreLess.classList.remove('show-more');
        buttonShowMoreLess.classList.add('show-less');
        buttonShowMoreLess.textContent = 'Скрыть';
        for (let i = 0; i < 11; i++) {
            brandsContainer[i].classList.remove('invisible');
        }
    }
    else if (buttonShowMoreLess.classList.contains('show-less')) {
        buttonShowMoreLess.classList.remove('show-less');
        buttonShowMoreLess.classList.add('show-more');
        buttonShowMoreLess.textContent = 'Показать все';
        hideCards();
    }
});
