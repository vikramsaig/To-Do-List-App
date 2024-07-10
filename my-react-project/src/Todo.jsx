import React, { useEffect, useState } from "react"
import "./Todo.css"
function Todo(){

    const [todo,settodo]=useState([])
    function inputchange(e){

    }
    useEffect(()=>{
        settodo(JSON.parse(localStorage.getItem("todo")));
    },[])
    useEffect(()=>{
        setTimeout(() => {
            localStorage.setItem("todo",JSON.stringify(todo))
        }, 100);
    })
function additemtolist(){
    const newitem=document.getElementById("inputtextid").value;
    if(newitem.trim()!=="") 
settodo(t=>[...t,newitem]);

}

function removeitems(index){
  settodo(  todo.filter((ele,i)=>i!==index));
    
}
function movetaskup(index){

if(index>0){
    const updatetasks=[...todo];
    [updatetasks[index],updatetasks[index-1]]=[updatetasks[index-1],updatetasks[index]];
    settodo(updatetasks);
}
}
function movetaskdown(index){
    if(index<todo.length-1){
        const updatetasks=[...todo];
        [updatetasks[index],updatetasks[index+1]]=[updatetasks[index+1],updatetasks[index]];
        settodo(updatetasks);
    }
}

    return(
        <div className='todo'>
            <h1 id="todo-header">To Do List </h1>
            <input type="text" id="inputtextid" className="todo-input"placeholder="Add todo things" />
            <button className="todo-add-btn" onClick={additemtolist}>Add</button>
            <ol id="todoitems">
            { todo.map((item,ind)=>
            <li key={ind}  >
                {item} 
                <button 
                     className="delete-btn"onClick={()=>removeitems(ind)}>Delete
                </button>
                <button 
                     className="movedown-btn"onClick={()=>movetaskdown(ind)}>⬇️
                </button>
                <button 
                     className="moveup-btn"onClick={()=>movetaskup(ind)}>⬆️
                </button>
                

            </li>)}
           </ol>

           
        </div>

    )

}
export default Todo