//fonction
function demandeNbrTentative (){
    let entry=0;
    do{
        entry = Number(prompt("Combien de tentative vouler vous ? (entre 1 et 10) :"));
    }while(entry>=10 || entry<0)
    return entry;
}

function geneValRdm(){
    return Math.floor(Math.random() * (1000 - 1) + 1);
}

function demandeValeur (tour){
    let num ;
    num = Number(prompt(`Entrer la valeur du tour ${tour}: `))
    return num;
}

function testVal (val,objectif){
    if(val<objectif){
        console.log("ok")
        alert(`la valeur rechercher est superieur a ${val}`)
        return false
    }
    if(val>objectif){
        console.log("ok")
        alert(`la valeur rechercher est inferieur a ${val}`)
        return false
    }
    if(val == objectif){
        console.log("ok")
        return true;
    }
    
}

//initialisation
let nbrTentative =0,succes= false,objectif=0,compteur=1,valEntrer=0;


nbrTentative = demandeNbrTentative();
objectif = geneValRdm();
while (nbrTentative>0 && succes != true ){
    valEntrer = demandeValeur(compteur);
    succes = testVal(valEntrer,objectif);
    compteur++;
    nbrTentative--;
}

if(succes){
    alert(`Bravo vous avez trouvez la valeur ${objectif} en ${compteur-1} tours !!`)
}
else{
    alert(`vous n'avez malheuresement pas trouver la valeur ${objectif} ...`)
}