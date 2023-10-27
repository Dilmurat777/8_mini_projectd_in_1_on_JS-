const body = document.querySelector('body')
const button = document.querySelector('button')

button.addEventListener('click', function() {
	const hexCode1 = '#' + Math.floor(Math.random() * 16777215).toString(16)
	const hexCode2 = '#' + Math.floor(Math.random() * 16777215).toString(16)
	body.style.backgroundColor = hexCode1
	button.style.backgroundColor = hexCode2
	console.log(hexCode1)
})

