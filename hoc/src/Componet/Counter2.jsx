import React, { useState } from 'react'

function Counter2() {

    const [state,setState] = useState(0)

    const hendleClick = () =>{
         setState (state - 1)
    }
  return (
    <div>
         <h1>{state}</h1>
         <button onClick={hendleClick}>Click Here</button>
    </div>
  )
}

export default Counter2
