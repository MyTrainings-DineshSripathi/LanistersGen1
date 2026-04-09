import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productsThunk = createAsyncThunk("products/fetch", async (rejectWithValue) => {
    try {
        const response = await axios.get('https://dummyjson.com/products?limit=120');
        console.log(response)
        return response.data.products;
    } catch (error) {
        console.log
        return rejectWithValue(error.message);
    }
});