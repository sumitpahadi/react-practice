import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  
  const navigate=useNavigate()

  const handle=()=>{
    alert("hi your are on about")
    navigate('/about')
  }
  return (
    <div>
        <h1>Home </h1>
        <button onClick={handle}>submit</button>
      
    </div>
  )
}

export default Home
