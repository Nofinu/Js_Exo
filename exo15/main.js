//initialisation
let etudiants = [ 
    { 
        prenom: "José", 
        nom: "Garcia", 
        matieres: { 
            francais: 16, 
            anglais: 7, 
            humour: 14 
        }  
    }, 
    { 
        prenom: "Antoine", 
        nom: "De Caunes", 
        matieres: { 
            francais: 15, 
            anglais: 6, 
            humour: 16, 
            informatique: 4, 
            sport: 10 
        } 
    } 
]; 

let message ="",compteur=1;

for(let i of etudiants){
    let somme=0, moyenne=0,nbNote=0;
    message = `\nnotre eleve n°${compteur} est ${i.prenom} ${i.nom}`;
    console.log(message);
    for(let j in i.matieres){
        message = `${j} : ${i.matieres[j]}\n`;
        console.log(message);
        somme +=i.matieres[j];
        nbNote ++;
    }
    moyenne =Math.round(somme/nbNote) ;
    message =`sa moyenne est de ${moyenne}`;
    console.log(message);
    compteur++;
}

