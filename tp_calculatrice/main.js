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

function valueEntry (data){
        affichageEntry(data);
        tabEntry.push(data);
        opperateur = false;
}
function opperateurEntry (data){
    if(!opperateur){
        affichageEntry(data);
        tabEntry.push(data);
        opperateur = true;
}
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
            opperateurEntry(e.target.dataset.btn);
            break;
        case "÷":
            opperateurEntry(e.target.dataset.btn);
            break;
        case "7":
            valueEntry (e.target.dataset.btn);
            break;
        case "8":
            valueEntry (e.target.dataset.btn);
            break;
        case "9" :
            valueEntry (e.target.dataset.btn);
            break;
        case "x":
            opperateurEntry(e.target.dataset.btn);
            break;
        case "4":
            valueEntry (e.target.dataset.btn);
            break;
        case "5":
            valueEntry (e.target.dataset.btn);
            break;
        case "6" :
            valueEntry (e.target.dataset.btn);
            break;
        case "-":
            opperateurEntry(e.target.dataset.btn);
            break;
        case "1":
            valueEntry (e.target.dataset.btn);
            break;
        case "2":
            valueEntry (e.target.dataset.btn);
            break;
        case "3":
            valueEntry (e.target.dataset.btn);
            break;
        case "+":
            opperateurEntry(e.target.dataset.btn);
            break;
        case "0":
            valueEntry (e.target.dataset.btn);
            break;
        case ".":
            opperateurEntry(e.target.dataset.btn);
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
                opperateurEntry("÷");
            }
            break;
        case "7":
            valueEntry (e.key);
            break;
        case "8":
            valueEntry (e.key);
            break;
        case "9" :
            valueEntry (e.key);
            break;
        case "*":
            opperateurEntry("x");
            break;
        case "4":
            valueEntry (e.key);
            break;
        case "5":
            valueEntry (e.key);
            break;
        case "6" :
            valueEntry (e.key);
            break;
        case "-":
            opperateurEntry("-");;
            break;
        case "1":
            valueEntry (e.key);
            break;
        case "2":
            valueEntry (e.key);
            break;
        case "3":
            valueEntry (e.key);
            break;
        case "+":
            opperateurEntry("+");
            break;
        case "0":
            valueEntry (e.key);
            break;
        case ".":
            opperateurEntry(".");
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
