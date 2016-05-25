'use strict';

$(document).ready(function() {

	var sticky = new Waypoint.Sticky({
		element: $('.basic-sticky')[0]
	});

$('.side-cell').hover(function() {
    $('.side-cell-sub', this).addClass('hover');
	},
  function() {
    $('.side-cell-sub', this).removeClass('hover');
});

});