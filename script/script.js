// nav

let close_open_navigation = document.querySelector('.close_Nav_Btn');

let nav = document.querySelector('.navigation_wrap');
let mainHeaderInfo = document.querySelector('.main_header_items');
let line3 = document.querySelector('.line3');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');

console.log(line2);
console.log(mainHeaderInfo);
close_open_navigation.addEventListener('click', () => {
	nav.classList.contains('hide_nav') ? nav.classList.remove('hide_nav') : nav.classList.add('hide_nav');
	mainHeaderInfo.classList.contains('hide_nav')
		? mainHeaderInfo.classList.remove('hide_nav')
		: mainHeaderInfo.classList.add('hide_nav');

	line3.classList.contains('none') ? returnrotate() : rotate();
});

function rotate() {
	line3.classList.add('none');
	line1.classList.add('rotate');
	line2.classList.add('rotate1');
}
function returnrotate() {
	line3.classList.remove('none');
	line1.classList.remove('rotate');
	line2.classList.remove('rotate1');
}

//
let branches_name = document.querySelector('.branch');
branches_name[0];
let branch = document.querySelectorAll('.line');
let desition = document.querySelectorAll('.branch_desition');
let item = document.querySelectorAll('.branch_name');
console.log(branches_name);
document.querySelector('.line').style.width = '25px';
item[0].style.margin = '0px 0px 0 0px';
item[0].style.fontSize = '21px';
branches_name.addEventListener('click', (e) => {
	console.log();
	if (e.target.classList.contains('branch_name')) {
		for (let i = 0; i < branch.length; i++) {
			branch[i].style.width = '0px';
			item[i].style.margin = '0px 0px 0px 0px';
			item[i].style.fontSize = '18px';
		}
		e.target.querySelector('.line').style.width = '25px';
		console.log(e.target);
		e.target.style.margin = '0px 0px 0 0px';
		e.target.style.fontSize = '21px';
		let n = e.target.dataset.num;
		for (let i = 0; i < desition.length; i++) {
			desition[i].classList.add('none');
		}
		desition[n].classList.remove('none');
	}
});
