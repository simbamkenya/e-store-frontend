import { createSlice } from "@reduxjs/toolkit";

const initialState ={

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem: () => {

        }

    }
})

export const { addItem } = cartSlice.actions
export default cartSlice.reducer