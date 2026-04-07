import { createSlice } from '@reduxjs/toolkit'

const initialData = {
    products : [],
    cart : [],
    wishlist : [],
}

const dataSlice = createSlice({
    name : "data",
    initialState : initialData,
    reducers : {
        setProducts : (state, action) => {
            state.products = action.payload
        },
    }
}) 

export const {setProducts} = dataSlice.actions
export default dataSlice.reducer