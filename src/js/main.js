import '../scss/style.scss';

$import jQuery from 'jquery';
$import 'slick-carousel';
const $ = jQuery;

$(document).ready(function(){
    $('.card-wrap').slick({
        fade: false,
        autoplay: false,
        pauseOnHover: true,
        autoplaySpeed: 5400,
        speed: 300,
        touchThreshold: 8,
        infinite: false,
        variableWidth: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        dots: false
    });
});



