import { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { saveToDo } from "../../feauture/ToDoSlice";

const Input = () => {
  const [input , setinput] = useState("");
  const dispatch = useDispatch();

  const handeSubmit = (e)=>{
    e.preventDefault();
    if(input){
      dispatch(saveToDo({
        id:Date.now(),
        title:input,
        done:false,
      }))
      setinput("")
      return ;
    }
    else{
        alert("please enter some todolist !")
    }
    }

  


  return (
    <div  className="app-form">
      <form  onSubmit={handeSubmit}>
        <input type="text" value={input} onChange={(e)=>{setinput(e.target.value)}}/>
        <button type="submitt">  Add  </button>
      </form>
    </div>
  )
}

export default Input
