import Swiper from 'swiper/bundle';
import '../../node_modules/swiper/swiper-bundle.min.css';

import declinationOfNum from "./declinationOfNum";

// Vars

const reviewsPrevBtn = document.querySelector('.reviews__slider-prev');
const reviewsNextBtn = document.querySelector('.reviews__slider-next');

const reviewsSlidesQty = document.querySelectorAll('.reviews__review-container').length;
const reviewsQty = document.querySelector('#reviewsQty');

// Reviews count

reviewsQty.innerHTML = `${reviewsSlidesQty.toString()} ${declinationOfNum(reviewsSlidesQty, ['отзыв', 'отзыва', 'отзывов'])}`;

// Reviews slider

const reviewsSwiper = new Swiper('.reviews__swiper-container', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 8,
    grabCursor: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
    }
});

reviewsPrevBtn.addEventListener('click', () => {
    reviewsSwiper.slidePrev()
    reviewsNextBtn.classList.remove('inactive');
});

reviewsNextBtn.addEventListener('click', () => reviewsSwiper.slideNext());

reviewsSwiper.on("slideChange", function () {

    if (this.realIndex === 0) {
        reviewsPrevBtn.classList.add('inactive')
    }

    else if (this.realIndex + 1 === reviewsSlidesQty) {
        reviewsNextBtn.classList.add('inactive')
    }

    else if (this.realIndex !== 0) {
        reviewsPrevBtn.classList.remove('inactive');
    }
});

reviewsSwiper.on('reachEnd', function () {
    reviewsNextBtn.classList.add('inactive')
})
