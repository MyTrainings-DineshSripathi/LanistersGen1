// import { FETCH_RECIPE } from "./data.js";

// FETCH_RECIPE("Apam balik")

import { FETCH_CATEGORIES } from "./data.js";

const Loader = document.getElementById('loader')

const categoriesContainer = document.getElementById('categories-container')

async function getCategories(){
    const data = await FETCH_CATEGORIES()
    
    if(data){
        Loader.style.display = "none"
    }
    
    displayCategories(data)
}


function displayCategories(categories){
    categories.forEach((category) => {
        categoriesContainer.innerHTML += getCategoryCard(category)
    }) 
}

function getCategoryCard(category){
    return `
        <div class="category-container" id = '${category.strCategory}'>
            <div class="image-container">
                <img src = '${category.strCategoryThumb}'
            </div>
            <div class="info-continer">
                <h2>${category.strCategory}</h2>
            </div>
        </div>
    `
}


getCategories()

window.addEventListener('load', () => {
    Loader.style.display = "flex";
})