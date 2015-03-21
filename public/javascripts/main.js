$(document).ready(function() {
    

    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        css3: true,
        scrollingSpeed: 400,
        controlArrows: true
    });

    $('#book-long-btn').on('click', function(event) {
        event.preventDefault();

        $('.book-long').slideToggle();
    });

    $('#reserve-btn').on('click', function(event) {
    	event.preventDefault();

    	$(this).fadeOut();
        $('#bibno').focus();
    });

    $('#bibno').on('keyup', function(event) {
        event.preventDefault();

        if (event.keyCode === 13) {
            $(this).fadeOut();
        }
    });


});