//initialisation 
let age=0,anciennete=0,salaire=0,indemenite=0,message="";


//entrer des valeurs
age = Number(prompt("entrer votre age :"));
anciennete = Number(prompt("entrer votre ancienté en années :"));
salaire = Number(prompt("entrer votre dernier salaire en euros:"));

if(anciennete<=10){
    if(age>=45 && age<=49){
        indemenite = (salaire *0.5)*anciennete+(2*salaire);
    }
    else if(age>49){
        indemenite = (salaire *0.5)*anciennete+(5*salaire);
    }
    else{
        indemenite = (salaire *0.5)*anciennete;
    }
}
else{
    if(age>=45 && age<=49){
        indemenite = salaire*anciennete+(2*salaire);
    }
    else if(age>49){
        indemenite = salaire*anciennete+(5*salaire);
    }
    else{
        indemenite = salaire*anciennete;
    }
}

message=`votre indemenité est de ${indemenite} €`;

console.log(message);