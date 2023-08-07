import {createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state = initialState, action)=>{
            state.movies = action.payload;
        }
    }
})

export const {setMovies} =  movieSlice.actions;   // action creator

export default movieSlice.reducer;  