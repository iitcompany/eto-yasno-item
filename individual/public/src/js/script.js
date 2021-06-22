$(document).ready(function() {
    // init gallery-slider
    $('.gallery-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.gallery-slider-nav',
        prevArrow: '<button class="button button--gallery button--gallery--prev"></button>',
        nextArrow: '<button class="button button--gallery button--gallery--next"></button>',
    });
    $('.gallery-slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.gallery-slider-for',
        arrows: false,
        focusOnSelect: true
    });
    // init feedback-slider
    $('.feedback-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.gallery-slider-nav',
        prevArrow: '<button class="button button--feedback button--feedback--prev"></button>',
        nextArrow: '<button class="button button--feedback button--feedback--next"></button>',
        adaptiveHeight: true
    });

    $('.js-init-menu').on('click', function() {

        $.arcticmodal({
            content: '',
            overlay: {
                css: {
                    backgroundColor: '#666666',
                    opacity: .1
                }
            }
        });
    })

});