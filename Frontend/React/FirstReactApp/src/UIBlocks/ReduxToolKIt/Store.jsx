import { configureStore } from "@reduxjs/toolkit";
import DataSlice from './DataSlices/DataSlice'

const dataStore = configureStore({
    reducer : {
        data : DataSlice
    },
})

export default dataStore