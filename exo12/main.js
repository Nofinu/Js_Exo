//initialisation
let nbHabitan=96809,annee=0;tauxCoissance=0.89;

//calcul

while(nbHabitan<120000){
    nbHabitan = nbHabitan*(1+tauxCoissance/100);
    annee++;
}

console.log(`il faut ${annee} années pour qu'il y ai ${Math.round(nbHabitan)} habitans a Tourcoing.`)