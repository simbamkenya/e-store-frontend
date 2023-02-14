import {configureStore} from '@reduxjs/toolkit';
import  cartReducer  from './features/cartSlice';
import productReducer  from './features/productsSlice';
import  userReducer  from './features/usersSlice';


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        product: productReducer
    }
})
