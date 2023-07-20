import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div>
        sign in
        <Link to={'/'}>go to home</Link>
        <Link to={'/user'}>click me i am user</Link>

      
    </div>
  )
}

export default Signin
