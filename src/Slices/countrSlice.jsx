import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"myCounter",
    initialState:{
        cnt:0
    },
    reducers:{
        increment:(state)=>{
            state.cnt=state.cnt+1;
        },
        decrement:(state)=>{
            state.cnt=state.cnt-1;
        }
    }
})
export const {increment,decrement}=counterSlice.actions;//....App.jsx
export default counterSlice.reducer;//......Store.jsx