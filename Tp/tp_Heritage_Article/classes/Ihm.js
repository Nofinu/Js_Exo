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
                this.addProduit();
            }
            else{
                this.addService();
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
    addProduit(){
        const inputs = this.formulaire.querySelectorAll('input');
        const textarea = this.formulaire.querySelector('textarea');
        const produit = new Produit(inputs[2].value,inputs[3].value,textarea.value,inputs[5].value);
        this.produits.push(produit)
        this.refreshTabProduit()
    }
    addService(){
        const inputs = this.formulaire.querySelectorAll('input');
        const textarea = this.formulaire.querySelector('textarea')
        const service = new Service(inputs[2].value,inputs[3].value,textarea.value,inputs[4].value);
        this.services.push(service);
        this.refreshTabService()
    }
    refreshTabProduit(){
        this.tableProduit.innerHTML =""
        for(let produit of this.produits){
            this.tableProduit.innerHTML += `<tr>
            <td>${produit.titre}</td>
            <td>${produit.prix}</td>
            <td>${produit.description}</td>
            <td>${produit.stock}</td>
            </tr>`
        }
    }
    refreshTabService(){
        this.tableService.innerHTML =""
        for(let service of this.services){
            this.tableService.innerHTML += `<tr>
            <td>${service.titre}</td>
            <td>${service.prix}</td>
            <td>${service.description}</td>
            <td>${service.domaine}</td>
            </tr>`
        }
    }

}