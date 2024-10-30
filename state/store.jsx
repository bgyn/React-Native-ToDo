import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../state/todo_slice";

const store = configureStore({
    reducer : {
        todo : todoReducer
    }
})

export default store;