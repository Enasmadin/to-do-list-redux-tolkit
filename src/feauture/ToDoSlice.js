import { createSlice } from "@reduxjs/toolkit";

const initialState = { toDoList:[] } ;

const ToDoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveToDo:(state,action)=> {
      state.toDoList.push(action.payload)
    },
    saveCheck :(state,action)=>{
        state.toDoList.map((todo)=>{
            if(action.payload === todo.id){
                return todo.done ? (todo.done = false ) :(todo.done = true ) ;
            }
            
        })
    }
  },
})

 export const { saveToDo, saveCheck } = ToDoSlice.actions;
 export  const ToDoList = (state)=>state.todos.toDoList ;
 export default ToDoSlice.reducer ;


