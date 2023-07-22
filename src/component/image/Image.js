import React, { useContext } from 'react';
import UserContext from '../use context data/UserContext';
// Import the data variable from App.js

function Image() {
// Use the correct variable name
  const userData = useContext(UserContext);


  return (
    <div>
    
      <div>
        <h1>{userData.name}</h1>
        <h1>{userData.age}</h1>
        <h1>{userData.salary}</h1>
        <h1>{userData.designation}</h1>

        {/* Render the image from the context */}
        <img src={userData.image} alt="User" />
      </div>
    </div>
  );
}

export default Image;
