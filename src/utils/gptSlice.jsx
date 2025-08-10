import { createSlice } from "@reduxjs/toolkit";

const gptSlice= createSlice({
    name:'gpt',
    initialState:{
        toggleGpt:false,
        languageChange:'en',
    },
    reducers:{
       toggleSearchGpt: (state)=>{
         state.toggleGpt= !state.toggleGpt;
       },
       getLanguageChanger:(state,action)=>{
        state.languageChange=action.payload
       }
    }
})

export const {toggleSearchGpt,getLanguageChanger}= gptSlice.actions;
export  default gptSlice.reducer;