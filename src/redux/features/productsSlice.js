import { createSlice } from "@reduxjs/toolkit";

const initialState ={

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