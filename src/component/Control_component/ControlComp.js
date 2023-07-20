import React, { useState } from "react";

const ControlComp = () => {
  const [name, setname] = useState("");
  const [surname, setsurname] = useState("");
 
  const Onhandle=(event)=>{
    event.preventDefault()

    let data={
      name:name,
      surname:surname,
    }
    console.log(data)
    

  }

  return (
    <div>
      <form action="">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="Name"
          name="Name"
          value={name}
          placeholder="enter your name"
          onChange={(e)=>setname(e.target.value)}
        />
        <br />
        <label htmlFor="Surname">Surname</label>
        <input
          type="text"
          id="Surname"
          onChange={(e)=> setsurname(e.target.value)}
          name="Surnmae"
          value={surname}
          placeholder="enter your surname"
        />
        <button onClick={Onhandle}>Submit</button>
      </form>
    </div>
  );
};

export default ControlComp;
