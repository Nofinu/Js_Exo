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

document.addEventListener('keydown',(e)=>{
    switch(e.key){
        case "/":
            if(!opperateur){
                affichageEntry("÷");
                tabEntry.push("÷");
                opperateur = true;
            }
            break;
        case "7":
            affichageEntry("7");
            tabEntry.push("7");
            opperateur = false;
            break;
        case "8":
            affichageEntry("8");
            tabEntry.push("8");
            opperateur = false;
            break;
        case "9" :
            affichageEntry("9");
            tabEntry.push("9");
            opperateur = false;
            break;
        case "*":
            if(!opperateur){
                affichageEntry("x");
                tabEntry.push("x");
                opperateur = true;
            }
            break;
        case "4":
            affichageEntry("4");
            tabEntry.push("4");
            opperateur = false;
            break;
        case "5":
            affichageEntry("5");
            tabEntry.push("5");
            opperateur = false;
            break;
        case "6" :
            affichageEntry("6");
            tabEntry.push("6");
            opperateur = false;
            break;
        case "-":
            if(!opperateur){
                affichageEntry("-");
                tabEntry.push("-");
                opperateur = true;
            }
            break;
        case "1":
            affichageEntry("1");
            tabEntry.push("1");
            opperateur = false;
            break;
        case "2":
            affichageEntry("2");
            tabEntry.push("2");
            opperateur = false;
            break;
        case "3":
            affichageEntry("3");
            tabEntry.push("3");
            opperateur = false;
            break;
        case "+":
            if(!opperateur){
                affichageEntry("+");
                tabEntry.push("+");
                opperateur = true;
            }
            break;
        case "0":
            affichageEntry("0");
            tabEntry.push("0");
            break;
        case ".":
            if(!opperateur){
                affichageEntry(".");
                tabEntry.push(".");
                opperateur = true;
            }
            break;
        case "Enter":
            opperateur = false;
            affichageReset();
            calc = calcul(tabEntry)
            affichageEntry(calc);
            tabEntry =[`${calc}`]
            break;
    }
});
