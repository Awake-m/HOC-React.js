import React, { useState } from 'react'

function Counter1 () {
    const [state,setState] = useState(0)

    const handleClick = () =>{
        setState (state + 1)
    }

  return (
    <div>
           <h1>{state}</h1>  
           <button  onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default Counter1
