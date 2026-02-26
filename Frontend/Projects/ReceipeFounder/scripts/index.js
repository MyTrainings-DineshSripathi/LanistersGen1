// import { FETCH_RECIPE } from "./data.js";

// FETCH_RECIPE("Apam balik")

import { FETCH_CATEGORIES } from "./data.js";



const categoriesContainer = document.getElementById('categories-container')

// selecting the loader element from the DOM
const Loader = document.getElementById('loader')

window.addEventListener('load', () => {
    Loader.style.display = "flex";
    getCategories()
})

async function getCategories(){
    const data = await FETCH_CATEGORIES()
    console.log(data)    
    if(data){
        Loader.style.display = "none"
    }
    
    displayCategories(data)
}


function displayCategories(categories){
    categories.forEach((category) => {
        categoriesContainer.innerHTML += getCard(category, {
            action : `window.location.href='./CategoryView.html?category=${category.strCategory}'`,
            name : 'category'
        })
    }) 
}

export function getCard(item, cardDetails){
    return `
        <div onClick="${cardDetails.action}" class="${cardDetails.name}-container" id = '${item?.strCategory || item?.strMeal}'>
            <div class="image-container">
                <img src = '${item?.strCategoryThumb || item?.strMealThumb}'
            </div>
            <div class="info-continer">
                <h2>${item?.strCategory || item?.strMeal}</h2>
            </div>
        </div>
    `
}