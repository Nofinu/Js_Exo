//intialisation
let noteMax=0,noteMin=0,somme=0,moyenne=0,entry=0,nbNote=0,message="";

//entrer les valeurs 
entry = Number(prompt("entrer une note ou 123 pour terminer :"));
    noteMax=entry;
    noteMin=entry;

do {
    entry = Number(prompt("entrer une note ou 123 pour terminer :"));
    switch(true){
        case entry == 123:
            break;
        case entry>noteMax :
            noteMax = entry;
            somme += entry;
            nbNote ++;
            break;
        case entry<noteMin:
            noteMin = entry;
            somme += entry;
            nbNote ++;
            break;
        default:
            somme += entry;
            nbNote ++;
            break;
    }
}while(entry != 123)

moyenne = Math.round(somme/nbNote);

message = `la note la plus basse est ${noteMin}, la note la plus haute est ${noteMax}, la moyenne est de ${moyenne}`;
alert(message);
