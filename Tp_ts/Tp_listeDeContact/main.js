import { Contact } from "./classes/Contact.js";
const containerContacts = document.querySelector('#containerContacts');
const containerDisplayContacts = document.querySelector('#containerDisplayContacts');
const modalAdd = document.querySelector("#myModalAdd");
const modalModif = document.querySelector("#myModalModif");
const btnModalCloseAdd = document.querySelector('#closeAdd');
const btnModalCloseModif = document.querySelector('#closeModif');
const formAddContact = document.querySelector('#formAddContact');
const formModifContact = document.querySelector('#formModifContact');
const inputsADD = formAddContact.querySelectorAll('input');
const inputsModif = formModifContact.querySelectorAll('input');
const contact1 = new Contact("nom", "prenom", 15, "exemple@test.com", "0102030405");
const contact2 = new Contact("nom1", "prenom1", -1, "exemple1@test.com", "0102030405");
const contact3 = new Contact("nom2", "prenom2", 15, "exemple2@test.com", "0102030405");
let listeContacts = [contact1, contact2, contact3];
function RefreshListeContact(liste) {
    containerContacts.innerHTML = "<h1>Contacts</h1>";
    liste.forEach(contact => {
        containerContacts.innerHTML += `<button data-key="${liste.indexOf(contact)}" class="btnContact">${contact.names[0]} ${contact.names[1]}</button>`;
    });
    containerContacts.innerHTML += "<button data-key='-1' id='btnAddContact'>+</button>";
}
function affichageContact(index) {
    containerDisplayContacts.innerHTML = `
        <div id="lastname">${listeContacts[index].info[0]}</div>
        <div id="firstname">${listeContacts[index].info[1]}</div>
        <div ${listeContacts[index].info[2] === -1 ? "class='modalOff'" : ""} id="age">${listeContacts[index].info[2] === -1 ? "" : `${listeContacts[index].info[2]}`}</div>
        <div id="email">${listeContacts[index].info[3]}</div>
        <div id="phoneNumber">${listeContacts[index].info[4]}</div>
        <div>
        <button data-btn="${index}" id="btnSurp">X</button>
        <button data-btn="-1" data-key="${index}" id="btnModif">Modiffier</button>
        </div>
  `;
}
function addContact(lastname, firstname, age = -1, email = "", telephoneNumber = "") {
    listeContacts.push(new Contact(lastname, firstname, age, email, telephoneNumber));
}
function moddifContact(lastname, firstname, age = -1, email = "", telephoneNumber = "", index) {
    listeContacts[index].setInfo = [lastname, firstname, age, email, telephoneNumber];
}
containerContacts.addEventListener('click', (e) => {
    if (e.target.dataset.key === "-1") {
        modalAdd.classList.remove('modalOff');
        modalAdd.classList.add('modalOn');
    }
    else if (e.target.dataset.key !== undefined) {
        containerDisplayContacts.classList.remove('concontainerDisplayContactsOff');
        affichageContact(Number(e.target.dataset.key));
    }
});
btnModalCloseAdd.addEventListener('click', () => {
    modalAdd.classList.remove('modalOn');
    modalAdd.classList.add('modalOff');
});
btnModalCloseModif.addEventListener('click', () => {
    modalModif.classList.remove('modalOn');
    modalModif.classList.add('modalOff');
});
formAddContact.addEventListener('submit', (e) => {
    e.preventDefault();
    addContact(inputsADD[0].value, inputsADD[1].value, Number(inputsADD[2].value) === 0 ? -1 : Number(inputsADD[2].value), inputsADD[3].value, inputsADD[4].value);
    RefreshListeContact(listeContacts);
    modalAdd.classList.remove('modalOn');
    modalAdd.classList.add('modalOff');
});
formModifContact.addEventListener('submit', (e) => {
    e.preventDefault();
    moddifContact(inputsModif[0].value, inputsModif[1].value, Number(inputsModif[2].value), inputsModif[3].value, inputsModif[4].value, Number(document.querySelector('#btnModif').dataset.key));
    RefreshListeContact(listeContacts);
    containerDisplayContacts.innerHTML = "";
    containerDisplayContacts.classList.add('concontainerDisplayContactsOff');
    modalModif.classList.remove('modalOn');
    modalModif.classList.add('modalOff');
});
containerDisplayContacts.addEventListener('click', (e) => {
    if (Number(e.target.dataset.btn) !== -1 && e.target.dataset.btn !== undefined) {
        listeContacts.splice(Number(e.target.dataset.btn), 1);
        RefreshListeContact(listeContacts);
        containerDisplayContacts.innerHTML = "";
        containerDisplayContacts.classList.add('concontainerDisplayContactsOff');
    }
    else if (Number(e.target.dataset.btn) === -1 && e.target.dataset.btn !== undefined) {
        modalModif.classList.remove('modalOff');
        modalModif.classList.add('modalOn');
        inputsModif[0].value = listeContacts[Number(e.target.dataset.key)].info[0];
        inputsModif[1].value = listeContacts[Number(e.target.dataset.key)].info[1];
        inputsModif[2].value = `${listeContacts[Number(e.target.dataset.key)].info[2] == -1 ? "" : listeContacts[Number(e.target.dataset.key)].info[2]}`;
        inputsModif[3].value = listeContacts[Number(e.target.dataset.key)].info[3];
        inputsModif[4].value = listeContacts[Number(e.target.dataset.key)].info[4];
    }
});
RefreshListeContact(listeContacts);
