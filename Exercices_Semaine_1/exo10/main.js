//initialisation
let entry="",message="Vous avez choisi";

//entrer des valeurs
entry = (prompt("Quelle boisson voullez vous (entrer la valeur corespondante) : \n1.Eau\n2.Jus d'oranges\n3.Limonades\n4.Café\n5.Thé"));

switch(entry){
    case "1":
        message += " de l'eau.";
        break;
    case "2":
        message += "du jus d'oranges.";
        break;
    case "3":
        message += " de la limonade.";
        break;
    case "3":
        message += " du café.";
        break;
    case "5":
        message += " du thé.";
        break;
    default:
        message = "valeurs incorecte elle ne corespond pas a un de nos produits";
        break;
}

alert(message);