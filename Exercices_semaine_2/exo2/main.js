//intialisation
let tabChien = [{nom:"max",race:"unerace",age:5},{nom:"roukie",race:"uneautrerace",age:8}],compteurChien=2;
const mySend = document.querySelector('#send');
const nomChien = document.querySelector('#nomChien');
const raceChien = document.querySelector('#raceChien');
const ageChien = document.querySelector('#ageChien');
const mySelect = document.querySelector('#my-select');
const affichage = document.querySelector('#affichage');

const NewNomChien = document.querySelector('#newNomChien');
const NewRaceChien = document.querySelector('#newRaceChien');
const NewAgeChien = document.querySelector('#newAgeChien');
const modiffier = document.querySelector('#Modifier');
const supprimer = document.querySelector('#Supprimer');

function affichageSelectChien (liste){
    let compteur =0;
    mySelect.innerHTML = `<option value="">Selectionner un chien</option>`;
    for(let i in liste){
        mySelect.innerHTML += `<option value="${compteur}">${liste[i].nom}</option>`;
        compteur++;
    }
}

function addChien(newNom,newRace,newAge){
    tabChien.push({nom:newNom,race:newRace,age:newAge});
}

mySend.addEventListener('click',() =>{
    let nom = nomChien.value,race = raceChien.value,age = ageChien.value;
    addChien(nom,race,age);
    affichageSelectChien(tabChien);
    console.table(tabChien);
    compteurChien++;
});

mySelect.addEventListener("change", () => {
    if(mySelect.value != ""){
    //affichage.textContent = `vous avez selectionné ${tabChien[mySelect.value].nom} \nde la race ${tabChien[mySelect.value].race}\net qui a ${tabChien[mySelect.value].age} ans.`;
        affichage.classList.remove('hidden');
        affichage.classList.add('affichage');
        NewNomChien.value = tabChien[mySelect.value].nom;
        NewRaceChien.value = tabChien[mySelect.value].race;
        NewAgeChien.value = tabChien[mySelect.value].age;
    }
    else{
        affichage.classList.add('hidden');
        affichage.classList.remove('affichage');
    }
});

modiffier.addEventListener('click',()=>{
    tabChien[mySelect.value].nom = NewNomChien.value;
    tabChien[mySelect.value].race = NewRaceChien.value;
    tabChien[mySelect.value].age = NewAgeChien.value;
});

supprimer.addEventListener('click',()=>{
    tabChien.splice(mySelect.value,1);
    affichageSelectChien(tabChien)
});

affichageSelectChien(tabChien)

