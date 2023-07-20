import React,{useState,useEffect}from 'react'

const Useeffect = () => {
    const[value,statevalue] =useState(0)
    function increment()
    {
        statevalue(value+1)
    }
    useEffect(()=>{
      // it will act as didmount it as react life cycle
      
        console.log("hello i am useeffect");

    },[value])
    
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increment}>increment</button>
    
     
    </div>
  )
}

export default Useeffect





// import React, { useState, useEffect } from 'react';

// const Useeffect = () => {
//   const [value, setValue] = useState(0);

//   function increment() {
//     setValue(value + 1);
//   }

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       console.log("Hello, I am useEffect");
//     }, 2000);

//     return () => {
//       clearTimeout(timeout);
//     };
//   }, [value]);

//   return (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default Useeffect;
