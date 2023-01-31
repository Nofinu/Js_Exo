import Vehicule from "./Vehicule.js";

export default class Ihm {
    constructor(btnPayer,btnTicket,divDisplay,input){
        this.btnPayer = btnPayer;
        this.btnTicket = btnTicket;
        this.divDisplay = divDisplay;
        this.input = input;
        this.vehicules = new Array();
    }

    start(){
        this.btnPayer.addEventListener('click',()=>{
            if(this.testEntry(this.input.value)){
                this.sortieVehicule(this.input.value);
            }
            else{
                this.AffichageMsg("<p>veuiller rentrer une plaque correcte</p>",'red');
            }
        });
        this.btnTicket.addEventListener('click',()=>{
            if(this.testEntry(this.input.value)){
                this.ajouterVehicule(this.input.value);
            }
            else{
                this.AffichageMsg("</p>veuiller rentrer une plaque correcte</p>",'red');
            }
        });
        const v1 = new Vehicule("123",1675154479310),v2 = new Vehicule("124",1675156808481),v3 = new Vehicule("128",1675154479310);
        this.vehicules.push(v1);
        this.vehicules.push(v2);
        this.vehicules.push(v3);
    }

    testEntry(entry){
        if (entry == ""){
            return false;
        }
        return true;
    }

    ajouterVehicule(entry){
        const result = this.vehicules.findLast(({ imatricule }) => imatricule == entry);
        if(result == undefined){
            const vehicule = new Vehicule(entry,new Date().getTime())
            this.vehicules.push(vehicule)
            this.AffichageMsg(`<p>le véhicule possedant la plaque <b>${entry}</b> est maintenant dans le parking !</p>`,'green');
            return
        }
        if(result.exitHours == 0){
            this.AffichageMsg(`<p>le véhicule possedant la plaque <b>${entry}</b> est deja dans le parking !</p>`,"red");
            return;
        }
        const vehicule = new Vehicule(entry,new Date().getTime())
        this.vehicules.push(vehicule)
        this.AffichageMsg(`<p>le véhicule possedant la plaque <b>${entry}</b> est maintenant dans le parking !</p>`,'green');
    }

    sortieVehicule(entry){
        const result = this.vehicules.findLast(({ imatricule }) => imatricule == entry);
        if(result == undefined){
            this.AffichageMsg(`<p>le véhicule possedant la plaque <b>${entry}</b> n'est pas dans le parking !</p>`,"red");
            return;
        }
        if (result.exitHours == 0){
            this.calculPrix(result,entry)
            result.exitHours = new Date().getTime()
            console.log(this.vehicules)
            return;
        }
        this.AffichageMsg(`<p>le véhicule possedant la plaque <b>${entry}</b> n'est pas dans le parking !</p>`,"red");
    }

    calculPrix(vehicule,entry){
        const heureSortie = new Date().getTime();
        let TempsDansParking = Math.round(((heureSortie - vehicule.entryHours)/1000)/60);
        if(TempsDansParking <= 15){ //15
            this.AffichageMsg(`<p>Le prix a payer pour le véhicule <b>${entry}</b> est de 0.8 €</p>`,"yellow");
        }
        else if (TempsDansParking <= 30){//30
            this.AffichageMsg(`<p>Le prix a payer pour le véhicule <b>${entry}</b> est de 1.3 €</p>`,"yellow");
        }
        else if(TempsDansParking <= 45){//45
            this.AffichageMsg(`<p>Le prix a payer pour le véhicule <b>${entry}</b> est de 1.7 €</p>`,"yellow");
        }
        else{
            this.AffichageMsg(`<p>Le prix a payer pour le véhicule <b>${entry}</b> est de 6 €</p>`,"yellow");
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