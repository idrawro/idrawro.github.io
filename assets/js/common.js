jQuery(document).ready(function () {
    var scrollBar = jQuery('paper-scroll-header-panel')[0];
    var logo = jQuery('.logoIronImage');

    scrollBar.addEventListener('content-scroll', function () {
        if (scrollBar.headerState === Polymer.PaperScrollHeaderPanel.HEADER_STATE_EXPANDED) {
            logo.show();
        } else {
            logo.hide();
        }
    });

    var buttonSendContactMessage = jQuery('#buttonSendContactMessage');
    var form = jQuery('#contactForm');

    buttonSendContactMessage.click(function () {
        console.log(jQuery("#messageBody").val());
        //jQuery.post("http://contactapi-idraw.rhcloud.com/contactApi", form.serialize());
        jQuery.post("http://localhost:8080/contactApi", form.serialize());
    });
})