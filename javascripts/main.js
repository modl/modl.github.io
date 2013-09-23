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
			$('#lead').waypoint(function(direction) {
			    if (direction == "down") {
			    	$("#navbar").addClass("small-nav");
			    	$("li.nav-img").removeClass("hide");
			    } else {
			    	$("#navbar").removeClass("small-nav");
			    	$("li.nav-img").addClass("hide");
			    }
		    });

		    
		});

	}
);
