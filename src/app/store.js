import { configureStore } from "@reduxjs/toolkit";

// import ToDoReducer  from"../feauture/ToDoSlice" ;
import todosReducer from "../feauture/ToDoSlice"

const strore =configureStore({
    reducer:{
        todos:todosReducer
    }
}) 

export default  strore ;