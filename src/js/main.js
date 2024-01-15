import '../scss/style.scss';
// import '@fortawesome/fontawesome-free/js/all';
// import '@fortawesome/fontawesome-free/css/all';

import jQuery from 'jquery';
import 'slick-carousel';
const $ = jQuery;

$(document).ready(function(){
    $('.card-wrap').slick({
        fade: false,
        autoplay: false,
        pauseOnHover: true,
        autoplaySpeed: 5400,
        speed: 300,
        touchThreshold: 8,
        infinite: true,
        variableWidth: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        
        responsive: [
            {
                breakpoint: 920,
                settings: {
                slidesToShow: 3
                }
            },
            {
                breakpoint: 680,
                settings: {
                slidesToShow: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                slidesToShow: 1
                }
            }
        ]
    });                    
});

// Responsive Navigation
const hamburgerMenu = document.querySelector('.l-header__hamburger > a');
const list  = document.querySelector('.l-header__list');

hamburgerMenu.addEventListener('click', () => {
    list.classList.toggle('show');
});



