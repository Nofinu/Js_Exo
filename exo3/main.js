let diametre =0,perimetre = 0 , air=0 , rayon = 0, message="";

diametre = Number(prompt("entrer la valeur du diametre du cercle :"));
rayon = diametre/2;
perimetre = diametre * Math.PI;
air= Math.PI*Math.pow(rayon, 2);

message=`Le perimetre de notre cercle de diametre = ${diametre} vaut : ${Math.round(perimetre)}`

console.log(message)

message = `L'air de notre cercle de diametre = ${diametre} vaut : ${Math.round(air)}`

console.log(message)

