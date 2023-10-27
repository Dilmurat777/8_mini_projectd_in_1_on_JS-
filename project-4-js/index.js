const signs = document.querySelectorAll('.sign');

signs.forEach((item) => {
	item.addEventListener('click', (e) => {
		calc(e.target.textContent)
	})
})

function calc(e) {
	let result;
	
	num1 = Number(document.querySelector('.num1').value)
	num2 = Number(document.querySelector('.num2').value)
	switch(e) {
		case '+':
			result = num1 + num2;
			break;
			case '-':
				result = num1 - num2;
				break;
			case 'x':
				result = num1 * num2;
				break;
			case ':':
				result = num1 / num2;
				break;
			}
  document.querySelector('.result').innerHTML = result
}