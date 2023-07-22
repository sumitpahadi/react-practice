import React, { useState } from 'react'
import Hoc from './Hoc'

function Onclick(props) {
  
  return (
    <div>
      <h1>{props.counter}</h1>
      <button onClick={props.handleclick}>button</button>
    </div>
  )
}

export default Hoc(Onclick)
