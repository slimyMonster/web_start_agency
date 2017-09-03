'use strict'

$(function() {

	$('.portfolio-item').hover(

		function() {

			$(this).find('.portfolio-front').toggleClass('hidden');
			$(this).find('.portfolio-reverse').toggleClass('hidden');

		}, function() {

			$(this).find('.portfolio-front').toggleClass('hidden');
			$(this).find('.portfolio-reverse').toggleClass('hidden');

		}
	);

});