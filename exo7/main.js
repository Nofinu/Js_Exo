//initialisation 
const email = "contact@teamjs.fr";
const mdp = "leLundiAuSoleil";
let entryEmail="",entryMdp="";

//entrer des valeurs

while(entryEmail !=email || entryMdp!=mdp){
    entryEmail = prompt("entrer votre adresse Email :");
    if (entryEmail == email){
        entryMdp = prompt("entrer votre mot de passe")
        if(entryMdp == mdp){
            console.log("bienvenue sur le site")
        }
        else{
            console.log("mauvais mot de passe!")
        }
    }
    else{
        console.log("mauvais email !")
    }
}









