import React from "react";
import './style.css'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <div className="container">

        <div className="log">Sumit rawat</div>
        <div className="list">
          <ul>
            <li><Link to={'/'} >Home</Link></li>
            <li><Link to={'/Contactus'} >Contact</Link></li>
            <li><Link to={'/About'}>About us</Link></li>
            <li><Link to={'/Bio'} >Bio</Link></li>
          </ul>
        </div>
        </div>
      </nav>

      
    </div>
  );
}

export default Nav;
