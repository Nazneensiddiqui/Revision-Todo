import { createSlice } from "@reduxjs/toolkit";

const mybgcolorSlice=createSlice({
    name:"myBgcolor",
    initialState:{
        clrbg:"green"
    },
    reducers:{
        bgchange:(state, actions)=>{
            state.clrbg=actions.payload
        }
    }
})
export const {bgchange}=mybgcolorSlice.actions;
export default mybgcolorSlice.reducer;