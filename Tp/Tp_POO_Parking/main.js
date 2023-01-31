import Ihm from "./Classes/Ihm.js"

const divDisplay = document.querySelector('#display');
const btns = document.querySelectorAll('button');
const input = document.querySelector('#entry')

const ihm = new Ihm(btns[0],btns[1],divDisplay,input);
ihm.start();




