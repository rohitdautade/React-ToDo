import React, {useState}from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
export default function TodoList() {
 const [task, settask] = useState("")
 const[tasks,settaskarray]=useState([])
 function display(){
    settaskarray([...tasks ,task])
     
 }

  function deletetask(index){
     var darray=[...tasks]
     darray.splice(index,1)
     settaskarray(darray)
 }
 const tasklist=tasks.map((object,index)=>{
return <div className="row justify-content-center">
    <h4 className="col-8 col-md-8 text-left text-white mt-2">{index+1} &nbsp;&nbsp;{object}</h4>
    <button type="button" className=" col-2 col-md-2 btn btn-success mt-2" onClick={deletetask}>Done</button>
</div>

 })

    return (
        <div>
            <h1 className="container-fluid bg-info text-center text-warning">ToDo List</h1>
        <div className="container">
          
            <div className="row justify-content-center">
               
               <div className=" col-12 col-md-5  p-5 mt-5 mr-5" >
                   <form className="bg-secondary p-4">
                       <h1 className="text-white text-center mb-5">Add Todo</h1>
                       <div className="row">
                           <div className="col-8 col-md-8">
                           <input type="text" placeholder="Enter Task" class="form-control" value={task} onChange={(e)=>{settask(e.target.value)}}></input>
                            </div>
                            <div className="col-4 col-md-4">
                            <button type="button" onClick={display} class="btn btn-primary btn-block">AddTodo</button>
                            </div>

                       </div>
                        
                   </form>

                </div>
                <div className=" col-12 col-md-6  bg-secondary mt-5" >
                    <div className="scrollb">
                    <span className="text-white text-left font-weight-bold h1">Tasks </span><span className="text-white text-right total ">Total task: {tasks.length}</span>
                    {tasklist}
                            
                        
                    </div>
                    
       

                </div>
               

            </div>
            
        </div>
        </div>
    )
}
