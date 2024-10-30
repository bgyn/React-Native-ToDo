import {createSlice} from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name : "todo",
    initialState : {
        currentId : 4,
        todos : [
            {
                id : 1,
                text : "Complete this project",
                state : "todo",
            },
            {
                id : 2,
                text : "Bike service",
                state : "todo",
            },
            {
                id : 3,
                text : "Learn react native",
                state : "done",
            },
        ],
    },
    reducers :{
        addTodo : (state,action) => {
            state.todos.push({
                id : state.currentId++,
                text : action.payload.trim(),
                state : "todo",
            })
        },
        changeTodoState : (state,action)=>{
            const item = state.todos.findIndex((item)=> item.id === action.payload);
            if(item>-1){
                state.todos[item].state === "todo" ? "done" : "todo";
                state.todos.push(state.todos.splice(item,1)[0]);
            }
        },
        deleteTodo : (state,action)=>{
            const item = state.todos.findIndex((item)=> item.id === action.payload);
            if(item>-1){
                state.todos.push(state.todos.splice(item,1));
            }
        }
    }
})

export default todoSlice.reducer;
export const {addTodo,changeTodoState,deleteTodo} = todoSlice.actions;