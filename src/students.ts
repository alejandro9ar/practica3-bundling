import { getAvg } from './averageService';
import "./styles/mystyles.scss";
import "./content/logo.png";

const scores = [90, 75, 60, 99, 94, 30];
const averageScore = getAvg(scores);

document.addEventListener('DOMContentLoaded', () => {
    const appElement : HTMLElement = document.getElementById('app') as HTMLElement;

    appElement.innerHTML = `
            <p>Media: ${averageScore}</p>
    `;});