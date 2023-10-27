const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const seconds = document.querySelector('#seconds');
const msec = document.querySelector('#msec');

setInterval(() => {
const date = new Date()
hour.textContent = date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()
minute.textContent = date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()
seconds.textContent = date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds()
msec.textContent = date.getMilliseconds()
}, 100)