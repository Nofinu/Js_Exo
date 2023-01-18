//intialisation des variables
let coteA,coteB,hypotenuse,affichage;

//entrer des valeurs
coteA = Number(prompt("entrer la valeur du cote AB :"));
coteB = Number(prompt("entrer la valeur du cote AC :"));

//calcul de l'hypotenuse
hypotenuse = Math.pow(coteA,2)+Math.pow(coteB,2);
hypotenuse = Math.sqrt(hypotenuse).toFixed(2);

affichage = `l'hypotenuse de notre triangle de coté AB=${coteA} et de coté AC=${coteB} vaut : ${hypotenuse}`

alert(affichage)