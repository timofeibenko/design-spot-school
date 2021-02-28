import '../style/main.scss'
import '../../node_modules/swiper/swiper-bundle.min.css'
console.log('i compiled')

import Swiper from 'swiper/bundle';

// Sliders

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,

    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

});

swiper.on("slideChange", function() {
    console.log("slide changed - current slide is: " + this.realIndex )
    if(this.realIndex == 0){
        console.log("first slide do something")
    }
    else{
        console.log("not first slide do somehing")
    }
});