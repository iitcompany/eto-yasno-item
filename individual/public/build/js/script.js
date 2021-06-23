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

        console.log(this)
        $.arcticmodal({
            content: modalWrapper,
            overlay: {
                css: {
                    backgroundColor: '#666666',
                    opacity: .1
                }
            }
        });
    })

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBpbml0IGdhbGxlcnktc2xpZGVyXHJcbiAgICAkKCcuZ2FsbGVyeS1zbGlkZXItZm9yJykuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgIGFzTmF2Rm9yOiAnLmdhbGxlcnktc2xpZGVyLW5hdicsXHJcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWdhbGxlcnkgYnV0dG9uLS1nYWxsZXJ5LS1wcmV2XCI+PC9idXR0b24+JyxcclxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tZ2FsbGVyeSBidXR0b24tLWdhbGxlcnktLW5leHRcIj48L2J1dHRvbj4nLFxyXG4gICAgfSk7XHJcbiAgICAkKCcuZ2FsbGVyeS1zbGlkZXItbmF2Jykuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBhc05hdkZvcjogJy5nYWxsZXJ5LXNsaWRlci1mb3InLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyBpbml0IGZlZWRiYWNrLXNsaWRlclxyXG4gICAgJCgnLmZlZWRiYWNrLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXNOYXZGb3I6ICcuZ2FsbGVyeS1zbGlkZXItbmF2JyxcclxuICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tZmVlZGJhY2sgYnV0dG9uLS1mZWVkYmFjay0tcHJldlwiPjwvYnV0dG9uPicsXHJcbiAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWZlZWRiYWNrIGJ1dHRvbi0tZmVlZGJhY2stLW5leHRcIj48L2J1dHRvbj4nLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuanMtaW5pdC1tZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IG1lbnVDb250ZW50ID0gJCgnLm1lbnUtd3JhcHBlcicpLmNsb25lKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgICAgJC5hcmN0aWNtb2RhbCh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IG1lbnVDb250ZW50LFxyXG4gICAgICAgICAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgICAgICAgICBjc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNjY2NjY2JyxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoJy5qcy1pbml0LWRvd25sb2FkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IG1vZGFsQ29udGVudCA9ICQoJy5tb2RhbC1jb250ZW50JykuY2xvbmUoKSxcclxuICAgICAgICAgICAgbW9kYWxXcmFwcGVyID0gJCgnPGRpdiBjbGFzcz1cIm1vZGFsLXdyYXBwZXJcIj48L2Rpdj4nKSxcclxuICAgICAgICAgICAgbW9kYWxDbG9zZSA9ICQoJzxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnV0dG9uLWNsb3NlIGJ1dHRvbi1jbG9zZSBhcmN0aWNtb2RhbC1jbG9zZVwiPjxzcGFuIGNsYXNzPVwiYnV0dG9uLWxpbmVcIj48L3NwYW4+PC9idXR0b24+JyksXHJcbiAgICAgICAgICAgIG1vZGFsQnV0dG9uID0gJCgnPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idXR0b24gXCI+PC9idXR0b24+JykudGV4dCh0aGlzLmRhdGFzZXQuYnV0dG9uKSxcclxuICAgICAgICAgICAgbW9kYWxUaXRsZSA9ICQoJzxoMiBjbGFzcz1cInRpdGxlXCI+PC9oMj4nKS50ZXh0KHRoaXMuZGF0YXNldC50aXRsZSk7XHJcblxyXG4gICAgICAgICQobW9kYWxXcmFwcGVyKS5hcHBlbmQobW9kYWxDbG9zZSk7XHJcbiAgICAgICAgJChtb2RhbFdyYXBwZXIpLmFwcGVuZChtb2RhbFRpdGxlKTtcclxuICAgICAgICAkKG1vZGFsV3JhcHBlcikuYXBwZW5kKG1vZGFsQ29udGVudCk7XHJcbiAgICAgICAgJChtb2RhbFdyYXBwZXIpLmFwcGVuZChtb2RhbEJ1dHRvbik7XHJcbiAgICAgICAgJChtb2RhbFdyYXBwZXIpLmFwcGVuZChtb2RhbEJ1dHRvbik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgICAgJC5hcmN0aWNtb2RhbCh7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IG1vZGFsV3JhcHBlcixcclxuICAgICAgICAgICAgb3ZlcmxheToge1xyXG4gICAgICAgICAgICAgICAgY3NzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzY2NjY2NicsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuXHJcbn0pOyJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
