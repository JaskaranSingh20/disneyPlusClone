import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    photo: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setSignIn: (state, action) =>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },

        setSignOut: (state) =>{
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
})

export const {setSignIn, setSignOut} = userSlice.actions;

export default userSlice.reducer;