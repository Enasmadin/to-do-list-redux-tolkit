
import { useSelector } from 'react-redux';
import './App.css'


import Input from "./components/input/Input"

import Inputetalis from './components/InputItem/Inputetalis';
import { ToDoList } from './feauture/ToDoSlice';

function App() {
  const toDoList = useSelector(ToDoList)
   
    console.log(toDoList);

  return (
   
    <div className='app'>
       <div  className='ToDoContainer'> 
       {
        toDoList.map((todo)=>(
          <Inputetalis key={todo.id} id={todo.id} title={todo.title} done={todo.done}/>
          // <InputItem key={todo.id} id={todo.id} title={todo.title} done={todo.done}/>
        ))
       }
      
       </div>
       <Input/>
    </div>
 
  
  )
}

export default App
