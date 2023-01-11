//initialisation

let entry="",taille=0,chaine1="",chaine2="",affichage="",tab;

//entré des valeurs
entry = prompt("entrer un mot pour verifier si il est palindrome :");
entry = entry.toLowerCase()
//est-il un palindrome
taille = entry.length;


if((taille%2)!=0){
    chaine1 = entry.substring(0, ((taille/2)))
    chaine2 = entry.substring(((taille/2)+1))
}
else{
    chaine1= entry.substring(0, ((taille/2)))
    chaine2 = entry.substring(((taille/2)))
}

chaine2 = [...chaine2].reverse().join("");

if(chaine1 === chaine2){
    affichage=`le mot ${entry} est un palindrome!`
}
else{
    affichage=`le mot ${entry} n'est pas un palindrome!`
}


alert(affichage)