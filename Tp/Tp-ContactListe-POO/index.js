import Ihm from "./Classes/Ihm.js";

const form = document.getElementById('formContainer');
const inputs = document.querySelectorAll('input');
const table = document.getElementById('tableBody');

let ihm = new Ihm(form,inputs,table);
ihm.start();