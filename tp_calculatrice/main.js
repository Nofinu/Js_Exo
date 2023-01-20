let affichage ="",opperateur=true,tabEntry = [],calc=0;

const display = document.querySelector('#display');

function affichageEntry(text){
    affichage += `${text}`;
    display.textContent =affichage;
}

function affichageReset(){
    affichage ="";
    display.textContent =affichage;
}

function calcul(entry){
    let taboutput=[],somme=0;
    taboutput = concatenation(entry);
    somme = Number(taboutput[0]);
    for (let i =1;i<taboutput.length;i+=2){
        switch(taboutput[i]){
            case "%":
                somme = somme % Number(taboutput[i+1]);
                break;
            case "÷":
                somme = somme / Number(taboutput[i+1]);
                break;
            case "x":
                somme = somme * Number(taboutput[i+1]);
                break;
            case "-":
                somme -= Number(taboutput[i+1]);
                break;
            case "+":
                somme += Number(taboutput[i+1]);
                break;
        }
    }
    return somme;
}

function concatenation(entry){
    let tabCalc=[],value="";
    for(let i of entry){
        if(Number(i)){
            value += i;
        }
        else if(i == "."){
            value += i;
        }
        else{
            tabCalc.push(value);
            tabCalc.push(i);
            value = "";
        }
    }
    tabCalc.push(value);
    return tabCalc;
}

document.addEventListener('click',(e)=>{
    switch(e.target.dataset.btn){
        case "C":
            affichageReset();
            tabEntry=[]
            opperateur = false;
            break;
        case "π":
            affichageEntry(e.target.dataset.btn);
            tabEntry.push(`3.14`);
            opperateur = false;
            break;
        case "%":
            if(!opperateur){
                affichageEntry(e.target.dataset.btn);
                tabEntry.push(e.target.dataset.btn);
                opperateur = true;
            }
            break;
        case "÷":
            if(!opperateur){
                affichageEntry(e.target.dataset.btn);
                tabEntry.push(e.target.dataset.btn);
                opperateur = true;
            }
            break;
        case "7":
            affichageEntry(e.target.dataset.btn);
            tabEntry.push(e.target.dataset.btn);
            opperateur = false;
            break;
        case "8":
            affichageEntry(e.target.dataset.btn);
            tabEntry.push(e.target.dataset.btn);
            opperateur = false;
            break;
        case "9" :
            affichageEntry(e.target.dataset.btn);
            tabEntry.push(e.target.dataset.btn);
            opperateur = false;
            break;
        case "x":
            if(!opperateur){
                affichageEntry(e.target.dataset.btn);
                tabEntry.push(e.target.dataset.btn);
                opperateur = true;
            }
            break;
        case "4":
            affichageEntry(e.target.dataset.btn);
            tabEntry.push(e.target.dataset.btn);
            opperateur = false;
            break;
        case "5":
            affichageEntry(e.target.dataset.btn);
            tabEntry.push(e.target.dataset.btn);
            opperateur = false;
            break;
        case "6" :
            affichageEntry(e.target.dataset.btn);
            tabEntry.push(e.target.dataset.btn);
            opperateur = false;
            break;
        case "-":
            if(!opperateur){
                affichageEntry(e.target.dataset.btn);
                tabEntry.push(e.target.dataset.btn);
                opperateur = true;
            }
            break;
        case "1":
            affichageEntry(e.target.dataset.btn);
            tabEntry.push(e.target.dataset.btn);
            opperateur = false;
            break;
        case "2":
            affichageEntry(e.target.dataset.btn);
            tabEntry.push(e.target.dataset.btn);
            opperateur = false;
            break;
        case "3":
            affichageEntry(e.target.dataset.btn);
            tabEntry.push(e.target.dataset.btn);
            opperateur = false;
            break;
        case "+":
            if(!opperateur){
                affichageEntry(e.target.dataset.btn);
                tabEntry.push(e.target.dataset.btn);
                opperateur = true;
            }
            break;
        case "0":
            affichageEntry(e.target.dataset.btn);
            tabEntry.push(e.target.dataset.btn);
            break;
        case ".":
            if(!opperateur){
                affichageEntry(e.target.dataset.btn);
                tabEntry.push(e.target.dataset.btn);
                opperateur = true;
            }
            break;
        case "=":
            opperateur = false;
            affichageReset();
            calc = calcul(tabEntry)
            affichageEntry(calc);
            tabEntry =[`${calc}`]
            break;
    }

});
