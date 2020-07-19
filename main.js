$(document).ready(function () {

    $('.submit').on('click', function() {
        window.open("mailto:wu.tszwai@outlook.com"
         + "?subject=" + escape(document.getElementById('email').value) + "-" + escape(document.getElementById('name').value)
         + "&body=" + escape(document.getElementById('subject').value))
        ;
    });

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
