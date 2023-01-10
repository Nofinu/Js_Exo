
//initialisation des variable
let coteCarre,perimetreCarre,airCarre,affichage,affichageCarre;
let hauteurRectangle,largeurRectangle,perimetreRectangle,airRectangle,affichageRectangle

//calcul perimetre/air carre

coteCarre = Number(prompt("entrer la valeur d'un coté du carré :"));
perimetreCarre = coteCarre * 4;
airCarre = Math.pow(coteCarre,2);

affichageCarre = `le perimetre d'un carre de coté = ${coteCarre} vaut : ${perimetreCarre} et son air vaut : ${airCarre}`;
console.log(affichageCarre);

//calcul perimetre : air rectangle
hauteurRectangle = Number(prompt("entrer la hauteur du rectangle :"));
largeurRectangle = Number(prompt("entrer la de la largeur du rectangle :"));

perimetreRectangle = (hauteurRectangle*2)+(largeurRectangle*2);
airRectangle = hauteurRectangle*largeurRectangle;

affichageRectangle = `le perimetre d'un rectangle de hauteur = ${hauteurRectangle} et de largeur = ${largeurRectangle} vaut : ${perimetreRectangle} et sont air vaut : ${airRectangle}`;
console.log(affichageRectangle);


affichage = affichageCarre +" /// " + affichageRectangle;
alert(affichage)

