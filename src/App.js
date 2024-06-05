
import './App.css';
import {useRef, useState} from 'react'

function App() {
  const [toDo,setToDo] = useState('')
  const [toDos,setToDos] = useState([])
  const [isEdit, setEdit] = useState({edit:false,id:null})
  // const inputblank = useRef(null)
  
  
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2 >Whoop, it's Wednesday 🌝 ☕ </h2>
     
    </div>
    <div className="input">
      <input value={toDo} 
      // ref={inputblank}
      onChange={(e)=>setToDo(e.target.value)} 
      type="text" 
      placeholder="🖊️ Add item..." />
      <i onClick={()=>{
              //inserting toDos in text and status 
              //for noting checked or not
              // hence toDos are storing like
              // [{text:toDo1,status:f/t},{text:toDo2,status:f/t},...]
              if (toDos.length < 3){
              if (toDo){
        
                if (isEdit.edit){
                  let newData= toDos.map(obj=>{
                    if (obj.id===isEdit.id){
                      obj.text = toDo
                      setEdit({edit:false,id:null})
                    }
                    return obj
                  })
                  setToDos(newData)
                }
                else {
                  setToDos([...toDos,{id:Date.now(),text:toDo,status:false}]);
                  
                }
                // inputblank.current.value = ''
                setToDo('')
              }
            }
            else{
              alert("limit is exceeded ")
            }
        console.log(toDos);
        }} className="fas fa-plus"></i>
    </div>
    <div className="todos">
      {/* inserting toDos in the array */}
      {toDos.map((obj)=>{
        return(
          <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.checked);
            console.log(obj)
            setToDos(toDos.filter(obj2=>{
              if (obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }))
          }}
          value={obj.status} 
          type="checkbox" name="" id="" />
          {/* we passed elements as objects */}
          <p>{obj.text}</p>
        </div>
        <div className="right">
          {/* edit */}
          <i className="fas fa-pen" style={{fontSize:"16px"}}
              onClick={()=>{
                setToDo(obj.text)
                setEdit({edit:true,id:obj.id})
              }
              
              }></i>

          {/* delete */}
          <i onClick={()=>{
            setToDos(toDos.filter(obj3=>{
              if (obj3.id === obj.id){
                return false
              }
              return true
            }))
          }}
          className="fas fa-trash" style={{fontSize:'16px' , marginLeft:"4px"}}></i>
          
        </div>
      </div>
        )
      })}

     {toDos.map(obj=>{
        if(obj.status){
          return(<h1>{obj.text}</h1>)
        }
        return null
      })} 
      
    </div>
  </div>
  );
}


function java(){
  console.log("enta")
}

export default App;
