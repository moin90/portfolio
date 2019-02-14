import Typed from 'typed.js';
import AOS from 'aos';

$(document).ready(function () {

    $('a').smoothScroll({
        speed: 800
    });

    $("#card1, #card2, #card3, #card4, #card5, #card6, #card7, #card8, #card9").flip({
        trigger: 'hover',
    });

    $('.hamburger').on('click', function () {
        $('.menu').addClass('show');
    });

    $('.exit-responsive').on('click', function () {
        $('.menu').removeClass('show');
    });
});

var typed = new Typed('.typed', {
    strings: ["Front-end developer.", "Toronto sports fanatic.", "Travel junkie.", "Passionate learner."],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
    loopCount: Infinity,
    showCursor: false
});

AOS.init();
