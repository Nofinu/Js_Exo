//fonctions
let printMenuPrincipal = () =>`***Bienvenue dans l'annuaire***\nque voulez vous faire:\n1) afficher les contacts\n2) ajouter une personne dans l'annuaire\n3) retirer une personne de l'annuaire\n4)modifier un contact/ ajouter un numeros de telephone\n5) quitter`;

function printContact (list){
    let compteur =0, message="vos contact sont : \n";
    for(let i of list){
        if(i.telephone){
            message += `${compteur}) ${i.nom} ${i.prenom} age : ${i.age} \n\tTelepohone : ${i.telephone}\n`;
        }else{
            message += `${compteur}) ${i.nom} ${i.prenom} age : ${i.age}\n`;
        }
        compteur++;
    }
    return message;
}

function ajoutPersonne (newNom,newPrenom,newAge,list,newTelephone = undefined){
    list.push({nom:newNom,prenom:newPrenom,age:newAge,telephone : newTelephone});
    return list
}

function suprPersonne (index,list){
    list.splice(index,1);
    return list;
}

function suprPersonneTel (telnumber,list){
    let compteur =0,suppr=false;
    for (let i of list){
        if (i.telephone == telnumber){
            list.splice(compteur,1);
            suppr = true;
        }
        compteur++;
    }
    if(!suppr ){
        alert("Numero de telephone incorect aucun contact suprimer !")
    }

    return list;
}

function modifContact (index,list){
    let choix=0,message="",text="",valNum=0;
        message ="*** Que voulez vous modifier ***\1)le nom\n2) le prénom\n3) L'age\n4)Le numéros de téléphone\n5)Quitter";
        do{
            choix = demandeValeur(message,1,5);
            switch(choix){
                case 1 :
                    text = prompt(`Que dois devenir le nom ${list[index].nom} :`);
                    list[index].nom = text;
                    break;
                case 2 :
                    text = prompt(`Que dois devenir le prenom ${list[index].prenom} :`);
                    list[index].prenom = text;
                    break;
                case 3 : 
                    valNum = Number(prompt(`Que dois devenir l'age ${list[index].age} :`));
                    list[index].age = valNum
                    break;
                case 4 :
                    text = prompt(`Que dois devenir le numero de téléphone ${list[index].telephone} :`);
                    list[index].telephone =text;
                    break;
            }
        }while(choix!=5)
}

function demandeValeur (message,vmin,vmax){
    let val;
    do{
        val = Number(prompt(message));
    }while(val<vmin || val>vmax)
    return val;
}


//initialisation
let annuaire = [
    {
        nom: "Dupont",
        prenom: "Jean",
        age: 15,
        telephone : undefined
    },
    {
        nom: "Durant",
        prenom: "Pierre",
        age: 16,
        telephone : "01 23 45 67 89"
    },
    {
        nom: "Martin",
        prenom: "Jean",
        age: 17,
        telephone : undefined
    }
];
let entry =0,message="",entry2;

do{
    entry = 0;
    entry = demandeValeur(printMenuPrincipal(),1,5);
    switch(entry){
        case 1 :
            console.log(1)
            alert(printContact(annuaire));
            break;
        case 2 :
            message = "*** Ajouter un contact ***\n1) Avec un numéros de téléphone\n2) Sans numéros de téléphone"
            entry2 = demandeValeur(message,1,2)
            if(entry2==1){
                annuaire = ajoutPersonne(prompt("Nom de la personne a ajouter :"),prompt("prenom de la personne a ajouter :"),Number(prompt("age de la persone a ajouter :")),annuaire,prompt("Numéros de téléphone de la personne a ajouter :"));
                alert(printContact(annuaire));
            }
            else{
                annuaire = ajoutPersonne(prompt("Nom de la personne a ajouter :"),prompt("prenom de la personne a ajouter :"),Number(prompt("age de la persone a ajouter :")),annuaire);
                alert(printContact(annuaire));
            }
            break;
        case 3 :
            message = "***Suprimer un contact***\n1) Via son ID\n2) Via son numero de téléphone"
            entry2 = demandeValeur (message,1,2)
            if(entry2 == 1){
                annuaire = suprPersonne(Number(prompt(`${printContact(annuaire)}\nQuel est l'ID du contact que vous voulez suprimer :`)),annuaire);
                alert(printContact(annuaire));
            }
            else{
                annuaire = suprPersonneTel(prompt(`${printContact(annuaire)}\nQuel est le numero de téléphone du contact que vous voulez suprimer :`),annuaire);
                alert(printContact(annuaire));
            }
            break;
        case 4 :
            modifContact(prompt(`${printContact(annuaire)}\nQuel est l'ID du contact que vous voulez modifier :`),annuaire)
            alert(printContact(annuaire));
            break;    
    }
}while(entry != 5)

console.table(annuaire);