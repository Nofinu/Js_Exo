import Contact from "./Classes/Contact.js";

let contacts = [];
const envoyer = document.getElementById('envoyer');
const inputs = document.querySelectorAll('input');
const table = document.querySelector('table');

function refreshTab (){
    for(let contact of contacts){
        table.innerHTML += `<tr>
        <td>${contact.titre}</td>
        <td>${contact.nom}</td>
        <td>${contact.prenom}</td>
        <td>${contact.dateNaissance}</td>
        <td>${contact.telephone}</td>
        <td>${contact.email}</td>
        </tr>`
    }
}


envoyer.addEventListener('click',()=>{
    if(inputs[0].checked){
        console.log()
        const contact = new Contact(inputs[0].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value,inputs[6].value);
        contacts.push(contact);
    }
    else if (inputs[1].checked){
        const contact = new Contact(inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value,inputs[6].value);
        contacts.push(contact);
    }
    refreshTab()
});