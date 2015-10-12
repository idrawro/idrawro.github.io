require('../css/style.css');
require('normalize.css');

require('./vendor/modernizr-custom.js');

(function ($) {
    $(document).ready(function () {
        $(document)
            .foundation();

        $('#homeSlider')
            .slick({
                arrows: true,
                accessibility: false
            });
    });
})(jQuery)