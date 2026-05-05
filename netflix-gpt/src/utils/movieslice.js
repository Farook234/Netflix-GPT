import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name : "movie",
    initialState : {
        nowplayingmovies : null,
        trailerVideo : null,
    },
    reducers : {
        addnowplayingmovies : (state, action) => {
            state.nowplayingmovies = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        }
    },
})

export const { addnowplayingmovies, addTrailerVideo } = movieslice.actions;

export default movieslice.reducer;