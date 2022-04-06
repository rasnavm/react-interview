import React, { useState } from 'react'
import Fun1 from './Fun1';

function Fun2() {
    const[name,setName]=useState('');
   
  return (
    <div>
       
        <Fun1 name={name} setName={setName}></Fun1>
    </div>
  )
}

export default Fun2