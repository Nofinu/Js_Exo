import Contact from "./Contact.js";

export default class Ihm {
    constructor(form,inputs,table){
        this.form = form;
        this.inputs = inputs;
        this.table =table;
        this.contacts =[];
    }
    start(){
        this.form.addEventListener('submit',(e) =>{
            e.preventDefault();
            this.AddContact();
        });
    }
    AddContact (){
        if(this.inputs[0].checked){
            const contact = new Contact(this.inputs[0].value,this.inputs[2].value,this.inputs[3].value,this.inputs[4].value,this.inputs[5].value,this.inputs[6].value);
            this.contacts.push(contact);
        }
        else if (this.inputs[1].checked){
            const contact = new Contact(this.inputs[1].value,this.inputs[2].value,this.inputs[3].value,this.inputs[4].value,this.inputs[5].value,this.inputs[6].value);
            this.contacts.push(contact);
        }
        this.refreshTab();
    };
    refreshTab (){
        this.table.innerHTML ="";
        for(let contact of this.contacts){
            this.table.innerHTML += `<tr>
            <td>${contact.titre}</td>
            <td>${contact.nom}</td>
            <td>${contact.prenom}</td>
            <td>${contact.dateNaissance}</td>
            <td>${contact.telephone}</td>
            <td>${contact.email}</td>
            </tr>`
        }
    }
}