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
})