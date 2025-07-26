import { createSlice } from "@reduxjs/toolkit";


const movieSlice= createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        trailerMovie:null,
    },
    reducers:{
        addnowPlayingMovie:(state,action)=>{
           state.nowPlayingMovies =action.payload;
        },
        addTrailerMovie:(state,action)=>{
           state.trailerMovie =action.payload;
        }
    }
});

export const  {addnowPlayingMovie,addTrailerMovie}= movieSlice.actions;
export default movieSlice.reducer;