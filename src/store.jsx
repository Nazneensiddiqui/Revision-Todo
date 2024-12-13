import { configureStore } from "@reduxjs/toolkit";
import contReduser from "./Slices/countrSlice";
import colorReducer from "./Slices/colorSlice";
import bgReducer from "./Slices/bgcolorSlice";
import todoReducer from "./Slices/TodoSlice"

const Store=configureStore({
    reducer:{
        //your redusers
        myCounter:contReduser,
        myColor:colorReducer,
        myBgcolor:bgReducer,
        myTodo:todoReducer
    }
})
export default Store;