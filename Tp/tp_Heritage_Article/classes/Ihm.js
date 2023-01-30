import Produit from "./Produit.js";
import Service from "./Service.js";

export default class Ihm {
    constructor(tableProduit,tableService,formulaire,radioBtn){
        this.tableProduit = tableProduit;
        this.tableService = tableService;
        this.formulaire = formulaire;
        this.radioBtn = radioBtn;
        this.produits =[]
        this.services = []
    }
    start(){
        this.radioBtn[0].addEventListener('change',()=>{
            this.changeAffichage()
        });
        this.radioBtn[1].addEventListener('change',()=>{
            this.changeAffichage()
        });
        this.formulaire.addEventListener('submit',(e)=>{
            e.preventDefault();
            if (this.radioBtn[0].checked){
                this.addElement(this.produits,this.tableProduit,"stock")
            }
            else{
                this.addElement(this.services,this.tableService,"domaine");
            }
        })
        onload = () => { 
            formulaire.reset();
        }
    }
    changeAffichage(){
        if (this.radioBtn[0].checked){
            this.formulaire.querySelector("input[name='stock']").classList.remove('off');
            this.formulaire.querySelector("input[name='domaine']").classList.add('off');
        }
        else{
            this.formulaire.querySelector("input[name='domaine']").classList.remove('off');
            this.formulaire.querySelector("input[name='stock']").classList.add('off');
        }
    }
    addElement(table,tabAffichage,elemAffichage){
        const inputs = this.formulaire.querySelectorAll('input');
        const textarea = this.formulaire.querySelector('textarea');
        let element
        if(this.radioBtn[0].checked){
            element = new Produit(inputs[2].value,inputs[3].value,textarea.value,inputs[5].value);
        }
        else{
            element = new Service(inputs[2].value,inputs[3].value,textarea.value,inputs[4].value);
        }
        
        table.push(element);
        this.refreshTab(tabAffichage,table,elemAffichage)
    }
    refreshTab(tabAffichage,tabDonne,elemAffichage){
        tabAffichage.innerHTML =""
        for(let elem of tabDonne){
            tabAffichage.innerHTML += `<tr>
            <td>${elem.titre}</td>
            <td>${elem.prix}</td>
            <td>${elem.description}</td>
            <td>${elem[elemAffichage]}</td>
            </tr>`
        }
    }

}