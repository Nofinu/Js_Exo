let affichage ="",opperateur=true,tabEntry = [],calc=0;

const display = document.querySelector('#display');
const btnEqual = document.querySelector('#btnEqual');

function affichageEntry(text){
    affichage += `${text}`;
    display.textContent = affichage;
}

function affichageReset(){
    affichage ="";
    display.textContent =affichage;
}

function calcul(entry){
    let taboutput=[],somme=entry[0];
    taboutput = concatenation(entry);
    for (let i=1 ; i<taboutput.length ;i++){
        if(taboutput[i] == "x"){
            somme = Number(taboutput[i-1]) * Number(taboutput[i+1]);
            taboutput.splice(i-1,1,`${somme}`)
            taboutput.splice(i,2)
        }
        if(taboutput[i] == "÷"){
            somme = Number(taboutput[i-1]) / Number(taboutput[i+1]);
            taboutput.splice(i-1,1,`${somme}`)
            taboutput.splice(i,2)
        }
        if(taboutput[i] == "%"){
            somme = Number(taboutput[i-1]) % Number(taboutput[i+1]);
            taboutput.splice(i-1,1,`${somme}`)
            taboutput.splice(i,2)
        }
    }
    for(let j=1 ; j<taboutput.length ;j++){
        if(taboutput[j] == "+"){
            somme = Number(taboutput[j-1]) + Number(taboutput[j+1]);
            taboutput.splice(j-1,1,`${somme}`);
            taboutput.splice(j,2);
        }
        if(taboutput[j] == "-"){
            somme = Number(taboutput[j-1]) - Number(taboutput[j+1]);
            taboutput.splice(j-1,1,`${somme}`);
            taboutput.splice(j,2);
        }
    }
    return somme;
}

function concatenation(entry){
    let tabCalc=[],value="";
    for(let i of entry){
        if(Number(i) || Number(i)==0){
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
function attributFocus (){
    btnEqual.focus();
}

//gestion des boutons
document.addEventListener('click',(e)=>{
    switch(e.target.dataset.btn){
        case "C":
            affichageReset();
            tabEntry=[]
            opperateur = false;
            attributFocus();
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

//gestion du clavier 
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
            calc = calcul(tabEntry);
            affichageEntry(calc);
            tabEntry =[`${calc}`];
            break;
    }
});
