import { recipes } from "./recipes.js";
const prepTimeInput = document.querySelector('#prepTime');
const coockTimeInput = document.querySelector('#cookTime');
const recipesContainer = document.querySelector('#recipesContainer');
const myModal = document.querySelector('#myModal');
const modalContent = document.querySelector('#modalContent');
const ingredientsContainer = document.querySelector('#ingredientsContainer');
const form = document.querySelector('#inputContanier');
const inputResearch = document.querySelector('#inputResearch');
const recipesList = [];
for (const key in recipes) {
    recipesList.push(Object.assign({ id: key }, recipes[key]));
}
let recipesListDisplay = [];
function addDivModal(data, contenu = "") {
    let divModal = document.createElement('div');
    divModal.innerHTML = `${contenu} <b>${data}</b>`;
    modalContent.appendChild(divModal);
}
function affichage(recipe) {
    modalContent.innerHTML = "";
    addDivModal(recipe.name);
    addDivModal(recipe.prepTime, "Preparation time : ");
    addDivModal(recipe.cookTime, "Cooking time : ");
    addDivModal(`${recipe.servings}`, "Servings : ");
    let ingredientsModal = document.createElement('div');
    let labelingredients = document.createElement('h2');
    labelingredients.innerText = "Ingredients : ";
    ingredientsModal.appendChild(labelingredients);
    let ingredientsModalNames = document.createElement('ul');
    let ingredientsModalQuantitys = document.createElement('ul');
    ingredientsModal.className = "ingredientsModal";
    recipe.ingredients.forEach(ingredient => {
        let itemlisteName = document.createElement('li');
        let itemlisteQuantity = document.createElement('li');
        itemlisteName.innerText = ingredient.name;
        itemlisteQuantity.innerText = ingredient.amount;
        ingredientsModalNames.appendChild(itemlisteName);
        ingredientsModalQuantitys.appendChild(itemlisteQuantity);
    });
    ingredientsModal.appendChild(ingredientsModalNames);
    ingredientsModal.appendChild(ingredientsModalQuantitys);
    modalContent.appendChild(ingredientsModal); //ajout des ingredients
    let instructionModal = document.createElement('div');
    instructionModal.className = "instructionModal";
    let instructionLabel = document.createElement('h2');
    instructionLabel.innerText = "Intructions : ";
    instructionModal.appendChild(instructionLabel);
    let instructionModalOl = document.createElement('ol');
    instructionModalOl.className = "instructionModalOl";
    for (let instruction in recipe.instructions) {
        let itemInstruction = document.createElement('li');
        itemInstruction.innerText = recipe.instructions[instruction];
        instructionModalOl.appendChild(itemInstruction);
    }
    instructionModal.appendChild(instructionModalOl);
    modalContent.appendChild(instructionModal);
    myModal.className = "modalOn";
}
function displayRecipes(liste) {
    recipesContainer.innerHTML = "";
    liste.forEach(recipe => {
        let divRecette = document.createElement('div');
        divRecette.className = "recipes";
        let title = document.createElement('h1');
        title.innerText = recipe.name;
        divRecette.appendChild(title);
        divRecette.appendChild(document.createElement('hr'));
        let divInstructions = document.createElement('div');
        divInstructions.innerText = `${recipe.instructions[0]}\n ${recipe.instructions[1]}`;
        divRecette.appendChild(divInstructions);
        let btnRecipe = document.createElement('button');
        btnRecipe.className = "btnRecipe";
        btnRecipe.innerText = "Afficher";
        btnRecipe.addEventListener('click', () => {
            affichage(recipe);
        });
        divRecette.appendChild(btnRecipe);
        recipesContainer.appendChild(divRecette);
    });
}
function sortList(value) {
    recipesListDisplay = [];
    recipesList.forEach(recipe => {
        let [time] = recipe.prepTime.split(' ');
        if (Number(time) <= value) {
            recipesListDisplay.push(recipe);
        }
    });
}
function filerByPrepTime() {
    const input = prepTimeInput.value;
    switch (input) {
        case "1":
            sortList(10);
            break;
        case "2":
            sortList(20);
            break;
        case "3":
            sortList(30);
            break;
        case "4":
            sortList(40);
            break;
    }
}
function SuprListe(value) {
    recipesListDisplay.forEach(recipe => {
        let [time] = recipe.cookTime.split(' ');
        if (Number(time) > value) {
            const index = recipesListDisplay.indexOf(recipe);
            recipesListDisplay.splice(index, 1);
        }
    });
}
function filterByCoockTime() {
    const input = coockTimeInput.value;
    switch (input) {
        case "1":
            SuprListe(10);
            break;
        case "2":
            SuprListe(20);
            break;
        case "3":
            SuprListe(30);
            break;
        case "4":
            SuprListe(40);
            break;
    }
}
function sortchecked(value) {
    let test = false;
    recipesListDisplay.forEach(recipe => {
        for (const ingredient in recipe.ingredients) {
            if (recipe.ingredients[ingredient].name === value) {
                test = true;
            }
        }
        if (!test) {
            const index = recipesListDisplay.indexOf(recipe);
            recipesListDisplay.splice(index, 1);
        }
    });
}
function GeneIngredientsInput(liste) {
    let listeIngredients = [];
    ingredientsContainer.innerHTML = "";
    liste.forEach(recipe => {
        for (const ingredient in recipe.ingredients) {
            const test = listeIngredients.findIndex(ingredientListe => ingredientListe === recipe.ingredients[ingredient].name);
            if (test === -1) {
                listeIngredients.push(recipe.ingredients[ingredient].name);
                let input = document.createElement("INPUT");
                let inputlabel = document.createElement('label');
                let div = document.createElement('div');
                div.className = "divIngredient";
                inputlabel.innerText = recipe.ingredients[ingredient].name;
                input.setAttribute("type", "radio");
                input.setAttribute("value", recipe.ingredients[ingredient].name);
                input.addEventListener('change', () => {
                    console.log('checked');
                    sortchecked(input.value);
                    displayRecipes(recipesListDisplay);
                });
                div.appendChild(inputlabel);
                div.appendChild(input);
                ingredientsContainer.appendChild(div);
            }
        }
    });
}
function sortByInputResearch(value) {
    console.log(recipesListDisplay);
    recipesListDisplay.forEach(recipe => {
        console.log(recipe.name);
        if (!recipe.name.includes(value)) {
            const index = recipesListDisplay.indexOf(recipe);
            recipesListDisplay.splice(index, 1);
        }
    });
    console.log(recipesListDisplay);
}
prepTimeInput.addEventListener('change', () => {
    filerByPrepTime();
    filterByCoockTime();
    GeneIngredientsInput(recipesListDisplay);
    displayRecipes(recipesListDisplay);
});
coockTimeInput.addEventListener('change', () => {
    filerByPrepTime();
    filterByCoockTime();
    GeneIngredientsInput(recipesListDisplay);
    displayRecipes(recipesListDisplay);
});
window.addEventListener('click', (e) => {
    if (e.target === myModal) {
        myModal.className = "modalOff";
    }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    recipesListDisplay = [...recipesList];
    prepTimeInput.value = "4";
    coockTimeInput.value = "4";
    inputResearch.value = "";
    inputResearch.focus();
    GeneIngredientsInput(recipesListDisplay);
    displayRecipes(recipesListDisplay);
});
document.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        console.log('entre');
        sortByInputResearch(inputResearch.value);
        GeneIngredientsInput(recipesListDisplay);
        displayRecipes(recipesListDisplay);
    }
});
recipesListDisplay = [...recipesList];
displayRecipes(recipesListDisplay);
GeneIngredientsInput(recipesListDisplay);
console.log(recipesList);
