import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../product-reducer';

export const store = configureStore({
    reducer: {
        products: productsReducer,
    }
});