export class Car {
    constructor(marque,modele,vitesse){
        this.marque = marque,
        this.modele = modele,
        this.vitesse = vitesse
    }
    accelerer(){
        this.vitesse += 10;
        return `<li>la ${this.marque}, ${this.modele} roule a <b>${this.vitesse} km/h.</b></li>`
    }
    tourner(){
        this.vitesse -=5;
        return`<li>la ${this.marque}, ${this.modele} roule a <b>${this.vitesse} km/h.</b></li>`
    }
}