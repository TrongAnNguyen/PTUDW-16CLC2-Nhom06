$(document).ready(function() {
    // Stick cover img in page service detail to top of its section
$('div.container.service-detail div.img-cover').stick_in_parent();

// Stick Guest review to top of its section
$('div.row div.review-title').stick_in_parent();

$('section#see-dates div.container-calendar > div.col-lg-6 > div.calendar').stick_in_parent({parent  : 'section#see-dates div.header'});
});