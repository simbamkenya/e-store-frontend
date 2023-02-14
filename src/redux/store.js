import {configureStore} from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: usersReducer,
        product: productsReducer
    }
})
