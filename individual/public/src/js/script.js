$(document).ready(function() {
    // init gallery-slider
    $('.gallery-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
        asNavFor: '.gallery-slider-nav',
        prevArrow: '<button class="button button--gallery button--gallery--prev"></button>',
        nextArrow: '<button class="button button--gallery button--gallery--next"></button>',
    });
    $('.gallery-slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.gallery-slider-for',
        arrows: false,
        focusOnSelect: true,
        centerMode: true
    });
    // init feedback-slider
    $('.feedback-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="button button--feedback button--feedback--prev"></button>',
        nextArrow: '<button class="button button--feedback button--feedback--next"></button>',
        adaptiveHeight: true
    });

    $('.js-init-menu').on('click', function() {
        let menuContent = $('.menu-wrapper').clone();

        console.log(this)
        $.arcticmodal({
            content: menuContent,
            overlay: {
                css: {
                    backgroundColor: '#666666',
                    opacity: .1
                }
            }
        });
    })

    $('.js-init-download').on('click', function() {
        let modalContent = $('.modal-content').clone(),
            modalWrapper = $('<div class="modal-wrapper"></div>'),
            modalClose = $('<button class="modal__button-close button-close arcticmodal-close"><span class="button-line"></span></button>'),
            modalButton = $('<button class="modal__button "></button>').text(this.dataset.button),
            modalTitle = $('<h2 class="title"></h2>').text(this.dataset.title);

        $(modalWrapper).append(modalClose);
        $(modalWrapper).append(modalTitle);
        $(modalWrapper).append(modalContent);
        $(modalWrapper).append(modalButton);
        $(modalWrapper).append(modalButton);

        $.arcticmodal({
            content: modalWrapper,
            overlay: {
                css: {
                    backgroundColor: '#666666',
                    opacity: .1
                }
            }
        });
    });

    $('.nav-sub').on('click','.nav__item', function (e) {
        e.preventDefault();

        const id  = $(this).attr('href'),
            top = $(id).offset().top,
            navSubItem = $('.nav-sub').find('.nav__item');

        // $(navSubItem).removeClass('nav__item--active');
        // $(this).addClass('nav__item--active');
        $('body,html').animate({scrollTop: top}, 1500);//анимируем переход на расстояние - top за 1500 мс
    });


});