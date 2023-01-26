import {Car} from "./Class/class.js";

const voiture1 = new Car("Bmw","Serie 1",80);
const voiture2 = new Car("Mercedes","GLB",100);
const liste = document.querySelector('ul');

liste.innerHTML += voiture1.accelerer();
liste.innerHTML += voiture2.accelerer();
liste.innerHTML += voiture1.accelerer();
liste.innerHTML += voiture2.accelerer();
liste.innerHTML += voiture1.accelerer();
liste.innerHTML += voiture2.tourner();
liste.innerHTML += voiture2.tourner();
