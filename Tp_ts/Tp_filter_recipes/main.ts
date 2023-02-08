import { recipes } from "./recipes/recipes.js";
import Recipe from "./interface/Recipe.js";

const prepTimeInput = document.querySelector('#prepTime') as HTMLInputElement
const coockTimeInput =document.querySelector('#cookTime') as HTMLInputElement
const recipesContainer = document.querySelector('#recipesContainer') as HTMLDivElement
const myModal = document.querySelector('#myModal') as HTMLDivElement
const modalContent = document.querySelector('#modalContent') as HTMLDivElement
const ingredientsContainer = document.querySelector('#ingredientsContainer') as HTMLDivElement
const btnreset = document.querySelector('#btnreset') as HTMLButtonElement
const inputResearch = document.querySelector('#inputResearch') as HTMLInputElement

const recipesList: Recipe[] = [];
for (const key in recipes) {
  recipesList.push({id: key, ...recipes[key]})
}
let recipesListDisplay :Recipe[] = []
let recipesListDisplaySelect :Recipe[] = []

function addDivModal(data:string,contenu:string=""):void{
  let divModal = document.createElement('div')
  divModal.innerHTML = `${contenu} <b>${data}</b>`
  modalContent.appendChild(divModal)
}

function affichage (recipe:Recipe):void{
  modalContent.innerHTML =""
  addDivModal(recipe.name)
  addDivModal(recipe.prepTime,"Preparation time : ")
  addDivModal(recipe.cookTime,"Cooking time : ")
  addDivModal(`${recipe.servings}`,"Servings : ") 

  let ingredientsModal = document.createElement('div')
  let labelingredients = document.createElement('h2')
  labelingredients.innerText = "Ingredients : "
  ingredientsModal.appendChild(labelingredients)
  let ingredientsModalNames = document.createElement('ul')
  let ingredientsModalQuantitys = document.createElement('ul')
  ingredientsModal.className = "ingredientsModal"
  recipe.ingredients.forEach(ingredient=>{
    let itemlisteName = document.createElement('li')
    let itemlisteQuantity = document.createElement('li')
    itemlisteName.innerText = ingredient.name
    itemlisteQuantity.innerText = ingredient.amount
    ingredientsModalNames.appendChild(itemlisteName)
    ingredientsModalQuantitys.appendChild(itemlisteQuantity)
  })
  ingredientsModal.appendChild(ingredientsModalNames)
  ingredientsModal.appendChild(ingredientsModalQuantitys)
  modalContent.appendChild(ingredientsModal)//ajout des ingredients

  let instructionModal = document.createElement('div')
  instructionModal.className = "instructionModal"
  let instructionLabel = document.createElement('h2')
  instructionLabel.innerText = "Intructions : "
  instructionModal.appendChild(instructionLabel)
  let instructionModalOl = document.createElement('ol')
  instructionModalOl.className = "instructionModalOl"
  for(let instruction in recipe.instructions){
    let itemInstruction = document.createElement('li')
    itemInstruction.innerText = recipe.instructions[instruction]
    instructionModalOl.appendChild(itemInstruction)
  }
  instructionModal.appendChild(instructionModalOl)
  modalContent.appendChild(instructionModal)

  myModal.className = "modalOn"
}

function displayRecipes(liste:Recipe[]):void{
  recipesContainer.innerHTML =""
  liste.forEach(recipe =>{
    let divRecette = document.createElement('div')
    divRecette.className = "recipes"
    let title = document.createElement('h1')
    title.innerText = recipe.name
    divRecette.appendChild(title)
    divRecette.appendChild(document.createElement('hr'))
    let divInstructions = document.createElement('div')
    divInstructions.innerText = `${recipe.instructions[0]}\n ${recipe.instructions[1]}`
    divRecette.appendChild(divInstructions)
    let btnRecipe = document.createElement('button')
    btnRecipe.className = "btnRecipe"
    btnRecipe.innerText = "Afficher"
    btnRecipe.addEventListener('click',()=>{
      affichage (recipe)

    })
    divRecette.appendChild(btnRecipe)
    recipesContainer.appendChild(divRecette)
  })
}

