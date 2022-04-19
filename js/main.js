// $(document).ready(function() {
// 	$('.menu-burger').click(function(event) {
// 		$('.menu-burger,.menu__list').toggleClass('active');
// 	})
// });

const burger = document.querySelector('.menu-burger');
if (burger) {
	const menuList = document.querySelector('.menu__list');
	burger.addEventListener("click" ,function (e) {
		burger.classList.toggle('active');
		menuList.classList.toggle('active');
	});
}


// const animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0) {
// 	window.addEventListener('scroll', animOnScroll);
// 	function animOnScroll() {
// 		for (let index = 0; index < animItems.length; index++) {
// 			const animItem = animItems[index];
// 			const animItemHeight = animItem.offsetHeight;
// 			const animItemsOffset = offset(animItem).top;
// 			const animStart = 4;

// 			 let animItemPoint = window.innerHeight - animItemHeight / animStart;
// 			 if (animItemHeight > window.innerHeight) {
// 			 	animItemPoint = window.innerHeight - window.innerHeight / animStart;
// 			 }

// 			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
// 				animItem.classList.add('_active');
// 			} else {
// 				animItem.classList.remove('_active');	
// 				}
// 			}
// 		}
// 	function offset(el) {
// 		const rect = el.getBoundingClientRect(),
// 			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 		return { top: rect.top + scrollTop, left: rect.left + scrollLeft}	
// 	}
// animOnScroll();
// }


document.addEventListener('DOMContentLoaded', () =>{
	const title = document.querySelector('.content__title');
	title.classList.add('_active');
});
;
const scrollItem = document.querySelectorAll('.anim');
const scrollAnimation = () => {
	let windowCenter = window.innerHeight + window.scrollY; 
	scrollItem.forEach(el => {
		let scrollOffset = el.offsetTop + el.offsetHeight / 2;

		if (windowCenter >= scrollOffset) {
			el.classList.add('animation-class');
		} else {
			el.classList.remove('animation-class');
		}
	});	
}; 

window.addEventListener('scroll', () => {
	scrollAnimation();
});	