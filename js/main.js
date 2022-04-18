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