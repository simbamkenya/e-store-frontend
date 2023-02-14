import { createSlice } from "@reduxjs/toolkit";

const initialState ={

}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addUser: () => {

        }

    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer