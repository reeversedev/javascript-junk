$(function () {
    // Smooth Scroll
    $('a[href*=#]').bind('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
});

$('.i-accordion').on('show.bs.collapse', function (n) {
    $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-chevron-down fa-chevron-up');
});
$('.i-accordion').on('hide.bs.collapse', function (n) {
    $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-chevron-up fa-chevron-down');
});

/* P */
$('.accordion-2a, .accordion-2b, .accordion-3').on('show.bs.collapse', function (n) {
    $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-minus fa-plus');
});
$('.accordion-2a, .accordion-2b, .accordion-3').on('hide.bs.collapse', function (n) {
    $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-plus fa-minus');
});