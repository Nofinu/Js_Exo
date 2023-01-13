//fonction
function demandeNbrTentative (){
    let entry=0;
    do{
        entry = Number(prompt("Combien de tentative vouler vous ? (entre 1 et 10) :"));
    }while(entry>=10 || entry<0)
    return entry;
}

function geneValRdm(valmax){
    return Math.floor(Math.random() * (valmax - 1) + 1);
}

function demandeValeur (tour){
    let num ;
    num = Number(prompt(`Entrer la valeur du tour ${tour}: `))
    return num;
}

function testVal (val,objectif,compt){
    if(val<objectif){
        console.log("ok")
        alert(`la valeur rechercher est superieur a ${val}`)
        tabChev[compt-1] = "<";
        return false
    }
    if(val>objectif){
        console.log("ok")
        alert(`la valeur rechercher est inferieur a ${val}`)
        tabChev[compt-1] = ">";
        return false
    }
    if(val == objectif){
        console.log("ok")
        tabChev[compt-1] = "=";
        return true;
    }
    
}

function affichage(tab1,tab2){
    let message = "";
    for(let i = 0; i<tab1.length-1 ; i++){
        message += `${tab1[i]} ${tab2[i]} ${objectif}\n`;
    }
    return message;
}

//initialisation
let nbrTentative =0,succes= false,objectif=0,compteur=1,valEntrer=0,tabVal=[],tabChev=[];


nbrTentative = demandeNbrTentative();
objectif = geneValRdm(Number(prompt("entrer la valeur max a deviner")));
while (nbrTentative>0 && succes != true ){
    valEntrer = demandeValeur(compteur);
    succes = testVal(valEntrer,objectif,compteur);
    tabVal[compteur-1] = valEntrer;
    compteur++;
    nbrTentative--;
}

if(succes){
    alert(`Bravo vous avez trouvez la valeur ${objectif} en ${compteur-1} tours !!\n ${affichage(tabVal,tabChev)}`)
}
else{
    alert(`vous n'avez malheuresement pas trouver la valeur ${objectif} ...\n ${affichage(tabVal,tabChev)}`)
}