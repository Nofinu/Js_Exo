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

let message ="",compteur=0;

for(let i in etudiants){
    let somme=0, moyenne=0,nbNote=0;
    message = `\nnotre eleve n°${compteur} est`;
    message += `${etudiants[i].prenom} ${etudiants[i].nom}`;
    console.log(message);
    for(let j in etudiants[i].matieres){
        message ="";
        message = `${j} : ${etudiants[i].matieres[j]}\n`;
        console.log(message);
        somme +=etudiants[i].matieres[j];
        nbNote ++;
    }
    moyenne =Math.round(somme/nbNote) ;
    compteur++;
    message =`sa moyenne est de ${moyenne}`;
    console.log(message);
}

