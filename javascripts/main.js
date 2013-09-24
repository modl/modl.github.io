require(
	{
		basePath: 'javascripts',
		paths: {
			'jquery': '//code.jquery.com/jquery.min',
			'bootstrap': 'bootstrap.min',
			'waypoints': 'waypoints',
			'retinajs': 'retina-1.1.0.min'
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

		var $navbar = $('#navbar'),
			$navImg = $('li.smallNavLogo', $navbar),
			$fixednav = $('#fixednav');

		//clone the hidden "fixed nav" from the original top-right nav
		//or else users lose scroll position as doc reflows 
		var cloneNav = function(){
			$clonedNavs = $('li.section',$navbar).clone();//.removeAttr('class');
			$('ul',$fixednav).append( $clonedNavs );
		};

		//reveal "fixed nav" as user scrolls down page
		var initStickyNav = function(){
			$('#lead').waypoint(function(direction) {
				$fixednav[ (direction == 'down')?'removeClass':'addClass' ]('hide');
		    });
		}

		//go!
		$(function(){
			cloneNav();
			initStickyNav();
		});

	}
);
