//initialisation 
let age=0,anciente=0,salaire=0,indemenite=0,message="";


//entrer des valeurs
age = Number(prompt("entrer votre age :"))
anciente = Number(prompt("entrer votre ancienté en années :"))
salaire = Number(prompt("entrer votre dernier salaire en euros:"))

if(anciente<=10){
    if(age>=45 & age<=49){
        indemenite = (salaire *2.5)*anciente
    }
    else if(age>49){
        indemenite = (salaire *5.5)*anciente
    }
    else{
        indemenite = (salaire *0.5)*anciente
    }
}
else{
    if(age>=45 & age<=49){
        indemenite = (salaire *3)*anciente
    }
    else if(age>49){
        indemenite = (salaire *6)*anciente
    }
    else{
        indemenite = (salaire *1)*anciente
    }
}

message=`votre indemenité est de ${indemenite} €`

console.log(message)