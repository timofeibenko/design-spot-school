import '../style/main.scss'
import '../../node_modules/swiper/swiper-bundle.min.css'

import Swiper from 'swiper/bundle';

// Mentors | slider & comms qty

const mentorsSwiper = new Swiper('.mentors__swiper-container', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
});

const mentorsPrevBtn = document.querySelector('.mentors__carousel-prev');
const mentorsNextBtn = document.querySelector('.mentors__carousel-next');

const mentorsSlides = document.querySelectorAll('.mentors__commentary-container');
const mentorsCommsQty = document.querySelector('#mentorsCommsQty');

mentorsCommsQty.innerHTML = mentorsSlides.length.toString();

mentorsPrevBtn.addEventListener('click', () => mentorsSwiper.slidePrev());
mentorsNextBtn.addEventListener('click', () => mentorsSwiper.slideNext());

mentorsSwiper.on("slideChange", function() {
    if (this.realIndex === 0) {
        mentorsPrevBtn.classList.add('inactive')
    }

    else if (this.realIndex + 1 === mentorsSlides.length) {
        mentorsNextBtn.classList.add('inactive')
    }

    else {
        mentorsPrevBtn.classList.remove('inactive');
        mentorsNextBtn.classList.remove('inactive');
    }
});

