// init Isotope
var $grid = $('.menu-container').isotope({
    // options
});
// filter items on button click
$('.menu-filters-grp').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});