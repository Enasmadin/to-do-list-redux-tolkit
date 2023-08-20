import { useDispatch } from "react-redux";
import "./InputItem.css";
import { saveCheck } from "../../feauture/ToDoSlice";

const Inputetalis = ({title ,done,id}) => {
    const dispatch = useDispatch();
    const handelChange = ()=>{
       dispatch(saveCheck(id))
    }
  return (
    
       <div className="Input-Item">
        <input   type="checkbox"   id={id} className="checBox" checked={done} onChange={handelChange}/>
        {/* <label htmlFor="1">    <label/> */}
        <label  htmlFor={id}>  {title}</label>

      
    </div>
  
  )
}

export default Inputetalis
