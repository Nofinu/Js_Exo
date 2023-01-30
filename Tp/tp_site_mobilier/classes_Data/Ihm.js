import {products} from "./Products.js";

export default class Ihm {
    constructor(inputs,displayContainer){
        this.inputs = inputs;
        this.displayContainer = displayContainer;
    }
    start(){
        document.addEventListener('click',(e)=>{
            let dataValue= e.target.dataset.key
            switch(dataValue){
                case "all":
                    this.AfficheElements(dataValue);
                    break;
                case "ikea":
                    this.AfficheElements(dataValue);
                    break;
                case "marcos":
                    this.AfficheElements(dataValue);
                    break;
                case "caressa":
                    this.AfficheElements(dataValue);
                    break;
                case "liddy":
                    this.AfficheElements(dataValue);
                    break;
            }
        });
        document.addEventListener('keydown',(e)=>{
            if(e.key == "Enter"){
                this.researchElement(this.inputs.value)
            }
        });
        this.AfficheElements("all")
    }

    AfficheElements(selection){
        this.displayContainer.innerHTML = ""
        if(selection == "all"){
            for(let product of products){
                this.display(product); 
            }
        }
        else{
            for(let product of products){
                if(product.company == selection){
                    this.display(product); 
                }
                
            }
        }
    }
    researchElement(entry){
        this.displayContainer.innerHTML =""
        for(let product of products){
            if(product.title.includes(entry)){
                this.display(product);
            }
            
        }
    }

    display(product){
        this.displayContainer.innerHTML +=`<div>
                <div class="imgContainer"><img src="${product.image}" alt="image_${product.title}"></div>
                <h3>${product.title}</h3>
                <h2>${product.price} €</h2>
                </div>`
    }
}