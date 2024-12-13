import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"myTodo",
    initialState:{
        task:[]
    },
    reducers:{
        AddTask:(state,actions)=>{
            state.task.push(actions.payload)
        },
        DeletTask:(state, actions)=>{
            state.task=state.task.filter((key)=>key.id!==actions.payload)
        },
        Complited:(state,actions)=>{
        const todo=state.task.find(key=>key.id === actions.payload)
        if(todo) todo.status=true;
        },
        UnComplited:(state,actions)=>{
        const todo=state.task.find(key=>key.id===actions.payload)
        if(todo) todo.status=false;
        },
        EditTask:(state,actions)=>{
            const todo=state.task.find(key=>key.id ===actions.payload.id)
            if(todo) todo.work=actions.payload.work;
        }
    }
})
export const {AddTask,DeletTask,Complited,UnComplited , EditTask}=todoSlice.actions;
export default todoSlice.reducer;