//fonctions
let printMenuPrincipal = () =>`***Bienvenue dans l'annuaire***\nque voulez vous faire:\n1) afficher les contacts\n2) ajouter une personne dasn l'annuaire\n3) retirer une personne de l'annuaire\n4) quitter`;

function printContact (list){
    let compteur =0, message="vos contact sont : \n";
    for(let i of list){
        message += `${compteur}) ${i.nom} ${i.prenom} age : ${i.age}\n`;
        compteur++;
    }
    return message;
}

function ajoutPersonne (newNom,newPrenom,newAge,list){
    list.push({nom:newNom,prenom:newPrenom,age:newAge});
    return list
}

function suprPersonne (index,list){
    list.splice(index,1);
    return list;
}


//initialisation
let annuaire = [
    {
        nom: "Dupont",
        prenom: "Jean",
        age: 15
    },
    {
        nom: "Durant",
        prenom: "Pierre",
        age: 16
    },
    {
        nom: "Martin",
        prenom: "Jean",
        age: 17
    }
];
let entry =0,message="";

do{
    entry = 0;
    while(entry>4 || entry<1){
        entry = Number(prompt(printMenuPrincipal()))
    }
    switch(entry){
        case 1 :
            console.log(1)
            alert(printContact(annuaire));
            break;
        case 2 :
            annuaire = ajoutPersonne(prompt("Nom de la personne a ajouter :"),prompt("prenom de la personne a ajouter :"),Number(prompt("age de la persone a ajouter :")),annuaire);
            alert(printContact(annuaire));
            break;
        case 3 :
            annuaire = suprPersonne(Number(prompt(`${printContact(annuaire)}\nquel contact voulez vous suprimer :`)),annuaire);
            alert(printContact(annuaire));
            break;    
    }
}while(entry != 4)

console.table(annuaire);