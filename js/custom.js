// Google maps

$(function() {
	var settingsItemsMap = {
		zoom: 13,
		center: new google.maps.LatLng(37.782163,-122.400591),
		panControl: false,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
		},
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		overviewMapControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById('map_canvas'), settingsItemsMap );

	var myMarker = new google.maps.Marker({
		position: new google.maps.LatLng(37.782163,-122.400591),
		draggable: false
	});

	map.setCenter(myMarker.position);
	myMarker.setMap(map);
});

// Smooth scroll to defined place on site

$(function() {
	$('ul.nav a, .row a').bind('click',function(event){
	var $anchor = $(this);
	$('[data-spy="scroll"]').each(function () {
	var $spy = $(this).scrollspy('refresh')
	});
	$('html, body').stop().animate({
	scrollTop: $($anchor.attr('href')).offset().top
	}, 600);
	event.preventDefault();
	});
});

// Background stretch to fit screen size

$(function() {
$.backstretch("img/bg.jpg");
});