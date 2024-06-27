import React, { useState } from 'react'

function Counter3() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);
  
   
    const handleNumber1Change = (e) => {
      setNumber1(Number(e.target.value));
    };
  
    const handleNumber2Change = (e) => {
      setNumber2(Number(e.target.value));
    };
  
    return (
      <div>
        <input type="number" value={number1} onChange={handleNumber1Change} />
        <input type="number" value={number2} onChange={handleNumber2Change} />
        <button onClick={() => setResult(number1 * number2)}>Multiply</button>
        <p>Result: {result}</p>
      </div>
    );
}

export default Counter3
