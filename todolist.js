import react, { useState } from 'react'
import './todolist.css'
function TodoList()
{
    const[name,setName]=useState("");
    const[list,setList]=useState([]);
 const handlechange=(event)=>
{
    setName(event.target.value);
}
const handleclick=(e)=>
{
    e.preventDefault();
    setList([...list,name])
    setName('');
}
const remove=(index)=>
{
    console.log("deleting")
    let del=[...list];
    del.splice(index,1)
    console.log(del);
    setList(del)

}

    return(
        <div className='container1'>
            <form  className='frm'>
            <input className='inpt' type="text" placeholder='enter here' value={name} onChange={handlechange}/>
            <button  className='btn' onClick={handleclick}>click</button>
            </form> 
            <ol className='list'>
            <ul className='list'>{list.map((name,index)=><li key={index}>{name} <button className='btn' onClick={()=>remove(index)}>remove</button></li>)} </ul>        
             </ol>   
                  
        </div>
    )
}
export default TodoList;