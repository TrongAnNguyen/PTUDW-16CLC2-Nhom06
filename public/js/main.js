$(document).ready(function() {
    // Stick cover img in page service detail to top of its section
    $('div.container.service-detail div.img-cover').stick_in_parent();

    // Stick Guest review to top of its section
    $('div.row div.review-title').stick_in_parent();
});
var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

// Hide navbar when modals trigger
$('.portfolio-modal').on('show.bs.modal', function(e) {
  $('.navbar').addClass('d-none');
});
$('.portfolio-modal').on('hidden.bs.modal', function(e) {
  $('.navbar').removeClass('d-none');
});

