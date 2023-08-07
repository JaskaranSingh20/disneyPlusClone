import { configureStore } from "@reduxjs/toolkit";
import movieSliceReducer from "./Slices/movieSlice";
import userSliceReducer from "./Slices/userSlice";

export const store = configureStore({
    reducer: {
        xyz : movieSliceReducer,
        userxyz: userSliceReducer
    }
});

