//intialisation
let noteMax=0,noteMin=20,entry=0,somme=0,compteur=0;

const mySaisie = document.querySelector('#saisieBtn');
const myBestNote = document.querySelector('#bestNoteBtn');
const myWorstNote = document.querySelector('#worstNoteBtn');
const myMean = document.querySelector('#meanBtn');
const myInputArea = document.querySelector('#inputArea');
const myEntryText = document.querySelector('#entryText');
const myEntryBtn = document.querySelector('#entryBtn');
const myResultWorstNote = document.querySelector('#resultWorstNote');
const myResultBestNote = document.querySelector('#resultBestNote');
const myResultMean = document.querySelector('#resultMean');
const myListeNote = document.querySelector('#listeNote')
const myDisplayNote = document.querySelector('#displayNote')

function calcmean (sommeNote,nbrNote){
    return Math.round(sommeNote/nbrNote);
}
function attributFocus (){
    myEntryText.focus();
}

mySaisie.addEventListener('click',() =>{
    myInputArea.classList.remove("hidden");
});

document.addEventListener("keydown",(e) =>{
    if(e.key === "Escape") {
        myInputArea.classList.add("hidden");
        myEntryText.value = "";
    }
});
document.addEventListener("keydown",(e) =>{
    if(e.key === "Enter" && myEntryText.value !="") {
        let entry = 0;
        entry = Number(myEntryText.value);
        if (entry < noteMin){
            noteMin = entry;
        }
        if(entry > noteMax){
            noteMax = entry;
        }
        somme += entry;
        compteur++;
        myListeNote.innerHTML += `<li>en note <b>${compteur}</b>, vous avez saisi <b>${entry}/20</B>.</li>`
        myDisplayNote.textContent = `La serie contient ${compteur} notes :`
        myEntryText.value = "";
    }
});

myEntryBtn.addEventListener('click',() =>{
    if(myEntryText.value !="") {
        let entry = 0;
        entry = Number(myEntryText.value);
        if (entry < noteMin){
            noteMin = entry;
        }
        if(entry > noteMax){
            noteMax = entry;
        }
        somme += entry;
        compteur++;
        myListeNote.innerHTML += `<li>en note ${compteur}, vous avez saisi ${entry}/20.</li>`
        myDisplayNote.textContent = `La serie contient ${compteur} notes :`
        myEntryText.value = "";
    }
    attributFocus();
});

myWorstNote.addEventListener('click',() =>{
    myResultWorstNote.textContent = `la pire note est : ${noteMin}`;
});
myBestNote.addEventListener('click',() =>{
    myResultBestNote.textContent = `la meilleure note est : ${noteMax}`;
});
myMean.addEventListener('click',() =>{
    myResultMean.textContent =`la moyenne est de : ${calcmean(somme,compteur)}`;
});

