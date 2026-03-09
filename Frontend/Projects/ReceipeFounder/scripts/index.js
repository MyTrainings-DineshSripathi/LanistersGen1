// import { FETCH_RECIPE } from "./data.js";

// FETCH_RECIPE("Apam balik")

import { FETCH_CATEGORIES } from "./data.js";
import { getCard } from "./UIBlocks.js";



const categoriesContainer = document.getElementById('categories-container')

// selecting the loader element from the DOM
export const Loader = document.getElementById('loader')
const searchBar = document.getElementById('search')

let categoriesData = null

window.addEventListener('load', () => {
    Loader.style.display = "flex";
    getCategories()
})


searchBar.addEventListener('change', (e) => {
    console.log(e.target.value)
    const data = categoriesData.filter((category) => category.strCategory.toLowerCase().includes(e.target.value))

    displayCategories(data)
})

async function getCategories(){
    const data = await FETCH_CATEGORIES()
    console.log(data)    
    if(data){
        Loader.style.display = "none"
    }
    
    categoriesData = data
    console.log(categoriesData)
    displayCategories(categoriesData)
}


function displayCategories(categories){
    categoriesContainer.innerHTML = ""
    categories.forEach((category) => {
        categoriesContainer.innerHTML += getCard(category, {
            action : `window.location.href='./CategoryView.html?category=${category.strCategory}'`,
            name : 'category'
        })
    }) 
}

