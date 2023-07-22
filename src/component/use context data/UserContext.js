import { createContext } from "react";
import image from './name.jpg'; // Import the image

const UserContext = createContext({
  name: "sumit rawat",
  age: 21,
  salary: "25lpa",
  designation: "mern stack developer",
  image: image // Use the imported image
});

export default UserContext;
