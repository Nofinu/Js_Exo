import Vehicule from "./Vehicule.js";

export default class Ihm {
    constructor(btnPayer,btnTicket,divDisplay,input){
        this.btnPayer = btnPayer;
        this.btnTicket = btnTicket;
        this.divDisplay = divDisplay;
        this.input = input;
        this.vehicules = [{plaqueImatricule:"123",heureEntre:1675154479310},{plaqueImatricule:"124",heureEntre:1675156808481},{plaqueImatricule:"128",heureEntre:1675154479310},];
    }
    start(){
        this.btnPayer.addEventListener('click',()=>{
            this.sortieVehicule(this.input.value)
        });
        this.btnTicket.addEventListener('click',()=>{
            this.ajouterVehicule(this.input.value);
        });
    }
    ajouterVehicule(entry){
        for(let vehicule of this.vehicules){
            if(vehicule.plaqueImatricule == entry){
                this.AffichageMsg(`<p>le véhicule possedant la plaque ${entry} est deja dans le parking !</p>`,"red");
                return;
            }
        }
        const vehicule = new Vehicule(entry,new Date().getTime())
        this.vehicules.push(vehicule)
        this.AffichageMsg(`<p>le véhicule possedant la plaque ${entry} est maintenant dans le parking !</p>`,'green');
    }

    sortieVehicule(entry){
        let placeVehicule = 0;
        console.log(this.vehicules)
        for (let vehicule of this.vehicules){
            if(vehicule.plaqueImatricule == entry){
                this.calculPrix(vehicule,entry)
                this.vehicules.splice(placeVehicule,1);
                console.log(this.vehicules)
                return;
            }
            placeVehicule++;
        }
        this.AffichageMsg(`<p>le véhicule possedant la plaque ${entry} n'est pas dans le parking !</p>`,"red");
    }

    calculPrix(vehicule,entry){
        const heureSortie = new Date().getTime();
        console.log(heureSortie)
        let TempsDansParking = Math.round(((heureSortie - vehicule.heureEntre)/1000)/60);
        console.log(TempsDansParking)
        if(TempsDansParking <= 15){ //15
            this.AffichageMsg(`<p>Le prix a payer pour le véhicule ${entry} est de 0.8 €</p>`,"yellow");
        }
        else if (TempsDansParking <= 30){//30
            this.AffichageMsg(`<p>Le prix a payer pour le véhicule ${entry} est de 1.3 €</p>`,"yellow");
        }
        else if(TempsDansParking <= 45){//45
            this.AffichageMsg(`<p>Le prix a payer pour le véhicule ${entry} est de 1.7 €</p>`,"yellow");
        }
        else{
            this.AffichageMsg(`<p>Le prix a payer pour le véhicule ${entry} est de 6 €</p>`,"yellow");
        }
    }

    AffichageMsg(message,couleur){
        this.divDisplay.classList.add(couleur);
        this.divDisplay.innerHTML =message;
        setTimeout(() => {
            this.divDisplay.classList.remove(couleur);
            this.divDisplay.innerHTML ="";
        },5000);
    }
}