function sortList (value:number):void{
  recipesListDisplay = []
  recipesList.forEach(recipe =>{
    let [time]=recipe.prepTime.split(' ')
      if(Number(time)<=value){
        recipesListDisplay.push(recipe)
      }
  })
}

function filerByPrepTime ():void{
    const input = prepTimeInput.value
    switch(input){
      case "1":
        sortList(10)
        break;
      case "2":
        sortList(20)
        break;
      case "3":
        sortList(30)
        break;
      case "4":
        sortList(40)
        break;
    }
}

function SuprListe (value:number):void{
  recipesListDisplay.forEach(recipe =>{
    let [time]=recipe.cookTime.split(' ')
      if(Number(time)>value){
        const index = recipesListDisplay.indexOf(recipe)
        recipesListDisplay.splice(index,1)
      }
  })
}

function filterByCoockTime ():void{
  const input = coockTimeInput.value
  switch(input){
    case "1":
      SuprListe(10)
      break;
    case "2":
      SuprListe(20)
      break;
    case "3":
      SuprListe(30)
      break;
    case "4":
      SuprListe(40)
      break;
  }
}

function sortSelect (value:string):void{
  recipesListDisplaySelect = []
  recipesListDisplay.filter(recipe => {
    recipe.ingredients.forEach(name =>{
      if(name.name == value){
        console.log(name.name === value)
        recipesListDisplaySelect.push(recipe)
      }
    })
  })
}


function GeneIngredientsInput(liste:Recipe[]):void{
  let listeIngredients:string[] = []
  ingredientsContainer.innerHTML="<select id='selectIngredient' multiple></select>"
  const select = document.querySelector('#selectIngredient') as HTMLSelectElement
  liste.forEach(recipe =>{
    for(const ingredient in recipe.ingredients){
      const test = listeIngredients.findIndex(ingredientListe => ingredientListe === recipe.ingredients[ingredient].name)
      if(test === -1){
        listeIngredients.push(recipe.ingredients[ingredient].name)
        let option = document.createElement('option')
        option.innerText = recipe.ingredients[ingredient].name
        option.setAttribute("value",recipe.ingredients[ingredient].name)
        select.appendChild(option)
      }
    }
  })
  select.addEventListener('change',()=>{
    let selected = select.selectedOptions
    console.log(selected)
    for(let i=0;i<selected.length;i++){
      sortSelect(selected[i].value)
      displayRecipes(recipesListDisplaySelect)
    }
  })
  ingredientsContainer.appendChild(select)
}

function sortByInputResearch (value:string):void{
  recipesListDisplay = recipesListDisplay.filter(recipe => recipe.name.startsWith(value))
}

prepTimeInput.addEventListener('change',()=>{
    filerByPrepTime()
    filterByCoockTime()
    GeneIngredientsInput(recipesListDisplay)
    displayRecipes(recipesListDisplay)
})

coockTimeInput.addEventListener('change',()=>{
  filerByPrepTime()
  filterByCoockTime()
  GeneIngredientsInput(recipesListDisplay)
  displayRecipes(recipesListDisplay)
})

window.addEventListener('click',(e:Event)=>{
  if(e.target === myModal){
    myModal.className = "modalOff"
  }
})

btnreset.addEventListener('click',()=>{
  recipesListDisplay = [...recipesList]
  prepTimeInput.value = "4"
  coockTimeInput.value = "4"
  inputResearch.value = ""
  inputResearch.focus()
  GeneIngredientsInput(recipesListDisplay)
  displayRecipes(recipesListDisplay)
})

document.addEventListener('keydown',(e)=>{
  if(e.key === "Enter"){
    sortByInputResearch(inputResearch.value)
    GeneIngredientsInput(recipesListDisplay)
    displayRecipes(recipesListDisplay)
  }
})

inputResearch.addEventListener('input',()=>{
  if(inputResearch.value === ""){
    recipesListDisplay = [...recipesList]
    GeneIngredientsInput(recipesListDisplay)
    displayRecipes(recipesListDisplay)
  }
})

recipesListDisplay = [...recipesList]
displayRecipes(recipesListDisplay)
GeneIngredientsInput(recipesListDisplay)



