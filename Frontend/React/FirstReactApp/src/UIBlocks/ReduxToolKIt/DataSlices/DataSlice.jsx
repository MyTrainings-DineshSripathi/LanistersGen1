import { createSlice } from '@reduxjs/toolkit'
import { productsThunk } from './DataFetchingAsyncThunk'
import Products from '../../ProductsPage/Products'

const initialData = {
    products : [],
    cart : [],
    wishlist : [],
    loading : false,
    error : null,
}

const dataSlice = createSlice({
    name : "data",
    initialState : initialData,
    reducers : {
        setProducts : (state, action) => {
            state.products = action.payload
        },
    },
    extraReducers : (builder) => {
        builder.addCase(productsThunk.pending, (state) => {
            console.log("loading.....")
            state.products = []
            state.loading = true
            state.error = null
        })
        .addCase(productsThunk.fulfilled, (state, action) => {
            console.log(action)
            state.products = action.payload
            state.loading = false
            state.error = null
        })
        .addCase(productsThunk.rejected, (state, action) => {
            console.log(action)
            state.products = []
            state.loading = false
            state.error = action.payload
        })
    }
}) 

export const {setProducts} = dataSlice.actions
export default dataSlice.reducer