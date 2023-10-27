const buttons = document.querySelectorAll('button')
console.log(buttons)

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

buttons.forEach((button, id) => {
	button.addEventListener('click', () => {
		setRandomColor(button)
	})
})

function setRandomColor(button) {
	let ln = colors.length;
	let randomNum = Math.floor(Math.random() * ln)
	button.style.backgroundColor = colors[randomNum]
}