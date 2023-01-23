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
            taboutput.splice(i-1,1,`${somme}`);
            taboutput.splice(i,2);
        }
        if(taboutput[i] == "÷"){
            somme = Number(taboutput[i-1]) / Number(taboutput[i+1]);
            taboutput.splice(i-1,1,`${somme}`);
            taboutput.splice(i,2);
        }
        if(taboutput[i] == "%"){
            somme = Number(taboutput[i-1]) % Number(taboutput[i+1]);
            taboutput.splice(i-1,1,`${somme}`);
            taboutput.splice(i,2);
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
    return Math.round(somme*100)/100;
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
        attributFocus ();
}
function opperateurEntry (data){
    if(!opperateur){
        affichageEntry(data);
        tabEntry.push(data);
        opperateur = true;
        attributFocus ();
    }
}
function defCas(evenement){
    switch(evenement){
        case "C":
            affichageReset();
            tabEntry=[]
            opperateur = false;
            attributFocus();
            break;
        case "Escape":
            affichageReset();
            tabEntry=[]
            opperateur = false;
            attributFocus();
            break;
        case "π":
            affichageEntry(evenement);
            tabEntry.push(`3.14`);
            opperateur = false;
            attributFocus();
            break;
        case "%":
            opperateurEntry(evenement);
            break;
        case "÷":
            opperateurEntry(evenement);
            break;
        case "/":
            opperateurEntry("÷");
            break;
        case "7":
            valueEntry (evenement);
            break;
        case "8":
            valueEntry (evenement);
            break;
        case "9" :
            valueEntry (evenement);
            break;
        case "x":
            opperateurEntry(evenement);
            break;
        case "*":
            opperateurEntry("x")
            break;
        case "4":
            valueEntry (evenement);
            break;
        case "5":
            valueEntry (evenement);
            break;
        case "6" :
            valueEntry (evenement);
            break;
        case "-":
            opperateurEntry(evenement);
            break;
        case "1":
            valueEntry (evenement);
            break;
        case "2":
            valueEntry (evenement);
            break;
        case "3":
            valueEntry (evenement);
            break;
        case "+":
            opperateurEntry(evenement);
            break;
        case "0":
            valueEntry (evenement);
            break;
        case ".":
            opperateurEntry(evenement);
            break;
        case "=":
            opperateur = false;
            affichageReset();
            calc = calcul(tabEntry);
            affichageEntry(calc);
            tabEntry =[`${calc}`];
            break;
    }
}

//gestion des boutons
document.addEventListener('click',(e)=>{
    defCas(e.target.dataset.btn);
});

//gestion du clavier 
document.addEventListener('keydown',(e)=>{
    defCas(e.key);
});