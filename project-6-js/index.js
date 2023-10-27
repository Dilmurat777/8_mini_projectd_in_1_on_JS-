const pink = document.querySelector('.pink');
const gray = document.querySelector('.gray');
const white = document.querySelector('.white');
const body = document.querySelector('body');

gray.querySelector('input').checked = true

pink.addEventListener('click', () => {
	setTheme()
})
gray.addEventListener('click', () => {
	setTheme()
})
white.addEventListener('click', () => {
	setTheme()
})

function setTheme() {
	if(pink.querySelector('input').checked) {
		body.style.background = 'pink';
	} else if(gray.querySelector('input').checked) {
		body.style.background = 'gray';
	} else if(white.querySelector('input').checked) {
		body.style.background = 'white';
	}
}