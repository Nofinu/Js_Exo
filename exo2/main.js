let nbA=0,nbB=0,somme=0,concatenation;
nbA = prompt("entrer la 1er valeur :","0");
nbB = prompt("entrer la 2er valeur :","0");
let num1 = parseInt(nbA);
let num2 = parseInt(nbB);

somme = num1+num2;
concatenation = nbA+ " et " + nbB;
console.log(`l'addition de ${concatenation} vaut : ${somme}`);
