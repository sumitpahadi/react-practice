import React from 'react'
import { Link } from 'react-router-dom'

const Aboutus = () => {
  return (
    <div>
      
      <h1 >About us</h1>
      <Link to={'/'}> go to Home</Link>

      <Link to={'/sign'}>i am sign in</Link>

    </div>
  )
}

export default Aboutus
