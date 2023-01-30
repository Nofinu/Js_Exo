import Element from "./Element.js";
export default class Produit extends Element{
    constructor(titre,prix,description,stock){
        super(titre,prix,description);
        this.stock = stock;
    }

}