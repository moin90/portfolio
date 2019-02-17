import Typed from 'typed.js';
import AOS from 'aos';

$(document).ready(function () {

    $('a').smoothScroll({
        speed: 600
    });

    $("#html, #css, #javascript, #jquery, #react, #gulp, #github, #git, #sass").flip({
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
