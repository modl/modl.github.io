require(
	{
		basePath: 'javascripts',
		paths: {
			'jquery': '//code.jquery.com/jquery.min',
			'bootstrap': 'bootstrap.min',
			'waypoints': 'waypoints'
		},
		shim: {
			'bootstrap': {
				deps: ['jquery'],
				exports: 'jquery'
			},
			'waypoints': ['jquery']
		}
	},
	[
		'jquery',
		'bootstrap',
		'waypoints'
	], 
	function($) {

		$(function(){

			//init waypoint
			var $navImg = $('li.nav-img'),
				$navbar = $('#navbar');

			/*
			$('#lead').waypoint(function(direction) {
			    if (direction == "down") {
			    	$navImg.removeClass("hide");
			    	$navbar.addClass("small-nav");
			    } else {
			    	$navImg.addClass("hide");
			    	$navbar.removeClass("small-nav");
			    }
		    });*/


		});

	}
);
