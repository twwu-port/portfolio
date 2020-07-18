$(document).ready(function () {
    $('.burger').on('click', function() {
       $('.nav-links').toggleClass('nav-active');
       $('.bar').toggleClass('open');
    });


    $('.nav-links').on('click', function() {
       $('.nav-links').removeClass('nav-active');
       $('.bar').removeClass('open');
    });


    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1000);
    });

    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});
