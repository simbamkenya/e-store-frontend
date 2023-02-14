import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    product: 'BOOK'
}

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        addProduct: (state) => {

        }

    }
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer