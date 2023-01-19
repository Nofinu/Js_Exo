//fonction

function geneValRdm(valmax){
    return Math.floor(Math.random() * (valmax - 1) + 1);
}

function testVal (val,objectif){
    if(val<objectif){
        display.innerHTML += `<li> ${nbrTentative}) ${val} est inferieur à la valeur rechercher</li>`;
        return false;
    }
    if(val>objectif){
        display.innerHTML  += `<li> ${nbrTentative}) ${val} est superieur à la valeur rechercher</li>`;
        return false;
    }
    if(val == objectif){
        display.innerHTML  += `<li> ${nbrTentative}) ${val} est egale à la valeur rechercher</li>`;
        return true;
    }
    
}

let objectif=0,nbrTentative =0,succes= false;
const startGame = document.querySelector('#startGame');
const entry = document.querySelector('#entry');
const display = document.querySelector('#display');
const container = document.querySelector('#container');
const sendEntry = document.querySelector('#sendEntry');

startGame.addEventListener('click',()=>{
    container.classList.remove('hidden');
    sendEntry.classList.remove('hidden');
    entry.classList.remove('hidden');
    display.textContent = "";
    nbrTentative = 0;
    objectif = geneValRdm(1000);
    console.log(objectif);
    startGame.classList.add('hidden');
});

sendEntry.addEventListener('click',()=>{
    let valueEntry =0;
    valueEntry = Number(entry.value);
    nbrTentative++;
    succes = testVal(valueEntry,objectif);
    if(succes){
        display.innerHTML  += `<li>★★Bravo vous avez trouver la valeur ${objectif}★★</li>`;
        startGame.classList.remove('hidden');
        sendEntry.classList.add('hidden');
        entry.classList.add('hidden');
    }
    if(nbrTentative == 10){
        display.innerHTML  += `<li>vous n'avez pas reussi a trouver la valeur ${objectif}</li>`;
        startGame.classList.remove('hidden');
        sendEntry.classList.add('hidden');
        entry.classList.add('hidden');
    }
});

