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