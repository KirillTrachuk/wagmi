import $ from 'jquery'
import 'slick-carousel'
window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
	
	// Custom JS

	$('.olympus-main-tabs').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: false,
	});

})
