// Ninjas API : https://api-ninjas.com/api/recipe
// Meal DB API : https://www.themealdb.com/api.php

/* 
    module in javascript : 
        exporting and importing data from one file to another file in javascript is called module in javascript.

        => export : exporting data from one file to another file in javascript is called export in javascript.

        syntax : 
            export const dataVariableName

        => Default Export  : exporting data from one file to another file in javascript is called default export in javascript. Can only have one default export in a file.

        syntax : 
            export default dataVariableName

        => import : importing data from one file to another file in javascript is called import in javascript.

        syntax : 
            import {dataVariableName} from 'path'

        => importing Default Export : importing data from one file to another file in javascript is called importing default export in javascript.

        syntax : 
            import dataVariableName from 'path'
*/

// const X_API_KEY = "VtxleZsQ76mUlsqYClvUgRCcPZmCudxRngfveXl8"


// // will fetch the recipe for us using the recipe name.
// export const FETCH_RECIPE = async (recipe) => {
//     const requestHeader = {
//         method: "GET",
//         headers : {
//             "X-Api-Key" : `${X_API_KEY}`
//         }
//     }
//     try{
//         const response = await fetch(`https://api.api-ninjas.com/v3/recipe?title=${recipe}`, requestHeader)
        
//         const data = await response.json()

//         console.log(data)
//     }catch(error){
//         console.error("Error fetching recipes : ", error);
//     }
// }


export const FETCH_CATEGORIES = async () => {

    try{
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        const data = await response.json()
        console.log(data)
        return data.categories
    }catch(error){
        console.error("Unexpected error occured", error)
    }
}

