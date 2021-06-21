$(document).ready(function() {
    $("#gallerySlider").lightSlider({
        item: 1,
        useCSS: false,
        loop: true,
        gallery: true,
        galleryMargin: 15,
        slideMargin: 0,
        thumbItem: 6,
        thumbMargin: 12,
        prevHtml: '<button class="button button--gallery button--gallery--prev"></button>',
        nextHtml: '<button class="button button--gallery button--gallery--next"></button>',
        pager: false
    });

    $("#feedbackSlider").lightSlider({
        adaptiveHeight: true,
        item: 1,
        useCSS: false,
        loop: true,
        slideMargin: 0,
        prevHtml: '<button class="button button--feedback button--feedback--prev"></button>',
        nextHtml: '<button class="button button--feedback button--feedback--next"></button>',
        pager: false
    });
});