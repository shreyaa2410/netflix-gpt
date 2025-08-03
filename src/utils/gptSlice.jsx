import { createSlice } from "@reduxjs/toolkit";

const gptSlice= createSlice({
    name:'gpt',
    initialState:{
        toggleGpt:false,
    },
    reducers:{
       toggleSearchGpt: (state)=>{
         state.toggleGpt= !state.toggleGpt;
       }
    }
})

export const {toggleSearchGpt}= gptSlice.actions;
export  default gptSlice.reducer;