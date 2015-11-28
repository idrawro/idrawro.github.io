(function ($) {
    $(function () {

        $('.button-collapse')
            .sideNav();

        $(window).scroll(function () {
            if ($(window).scrollTop() > 50) {
                $('nav').removeClass('tall');
                $('.brand-logo').hide();
            } else {
                $('nav').addClass('tall');
                setTimeout(function () {
                    if ($('nav').hasClass('tall')) {
                        $('.brand-logo').show();
                    }
                }, 200);
            }
        });

    });
})(jQuery);