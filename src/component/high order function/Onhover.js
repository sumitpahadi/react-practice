import React, { useState } from 'react';
import Hoc from './Hoc';

function Onhover(props) {
  

  return (
    <div>
      <h1>{props.counter}</h1>
      <button onClick={props.handleclick} >button1</button>
    </div>
  );
}

export default Hoc(Onhover);


