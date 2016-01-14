$(function () {
    // Handles anchor links
    $('a[href^="#"]').click(function(e) {
        var id = $(this).attr("href");

        scrollToLocation(id);
        e.preventDefault();
    });

    // Handles Ecwid clicks
    $(window).on('hashchange', function() {
        scrollToLocation('#services');
    });

    // Handles scrolling to a specified Id.
    function scrollToLocation (id) {
        // Calculate offset for responsive views
        var offset = $('.navigation').outerHeight() -1;
        var target = $(id).offset() ? ($(id).offset().top - offset) : 0;

        $('html, body').animate({scrollTop:target}, 1000);
    }
});