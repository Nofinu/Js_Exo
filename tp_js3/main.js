//fonction
function geneValRdm(valmax){
    return Math.floor(Math.random() * (valmax - 1) + 1);
}
function afficherLettre (liste){
    return liste.join(' ');
}
function geneListeAffichage(mot){
    let tab ="";
    for(let i=0;i<mot.length;i++){
        tab += "*";
    }
    return tab;
}
function veriflettre (lettre,liste){
    let compteur =0,tabindex=[];
    for(let i=0;i<liste.length;i++){
        if(lettre == liste[i]){
            tabindex[compteur]=i;
            compteur++;
            lettreTrouver++;
        }
    }
    return tabindex
}
function remplaceLettre(tab,mot,lettre){
    mot = mot.split("");
    for (let i of tab){
        mot[i]= lettre;
    }
    mot = mot.join("");
    return mot
}
function affichage (){
    let entry = prompt(`Mot a trouver : ${motAffichage}\nNombre de tours restants : ${10-nbrTourRestant}\nLettre deja rentré : ${afficherLettre(listeLettre)}\n entrer une lettre : `).toLowerCase();
    listeindex = veriflettre(entry,motChoisi);
    motAffichage = remplaceLettre(listeindex,motAffichage,entry);
    listeLettre[nbrTourRestant]=entry;
    nbrTourRestant++;
}
//initialisation
let listeMot = ["bonjour","douze","chaise","souris","clavier"];
let lettreTrouver = 0,nbrTourRestant=0,motChoisi="",listeLettre=[],message="";

motChoisi = listeMot[geneValRdm(listeMot.length-1)];
console.log(motChoisi);
let motAffichage = geneListeAffichage(motChoisi);

while(lettreTrouver<motChoisi.length && nbrTourRestant<10){
    affichage();
}

if(lettreTrouver == motChoisi.length){
    message=`Bravo vous avez trouver le mot : ${motChoisi} en ${nbrTourRestant} tours !`;
    alert(message);
}
else{
    message=`vous n'avez pas reussis a trouver le mot : ${motChoisi} ...`;
    alert(message);
}