import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
   name:"myColor",
   initialState:{
    bgclr:"pink"
   },
   reducers:{
    bgcolor:(state)=>{
state.bgclr="blue"
    }
   }
})
export const {bgcolor}=colorSlice.actions;
export default colorSlice.reducer;