import react, { useState } from 'react';
function Counter()
{
    const[count,setCount]=useState(0);
    const handlecount=()=>
    {
        setCount(count+1);
        
       
    }
    return(
        <div>
            <h1>count is {count}</h1>
            <button onClick={handlecount}>INC</button>
        </div>
    )
}
export default Counter;