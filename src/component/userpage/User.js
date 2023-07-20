import React from "react";
import { Link } from "react-router-dom";

function User() {
  return (
    <div>
      userlist
      <Link to={"/user/sumit"} >
        
        <h1>sumit</h1>
      </Link>
      <Link to={"/user/nitin"} >
        
        <h1>nitin</h1>
      </Link>
      <Link to={"/user/shivani"} >
        <h1>shivani</h1>
      </Link>
      <Link to={"/user/harshit"} >
        
        <h1>harshit</h1>
      </Link>
      <Link to={"/user/keshav"} >
        
        <h1>keshav</h1>
      </Link>
      <Link to={"/user/bhupp"} >
        
        <h1>bhupp</h1>
      </Link>
    </div>
  );
}

export default User;
