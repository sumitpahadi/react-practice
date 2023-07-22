import React from 'react'
import Childc from './Childc'

function Childb({value}) {
  return (
    <div>B component is 
        <Childc value={value}></Childc>
      
    </div>
  )
}

export default Childb
