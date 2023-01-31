export default class Vehicule {
    constructor(plaqueImatricule,heureEntre){
        this.plaqueImatricule = plaqueImatricule;
        this.heureEntre = heureEntre;
        this.heureSortie = 0;
        this.sortie = false;
    }
    get imatricule(){
        return this.plaqueImatricule;
    }
    get entryHours(){
        return this.heureEntre;
    }
    set exitHours(value){
        this.heureSortie = value;
    }
    set status(value){
        this.sortie = value;
    }
    get status(){
        return this.sortie;
    }
}