import './index.scss';
import { cambiarColor } from './cambiarColor';

const colores = Array.from(document.querySelectorAll('#colores div'));

colores.forEach(element => element.addEventListener('click', () => cambiarColor(element)));