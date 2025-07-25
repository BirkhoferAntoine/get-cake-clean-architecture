import { cartSlice } from './cart-slice';
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        productsCart: cartSlice.reducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;