//intialisation
let noteMax=0,noteMin=0,somme=0,moyenne=0,entry=0,nbNote=0,message="";

//entrer les valeurs 

do {
    entry = Number(prompt("entrer une note ou 123 pour terminer :"));
    if(entry>noteMax && entry!=123){
        noteMax = entry;
    }
    if (entry<noteMin){
        noteMin = entry;
    }
    somme += entry;
    nbNote ++;
}while(entry != 123)

moyenne = Math.round(somme/nbNote);

message = `la note la plus basse est ${noteMin}, la note la plus haute est ${noteMax}, la moyenne est de ${moyenne}`;
alert(message);
