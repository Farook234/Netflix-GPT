import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name : "movie",
    initialState : {
        nowPlayingMovies : null,
        PopularMovies : null,
        
        trailerVideo : null,
    },
    reducers : {
        addnowplayingmovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.PopularMovies = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        }
    },
})

export const { addnowplayingmovies, addTrailerVideo, addPopularMovies } = movieslice.actions;

export default movieslice.reducer;