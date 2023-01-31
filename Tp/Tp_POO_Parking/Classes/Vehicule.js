export default class Vehicule {
    constructor(plaqueImatricule,heureEntre){
        this.plaqueImatricule = plaqueImatricule;
        this.heureEntre = heureEntre;
        this.heureSortie = 0;
    }
    get imatricule(){
        return this.plaqueImatricule;
    }
    get entryHours(){
        return this.heureEntre;
    }
    get exitHours(){
        return this.heureSortie;
    }
    set exitHours(value){
        this.heureSortie = value;
    }
}