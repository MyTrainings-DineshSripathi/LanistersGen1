import { FETCH_RECIPE_BY_ID } from "./data.js";


// getting the recipe id from the url params
const urlParams = new URLSearchParams(window.location.search)
const recipeId = urlParams.get('id')

const Loader = document.getElementById('loader')

const recipeDetailsContainer = document.querySelector('.recipe-details')

async function getRecipeDetails(){
    const data = await FETCH_RECIPE_BY_ID(recipeId)
    displayRecipeDetails(data)
}

window.addEventListener('load', () => {
    // Loader.style.display = "flex";
    getRecipeDetails()
})

function generateIngredients(recipe) {
  let items = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      items.push(`
        <li>
          <span class="ingredient-name">${ingredient}</span>
          ${measure ? `<span class="ingredient-measure">${measure}</span>` : ""}
        </li>
      `);
    }
  }

  return items.join("");
}

function generateInstructions(instructions) {
  if (!instructions) return "";

  return instructions
    .split(/\r?\n/)
    .filter(step => step.trim() !== "")
    .map((step, index) => `
      <div class="instruction-step">
        <span class="step-number">${index + 1}</span>
        <p>${step}</p>
      </div>
    `)
    .join("");
}

function displayRecipeDetails(recipe){
    recipeDetailsContainer.innerHTML = `
        <div class="recipe-detail">

            <!-- LEFT SIDE -->
            <div class="recipe-main">

                <div class="recipe-header">
                <img class="recipe-image" src="${recipe.strMealThumb}" alt="${recipe.strMeal}" />
                <div class="recipe-meta">
                    <h1>${recipe.strMeal}</h1>
                    <div class="meta-info">
                    <span class="area">${recipe.strArea}</span>
                    ${recipe.strTags ? recipe.strTags.split(',').map(tag =>
                        `<span class="tag">${tag.trim()}</span>`
                    ).join('') : ''}
                    </div>
                </div>
                </div>

                <div class="ingredients-card">
                <h2>Ingredients</h2>
                <ul class="ingredients-list">
                    ${generateIngredients(recipe)}
                </ul>
                </div>

            </div>

            <!-- RIGHT SIDE -->
            <div class="recipe-content">

                <div class="instructions-card">
                <h2>Instructions</h2>
                <div class="instructions-list">
                    ${generateInstructions(recipe.strInstructions)}
                </div>
                </div>

                ${recipe.strYoutube ? `
                <div class="video-card">
                    <h2>Video Tutorial</h2>
                    <a href="${recipe.strYoutube}" target="_blank">
                    Watch on YouTube
                    </a>
                </div>
                ` : ''}

            </div>

            </div>
    `
}
