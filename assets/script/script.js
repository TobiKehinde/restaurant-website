var $grid = $('.menu-container').isotope({
    // options
});

$('.menu-filters-grp').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});