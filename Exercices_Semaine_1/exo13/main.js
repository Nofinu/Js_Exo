//initialisation
let valeurFinal=0,longueur=0,messageFinal="";

valeurFinal=Number(prompt("Entrer la valeur pour generer les listes :"));

for(let i=1;i<=((valeurFinal/2)+1);i++){
    let somme=0,message="",j=i;
    while(somme<valeurFinal){
        somme += j;
        message +=`${j} + `;
        j++;
    }
    if(somme == valeurFinal){
        longueur = message.length;
        message = message.slice(0, length-3)+".";
        message = `${valeurFinal} = `+message;
        messageFinal = messageFinal + message + "\n";
    }
}
console.log(messageFinal);