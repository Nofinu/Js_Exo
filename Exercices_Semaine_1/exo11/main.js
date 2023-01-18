//initialisation
let montantNet=0,nbAdulte=0,nbEnfant=0,impot=0,nbPart=0,montant=0,message="";

//entrer les valeurs
montantNet = Number(prompt("Entrer votre montant net imposable (en €):"));
nbAdulte = Number(prompt("Entrer le nombre d'adultes :"));
nbEnfant = Number(prompt("Entrer le nombre d'enfant :"));

if(nbEnfant<=2){
    nbPart = nbAdulte+(nbEnfant*0.5);
}
else{
    nbPart = nbAdulte+((nbEnfant*0.5*2)+(nbEnfant-2));
}

//nbPart = nbEnfant <=2 ?  nbAdulte+(nbEnfant*0.5) : nbAdulte+((nbEnfant*0.5*2)+(nbEnfant-2));

montant = montantNet/nbPart;

switch(true){
    case montant<=10777:
        impot=0;
        break;
    case montant<=27478:
        impot = (montant-10777)*0.11;
        break;
    case montant<=78570:
        impot =  1837; //ajout des impot de la tranche precedente
        impot += (montant-38255)*0.3; // calcul des impots de la tranche actuel
        break;
    case montant<=168994:
        impot = 15327+1837; 
        impot +=(montant-89346)*0.41;
        break;
    case montant>168994:
        impot =15327 + 1837 + 37073;
        impot = (montant-179769)*0.45;
        break;
}

impot = Math.round(impot*nbPart);

message =`Vos impots sur le revenue sont donc de ${impot} €.`;
alert(message);