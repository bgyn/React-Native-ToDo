import {createSlice} from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name : "todo",
    initialState : {
        currentId : 0,
        todos : [
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
            const itemIndex = state.todos.findIndex((item) => item.id === action.payload);
  
            if (itemIndex > -1) {
              const currentState = state.todos[itemIndex].state;
              state.todos[itemIndex].state = currentState === "todo" ? "done" : "todo";
              state.todos.push(state.todos.splice(itemIndex, 1)[0]);
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