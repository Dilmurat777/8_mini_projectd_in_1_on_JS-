const block = document.querySelector('.main-block');
const positionX = document.querySelector('.positionX');

block.addEventListener('mousemove', (e) => {
	positionX.textContent = e.clientX;
	block.style.backgroundColor = `hsl(${e.clientX} 80%, 50%)`
})