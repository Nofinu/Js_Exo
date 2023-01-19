//intialisation
let tabChien = [{nom:"max",race:"unerace",age:5},{nom:"roukie",race:"uneautrerace",age:8}],compteurChien=2;
const mySend = document.querySelector('#send');
const nomChien = document.querySelector('#nomChien');
const raceChien = document.querySelector('#raceChien');
const ageChien = document.querySelector('#ageChien');
const mySelect = document.querySelector('#my-select');
const affichage = document.querySelector('#affichage');

function addChien(newNom,newRace,newAge){
    tabChien.push({nom:newNom,race:newRace,age:newAge});
}

mySend.addEventListener('click',() =>{
    let nom = nomChien.value,race = raceChien.value,age = ageChien.value;
    addChien(nom,race,age);
    mySelect.innerHTML += `<option value="${compteurChien}">${nom}</option>`
    console.table(tabChien);
    compteurChien++;
});

mySelect.addEventListener("change", () => {
    if(mySelect.value != ""){
    affichage.textContent = `vous avez selectionné ${tabChien[mySelect.value].nom} \nde la race ${tabChien[mySelect.value].race}\net qui a ${tabChien[mySelect.value].age} ans.`;

    }
    else{
        affichage.textContent = "";
    }
});

