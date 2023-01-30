import Ihm from "./classes_Data/Ihm.js";

const input = document.querySelector('input');
const displayContainer = document.querySelector('#displayContainer')

const ihm = new Ihm(input,displayContainer);
ihm.start();


