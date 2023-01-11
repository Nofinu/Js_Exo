//initialisation
let entry="",message="";

//entrer des valeurs
entry = (prompt("Quelle boisson voullez vous (entrer la valeur corespondante) : \n1.Eau\n2.Jus d'oranges\n3.Limonades\n4.Café\n5.Thé"));

switch(true){
    case entry == 1:
        message = "Vous avez choisi de l'eau.";
        break;
    case entry == 2:
        message = "Vous avez choisi du jus d'oranges.";
        break;
    case entry == 3:
        message = "Vous avez choisi de la limonade.";
        break;
    case entry == 4:
        message = "Vous avez choisi du café.";
        break;
    case entry == 5:
        message = "Vous avez choisi de thé.";
        break;
    default:
        message = "valeurs incorecte elle ne corespond pas a un de nos produits";
        break;
}

alert(message);