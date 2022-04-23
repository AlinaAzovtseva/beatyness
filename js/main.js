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

document.addEventListener('DOMContentLoaded', () =>{
	const title = document.querySelector('.content__title');
	title.classList.add('_active');
});

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