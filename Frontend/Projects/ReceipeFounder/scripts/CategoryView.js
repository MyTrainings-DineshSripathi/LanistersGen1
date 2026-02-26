import { FETCH_RECIPES_BY_CATEGORY } from "./data.js";
import { getCard } from "./index.js";

// getting the category from the url params
const urlParams = new URLSearchParams(window.location.search)
const category = urlParams.get('category');

// selecting the loader element from the DOM
const Loader = document.getElementById('loader')

const title = document.querySelector('.title')
const recipesContainer = document.querySelector('.recipes-container')
const count = document.querySelector('.count')

title.innerText = category

window.addEventListener('load', () => {
    Loader.style.display = "flex";
    //calling the api to fetch the recipes based on the category
    getRecipesBasedOnCategory()
})

// fetch the recipes based on category
async function getRecipesBasedOnCategory(){
    const data = await FETCH_RECIPES_BY_CATEGORY(category)
    console.log(data)
    if(data){
        Loader.style.display = "none"
    }

    count.innerText = data.length

    displayRecipes(data)
}

function displayRecipes(recipes){
    recipes.forEach((recipe) => {
        recipesContainer.innerHTML += getCard(recipe, {
            action : `window.location.href='./CategoryView.html?id=${recipe.idMeal}'`,
            name : 'recipe'
        })
    })
}

