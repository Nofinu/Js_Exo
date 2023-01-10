let diametre,perimetr, air, message;

diametre = Number(prompt("entrer la valeur du diametre du cercle :"));
perimetre = diametre * Math.PI;
air= Math.PI*Math.pow(diametre/2, 2);

message=`Le perimetre de notre cercle de diametre = ${diametre} vaut : ${Math.round(perimetre)}`

console.log(message)

message = `L'air de notre cercle de diametre = ${diametre} vaut : ${Math.round(air)}`

console.log(message)

