'use strict';

$(document).ready(function() {
	
	var sticky = new Waypoint.Sticky({
		element: $('.side-sticky').addClass("side-bar-stuck")[0],
		offset: '7%',
	});

$('.sticky-wrapper').css( "width", "20vw" ).css( "height", "0px" );

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