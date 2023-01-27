import Moto from "./classes/Moto.js";
import Voiture from "./classes/Voiture.js";


let voiture = new Voiture("Renault","Kangoo",240000,2003,"Climatisée");
let moto = new Moto("BMW","R1150R Rockster",65000,2005);
const result = document.querySelector('#result');

result.innerHTML = "<h2>Travaux pratique POO</h2><hr>"

result.innerHTML += `<p><b>${voiture}</b> : ${voiture.display()}</p>`
result.innerHTML += `<p><b>${moto}</b> : ${moto.display()}</p>`