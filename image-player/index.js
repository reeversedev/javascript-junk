$(document).ready(function () {
    $("#slideshow > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next(3000)
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 3000);
});
