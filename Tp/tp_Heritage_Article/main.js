import Interface from "./classes/Ihm.js";


const choix = document.getElementsByName('choix');
const formulaire = document.querySelector('#formulaire');
const tableService = document.querySelector('#tableService');
const tableProduit = document.querySelector('#tableProduit');

const Ihm = new Interface(tableProduit,tableService,formulaire,choix);
Ihm.start();


