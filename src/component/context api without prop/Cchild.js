import React, { useContext } from "react";
import UserContext from "../use context data/UserContext";
import { data } from "../../App"; // Import the data variable from App.js

function Cchild() {
  const description = useContext(data); // Use the correct variable name
  const userData = useContext(UserContext);
  console.log(description);

  return (
    <div>
      <h1>i am Cchild component {description}</h1>
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

export default Cchild;
