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

	let header = document.querySelector('.header');
	let headerHeight = header.getBoundingClientRect().height

	window.addEventListener('scroll', () => {
		if (window.scrollY > headerHeight && !header.classList.contains('back')) {
			header.classList.add('back')
		} else if (window.scrollY == 0 && header.classList.contains('back')) {
			header.classList.remove('back')
			// header.style.removeProperty('transition')
		}
	})

	// собираем все якоря; устанавливаем время анимации и количество кадров
	const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
	animationTime = 300,
	framesCount = 20;

	anchors.forEach(function(item) {
	// каждому якорю присваиваем обработчик события
	item.addEventListener('click', function(e) {
	// убираем стандартное поведение
	e.preventDefault();

	// для каждого якоря берем соответствующий ему элемент и определяем его координату Y
	let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

	// запускаем интервал, в котором
	let scroller = setInterval(function() {
	// считаем на сколько скроллить за 1 такт
	let scrollBy = coordY / framesCount;

	// если к-во пикселей для скролла за 1 такт больше расстояния до элемента
	// и дно страницы не достигнуто
	if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
	// то скроллим на к-во пикселей, которое соответствует одному такту
	window.scrollBy(0, scrollBy);
	} else {
	// иначе добираемся до элемента и выходим из интервала
	window.scrollTo(0, coordY);
	clearInterval(scroller);
	}
	// время интервала равняется частному от времени анимации и к-ва кадров
	}, animationTime / framesCount);
	});
	});

	//mobile menu
	let mobileButton = document.querySelector('.bt-menu')
	let mobileMenu = document.querySelector('.mobile_menu')

	mobileButton.addEventListener('click', () => {
		mobileMenu.classList.toggle('active')
		mobileButton.classList.toggle('active')
	})
})
