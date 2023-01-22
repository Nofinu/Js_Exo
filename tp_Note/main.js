let tabEleves=[],tabMatiere=[],tabNotes=[];
let testAffichageEleve=false,testAffichageMatiere=false,testAffichageNote=false;

const btnAjoutEleve = document.querySelector('#btnAjoutEleve');
const btnAjoutMatiere = document.querySelector('#btnAjoutMatiere');
const btnAjoutNote = document.querySelector('#btnAjoutNote');
const btnDisplayELeve = document.querySelector('#btnDisplayELeve');
const btnDisplayMatiere = document.querySelector('#btnDisplayMatiere');
const btnDisplayNote = document.querySelector('#btnDisplayNote');
const formContainer = document.querySelector('#formContainer');
const hrMove = document.querySelector('#hrMove');
const tableNote = document.querySelector('#tableNote');

const nomAjout = document.querySelector('#nom');
const prenomAjout = document.querySelector('#prenom');
const matiereAjout = document.querySelector('#matiereEntry');
const noteEntry = document.querySelector('#noteEntry');

const eleveSelect1 = document.querySelector('#eleveSelect1');
const eleveSelect2 = document.querySelector('#eleveSelect2');
const matiereSelect1 = document.querySelector('#matiereSelect1');
const matiereSelect2 = document.querySelector('#matiereSelect2');


//fonction d'affichage pour les select
function affichageSelectEleve (){
    eleveSelect1.innerHTML = `<option value="">Selectionner un elèves</option>`;
    eleveSelect2.innerHTML = `<option value="">Selectionner un elèves</option>`;
    tabEleves.forEach(eleve => {
        eleveSelect1.innerHTML +=`<option value="${tabEleves.indexOf(eleve)}">${eleve.nom} ${eleve.prenom}</option>`;
        eleveSelect2.innerHTML +=`<option value="${tabEleves.indexOf(eleve)}">${eleve.nom} ${eleve.prenom}</option>`;
    });
}
function affichageSelectMatiere (){
    matiereSelect1.innerHTML = `<option value="">Selectionner une matière</option>`;
    matiereSelect2.innerHTML = `<option value="">Selectionner une matière</option>`;
    tabMatiere.forEach(objMatiere => {
        matiereSelect1.innerHTML +=`<option value="${tabMatiere.indexOf(objMatiere)}">${objMatiere.matiere} </option>`;
        matiereSelect2.innerHTML +=`<option value="${tabMatiere.indexOf(objMatiere)}">${objMatiere.matiere} </option>`;
    });
}

//fonction d'ajout des objs dans les tableaux
function addEleve(nouveauNom,nouveauPrenom){
    tabEleves.push({nom:nouveauNom,prenom:nouveauPrenom});
}
function addMatiere(intitule){
    tabMatiere.push({matiere:intitule});
}
function addNote (ideleve,idmatiere,entryNote){
    tabNotes.push({idEleve:ideleve,idMatiere:idmatiere,note:entryNote});
}

//fonction pour le gestion du display de la div formContainer // des div de form
function displayForm(test,div,btn){
    if(test){
        div.classList.add('hidden');
        btn.textContent = "Off";
        test = false;
    }
    else{
        div.classList.remove('hidden');
        btn.textContent = "On";
        test = true;
    }
    return test;
}
function displayFormContainer (){
    if(!testAffichageEleve && !testAffichageMatiere && !! !testAffichageNote){
        formContainer.classList.remove('on');
        formContainer.classList.add('off');
        hrMove.classList.remove('on');
        hrMove.classList.add('off');
    }
    else{
        formContainer.classList.add('on');
        formContainer.classList.remove('off');
        hrMove.classList.add('on');
        hrMove.classList.remove('off');
    }
}

//fonction de recherche de note 
function searchNote (ideleve,idmatiere=""){
    let somme =0,nbNote=0;
    tableNote.innerHTML = ""
    if(idmatiere){
        for(let i of tabNotes){
            if(i.idEleve == ideleve && i.idMatiere == idmatiere){
                somme += i.note;
                nbNote++;
                tableNote.innerHTML += `<tr><td>${tabEleves[i.idEleve].nom}</td> <td>${tabEleves[i.idEleve].prenom}</td> <td>${tabMatiere[i.idMatiere].matiere}</td> <td>${i.note}</td></tr>`
            }
        }
    }
    else{
        for(let i of tabNotes){
            if(i.idEleve == ideleve ){
                somme += i.note;
                nbNote++;
                tableNote.innerHTML += `<tr><td>${tabEleves[i.idEleve].nom}</td> <td>${tabEleves[i.idEleve].prenom}</td> <td>${tabMatiere[i.idMatiere].matiere}</td> <td>${i.note}</td></tr>`
            }
        }
    }
    return (Math.round((somme/nbNote)*100)/100);
}

function displayMean (){
    if(eleveSelect2.value!=""){
        let moyenne = searchNote(eleveSelect2.value,matiereSelect2.value);
        if(matiereSelect2.value){
            document.querySelector('#textMoyenne').innerHTML =`Moyenne de <b>${tabMatiere[matiereSelect2.value].matiere}</b> de <b>${tabEleves[eleveSelect2.value].nom} ${tabEleves[eleveSelect2.value].prenom}</b> est : <b>${moyenne}</b>`;
        }
        else{
            document.querySelector('#textMoyenne').innerHTML =`Moyenne generale de <b>${tabEleves[eleveSelect2.value].nom} ${tabEleves[eleveSelect2.value].prenom}</b> est : <b>${moyenne}</b>`;
        }
    }
}


//boutton d'affichage des forms
btnDisplayELeve.addEventListener('click',()=>{
    testAffichageEleve = displayForm(testAffichageEleve,document.querySelector('#form1'),btnDisplayELeve)
    displayFormContainer ();
});
btnDisplayMatiere.addEventListener('click',()=>{
    testAffichageMatiere = displayForm(testAffichageMatiere,document.querySelector('#form2'),btnDisplayMatiere)
    displayFormContainer ();
});
btnDisplayNote.addEventListener('click',()=>{
    testAffichageNote = displayForm(testAffichageNote,document.querySelector('#form3'),btnDisplayNote)
    displayFormContainer ();
});

//boutons d'ajout des entry
btnAjoutEleve.addEventListener('click',()=>{
    addEleve(nomAjout.value,prenomAjout.value);
    affichageSelectEleve();
});
btnAjoutMatiere.addEventListener('click',()=>{
    addMatiere(matiereAjout.value);
    affichageSelectMatiere();
});
btnAjoutNote.addEventListener('click',()=>{
    addNote(eleveSelect1.value,matiereSelect1.value,Number(noteEntry.value));
});


//affichage de la moyenne 
eleveSelect2.addEventListener('change',()=>{
    displayMean();
})
matiereSelect2.addEventListener('change',()=>{
    displayMean();
})