 let bgfilter = document.querySelector('#banner');
let cunt2 = document.querySelector('.cunt2').addEventListener('click',run)
let cunt = document.getElementsByClassName('.cunt').addEventListener('click', run);
let col  = document.querySelector('.col').addEventListener('click', run)
let container = document.querySelector('.container');
function run() {
	container.classList.toggle('hidden');
	bgfilter.classList.toggle('bg-blur')
	
}
