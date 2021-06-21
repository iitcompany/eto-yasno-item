$(document).ready(function() {
    // $("#gallerySlider").lightSlider({
    //     item: 1,
    //     useCSS: false,
    //     loop: true,
    //     gallery: true,
    //     galleryMargin: 15,
    //     slideMargin: 0,
    //     thumbItem: 6,
    //     thumbMargin: 12,
    //     currentPagerPosition: 'middle',
    //     prevHtml: '<button class="button button--gallery button--gallery--prev"></button>',
    //     nextHtml: '<button class="button button--gallery button--gallery--next"></button>',
    //     pager: true
    // });
    //
    // $("#feedbackSlider").lightSlider({
    //     adaptiveHeight: true,
    //     item: 1,
    //     useCSS: false,
    //     loop: true,
    //     slideMargin: 0,
    //     prevHtml: '<button class="button button--feedback button--feedback--prev"></button>',
    //     nextHtml: '<button class="button button--feedback button--feedback--next"></button>',
    //     pager: false
    // });
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
    $('.feedback-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.gallery-slider-nav',
        prevArrow: '<button class="button button--feedback button--feedback--prev"></button>',
        nextArrow: '<button class="button button--feedback button--feedback--next"></button>',
    });
});