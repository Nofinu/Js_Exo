export class Car {
    constructor(marque,modele,vitesse){
        this.marque = marque,
        this.modele = modele,
        this.vitesse = vitesse
    }
    accelerer(){
        this.vitesse += 10;
    }
    tourner(){
        this.vitesse -=5;
    }
}