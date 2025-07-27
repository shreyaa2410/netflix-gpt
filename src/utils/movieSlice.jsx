import { createSlice } from "@reduxjs/toolkit";


const movieSlice= createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        trailerMovie:null,
        topMovie:null
    },
    reducers:{
        addnowPlayingMovie:(state,action)=>{
           state.nowPlayingMovies =action.payload;
        },
        addTrailerMovie:(state,action)=>{
           state.trailerMovie =action.payload;
        },
        addTopMovie:(state,action)=>{
           state.topMovie =action.payload;
        }
    }
});

export const  {addnowPlayingMovie,addTrailerMovie,addTopMovie}= movieSlice.actions;
export default movieSlice.reducer;