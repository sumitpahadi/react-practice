import React from 'react'
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function Userinfo() {
   

    const name=useParams()
    console.log(name)
  return (
    <div>
      <h1>....................he my name is  {name.name} </h1>
    </div>
  )
}

export default Userinfo
