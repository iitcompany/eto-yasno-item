$(document).ready(function() {
    $("#gallerySlider").lightSlider({
        // autoWidth: true,
        pager: true,
        currentPagerPosition: 'middle',
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
    });
});