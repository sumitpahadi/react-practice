import React, { useState, useEffect } from "react";

const Apicalling = () => {
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

export default Apicalling;

// import React, { useState, useEffect } from 'react';

// const Apicalling = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     let isMounted = true; // Flag to track if the component is still mounted

//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((json) => {
//         if (isMounted) {
//           setData(json);
//         }
//       })
//       .catch((error) => console.log(error));

//     return () => {
//       isMounted = false; // Set the flag to false when the component is unmounted
//     };
//   }, []);

//   return (
//     <div>
//       <h1>API Calling</h1>
//       {data &&
//         data.map((item, index) => (
//           <div key={index}>
//             <ul>
//               <li>{item.name}</li>
//               <li>{item.email}</li>
//             </ul>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Apicalling;
