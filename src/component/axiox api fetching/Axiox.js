import React, { useState, useEffect } from "react";

const Axiox = () => {
  const [data, setdata] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setdata(json))
      .catch((error) => console.log(error));
  },[]);

  const border={
    border: '2px solid black',
    borderCollapse: "collapse",
  }
  return (
    <div>
      api calling
      {
        <table style={border}>
          <thead>
            <tr >
              <th style={border}>name</th>
              <th style={border}>email</th>
            </tr>
          </thead>
          <tbody>

            {data && data.map((item, index) => {
            return (
              <tr key={index}>
              <td style={border}>{item.name}</td>
              <td style={border}>{item.email}</td>
            </tr>
            )
            })}
          </tbody>
        </table>
      }
    </div>
  );
};

export default Axiox;
