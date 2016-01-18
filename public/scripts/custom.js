$(document).ready(function () {
// Slider

    $('.slider').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 5,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }]
    });

// PopUp

    $('#button-carriers').click(function () {
        $('#popup').addClass('overlay');
    });

    $('#popup .close').click(function () {
        $('#popup').removeClass('overlay');
    });

// Link scroll animation

    var $root = $('html, body');
    var elements = '#top-menu li a, .next-block a, #fixed-menu li a, .all-button, .logo';

    $(elements).click(function () {
        var href = $(this).attr('href');

        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });

        return false;
    });
});

// Fix menu

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= window.innerHeight) {
        $('#fixed-menu').addClass("fix");
    } else {
        $('#fixed-menu').removeClass("fix");
    }
});