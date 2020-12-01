import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(0);
  const [output, setOutput] = useState("");


  useEffect(() => {
    if(number === 0 ){
      setOutput("")
    } else if(number % 15 === 0){
      setOutput("FizzBuzz");
      
    } else if(number % 3 === 0){
      setOutput("Fizz");
      
    } else if(number % 5 === 0){
      setOutput("Buzz");
    } else {
      setOutput("")
    }
  }, [number])

  const handleInc = () => {
      setNumber(number + 1 );
    }
  
  return (
    <div className="App">
    <button value={number} onClick={handleInc}> + </button>
    <h2>Number is {number}</h2>
    <h2>{output}</h2>
    </div>
  )

}

export default App;
