import Ihm from "./Classes/Ihm.js";

const formAddToDo = document.querySelector('#addToDo');
const btnResearch = document.querySelector('#btnResearch');
const tableDisplay = document.querySelector('#tableDisplay');


const ihm = new Ihm(formAddToDo,btnResearch,tableDisplay);
ihm.start()

