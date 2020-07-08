const fondo = document.querySelector('#imagen-zapato');
const img = document.querySelector('#imagen-zapato img');

export const cambiarColor = color => {
	let arrayClases = fondo.getAttribute("class").split(' ');

	fondo.classList.remove(`${arrayClases[arrayClases.length - 1]}`); 
	fondo.classList.add(`${color.getAttribute('class')}`);

	img.src = `img/nike-${color.getAttribute('class')}.png`; 
}