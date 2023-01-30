import Element from "./Element.js";
export default class Service extends Element{
    constructor(titre,prix,description,domaine){
        super(titre,prix,description);
        this.domaine = domaine;
    }

}