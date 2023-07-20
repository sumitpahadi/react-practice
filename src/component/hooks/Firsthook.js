import React,{useState}from 'react'

const Firsthook = (props) => {
    const[value,statevalue] =useState(props.initialValue)
    function increment()
    {
        statevalue(value+1)
    }
    function decrement()
    {
        statevalue(value-1)
    }



    
   
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
     
    </div>
  )
}

export default Firsthook
