(function($) {
    $(document).ready(function($) {

    // mobile menu

    let menuBtn = $('.menu-trigger');
    let mobMenu = $('.navbar');
    let body = $('body');

    function toggleMobileMenu(){
        menuBtn.toggleClass('_js-active');
        mobMenu.toggleClass('_js-open');
        body.toggleClass('_js-menu-open');
    }

    menuBtn.on('click', ()=>{
        toggleMobileMenu()
    });



    // review carousel
    if($('.review-slider').length){

        $('.review-slider').slick({
            infinite: false,
            arrows: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            dots: true,
            autoplay: true,
            autoplaySpeed: 6500,
            speed: 800,
        });
    }

    });
})(jQuery);