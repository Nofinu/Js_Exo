// initialisation des variable
let tva,prix,valeurTva,prixTtc,affichage;

//entrer des valeur

prix = Number(prompt("quel est le prix hors taxe de votre article :"));
tva = Number(prompt("quel est le % tva appliqué (valeur entre 0 et 100):"));

//calcul

valeurTva = prix * (tva/100);
prixTtc = prix + valeurTva;

//affichage
affichage = `pour un article de ${prix}€ et une TVA de ${tva}% on a donc une valeur de TVA de ${valeurTva} et donc un article en TTC a ${prixTtc}€`;
alert(affichage);