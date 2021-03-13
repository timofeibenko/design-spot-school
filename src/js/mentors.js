import Swiper from 'swiper/bundle';
import '../../node_modules/swiper/swiper-bundle.min.css';

import NikZen from  './../img/main/nikita-zenchenko-photo.png';
import placeholder from './../img/main/mentors-placeholder.jpg';

import declinationOfNum from "./declinationOfNum";

// Vars

const mentorsPrevBtn = document.querySelector('.mentors__slider-prev');
const mentorsNextBtn = document.querySelector('.mentors__slider-next');

const mentorsSlidesQty = document.querySelectorAll('.mentors__commentary-container').length;
const mentorsCommsQty = document.querySelector('#mentorsCommsQty');

// Photos

const photos = document.querySelectorAll('.mentors__photo');

photos.forEach((photo, index) => {
    if (index === 0) photo.src = NikZen
    else photo.src = placeholder
});

// Commentary count

mentorsCommsQty.innerHTML = `${mentorsSlidesQty.toString()} ${declinationOfNum(mentorsSlidesQty, ['комментарий', 'комментария', 'комментариев'])}`;

// Commentary slider

const mentorsSwiper = new Swiper('.mentors__swiper-container', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
});

mentorsPrevBtn.addEventListener('click', () => mentorsSwiper.slidePrev());
mentorsNextBtn.addEventListener('click', () => mentorsSwiper.slideNext());

mentorsSwiper.on("slideChange", function() {
    if (this.realIndex === 0) {
        mentorsPrevBtn.classList.add('inactive')
    }

    else if (this.realIndex + 1 === mentorsSlidesQty) {
        mentorsNextBtn.classList.add('inactive')
    }

    else {
        mentorsPrevBtn.classList.remove('inactive');
        mentorsNextBtn.classList.remove('inactive');
    }
});
