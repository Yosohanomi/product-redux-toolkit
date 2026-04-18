import { createSlice } from "@reduxjs/toolkit";

export const products = createSlice({
    name: "products",
    initialState: {productList: [
        {
            title: "Product",
            id: Date.now()
        }
    ]},
    reducers: {
        addProduct:(state, action)=> {
            state.productList = [...state.productList, action.payload];
        },
    },
})

export const {addProduct} = products.actions

export default products.reducer