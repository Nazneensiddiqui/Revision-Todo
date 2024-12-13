import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./Slices/countrSlice";
import { bgcolor } from "./Slices/colorSlice";
import { useState } from "react";
import { bgchange } from "./Slices/bgcolorSlice";
import { AddTask,DeletTask,Complited,UnComplited,EditTask } from "./Slices/TodoSlice";


const App=()=>{
  const[input , setInput]=useState("")
  const[mywork,setMywork]=useState("")
  const[myid,setMyid]=useState("")
  const[btnStatus, setBtnStatus]=useState(true)
  const count=useSelector((state)=>state.myCounter.cnt);
  const clr=useSelector((state)=>state.myColor.bgclr);
  const bgc=useSelector((state)=>state.myBgcolor.clrbg);
  const todo=useSelector((state)=>state.myTodo.task)
  const dispatch=useDispatch();
//..........EditData........................................................................
const Submite=()=>{
  dispatch(AddTask({id:Date.now() , work:mywork, status:false}))
  setMywork("")
}

//...........delete..............
const deletData=(id)=>{
  dispatch(DeletTask(id))
  }
//............complitation....................
const complitation=(id,status)=>{
if(status)
{
  dispatch(UnComplited(id))
}
else{
  dispatch(Complited(id))
}
}

//...............EditData...........
const Editdata=(id,wrk)=>{
  setMywork(wrk);
  setBtnStatus(false);
  setMyid(id)
}

const EditDataSave=()=>{
  dispatch(EditTask({id:myid, work:mywork}))
  setBtnStatus(true);
  setMywork("")
}




let sno=0;
const ans=todo.map((key)=>{
  sno++;
return(
  <>
  <tr>
    <td>{sno}</td>
    <td>{key.status?(<span style={{color:"red", textDecoration:"line-through"}}>{key.work}</span>):
    (<span style={{color:"black",textDecoration:"none"}}>{key.work}</span>)}</td>
   <td><button onClick={()=>{deletData(key.id)}}>Delete</button></td> 
   <td><button onClick={()=>{complitation(key.id , key.status)}}>
    {key.status? "UnComplited" : "Complited"}</button></td>
   <td><button onClick={()=>{Editdata(key.id, key.work)}}>Edit</button></td>
  </tr>
  </>
)
})

  return(
    <>
   <center>
    <h1>My Counter App</h1>
    <button onClick={()=>{dispatch(increment())}}>Increment</button>
    <h1>{count}</h1>
    <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    <br/>
    {/* ................................................................................................ */}
    <h1>Color change App</h1>
    <button onClick={()=>{dispatch(bgcolor())}}>click here</button>
    <br/><br/>
    <div style={{width:"300px", height:"200px",border:"1px solid blue" , backgroundColor:clr}}></div>

    {/* ........................................................................................................ */}
    <h1>bg color change with input box</h1>
    Enter color Name: <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
    <button onClick={()=>{dispatch(bgchange(input))}}>change color</button>
    <br/>
    <br/>
    <div style={{width:"300px", height:"200px",border:"1px solid blue" , backgroundColor:bgc}}></div>
{/* .................................................................................................................... */}
    <div>
      <h1>Todo App</h1>
      Enter Student Name: <input type="text" value={mywork} onChange={(e)=>{setMywork(e.target.value)}}/>
   {btnStatus? (<button onClick={Submite}>Add</button>): (<button onClick={EditDataSave}>EditSave</button>)}
      <hr/>
      <table border="1">
     <thead>
      <tr>
        <th>S. No.</th>
        <th>Student Name</th>
        <th>Delete</th>
        <th>Status</th>
        <th>Edit</th>
      </tr>
      {ans}
     </thead>
      </table>
    </div>
   
    </center> 
    </>
  )
}
export default App;