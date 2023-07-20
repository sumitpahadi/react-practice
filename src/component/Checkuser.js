import React from "react";
import Login from "./Login";
import Logout from "./Logout";

export default function Checkuser({ status }) {
  // if(status==true)

  // return <Login/>
  // else return <Logout/>

  const iseffort = false;
  return (
    <div>
      hello
      <div>
        {iseffort ? (
          <h1 style={{ backgroundColor: "blue" }}>you are placed</h1>
        ) : (
          <h1 style={{ backgroundColor: "red" }}>you are not placed</h1>
        )}
      </div>
    </div>
  );
}
