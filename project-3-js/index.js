const body = document.querySelector('body')
const button = document.querySelector('button')
const colors = [
	'#d4e365',
	'#b8c2f6',
	'#723d06',
	'#22be8b',
	'#b34cfe',
	'#c1e052',
	'#fdad9c',
	'#2e9ee7',
	'#7129e9',
	'#1e0150',
	'#f1897f',
	'#58b7f5',
	'pink',
	'green',
	'gray',
	'red'
]

button.addEventListener('click', () => {
	const ln = colors.length;

	const num1 = Math.floor(Math.random() * ln)
	const num2 = Math.floor(Math.random() * ln)
	body.style.background = `linear-gradient(90deg,${colors[num1]},${colors[num2]})`
	button.style.background = `linear-gradient(90deg,${colors[num1]},${colors[num2]})`
	console.log(button)
}) 

