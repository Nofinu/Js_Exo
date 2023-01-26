import {Car} from "./Class/class.js";

const voiture1 = new Car("Bmw","Serie 1",80);
const voiture2 = new Car("Mercedes","GLB",100);
const liste = document.querySelector('ul');

function affichage (){
    liste.innerHTML +=`<li>la ${voiture1.marque}, ${voiture1.modele} roule a <b>${voiture1.vitesse} km/h.</b></li>`
    liste.innerHTML +=`<li>la ${voiture2.marque}, ${voiture2.modele} roule a <b>${voiture2.vitesse} km/h.</b></li>`
}


voiture1.accelerer();
voiture2.accelerer();
affichage();
voiture1.accelerer();
voiture2.accelerer();
affichage();
voiture1.accelerer();
voiture2.tourner();
affichage();
voiture2.tourner();
affichage();