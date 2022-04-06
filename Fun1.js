import React, { useState } from 'react'

function Fun1(props) {
    console.log(props)
    
    const handleclick=(e)=>
    {
        e.preventDefault();
        props.setName('rasna');   
    }
  return (
    <div>
        <button onClick={handleclick}>click Me</button>
        <p>{props.name}</p>
        
        
    </div>
  )
}

export default Fun1;