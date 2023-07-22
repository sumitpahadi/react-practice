import "./App.css";
// import Checkuser from "./component/Checkuser";
import FirstClass from "./component/FirstClass";
import Useeffect from "./component/Useeffect/Useeffect";
import Firsthook from "./component/hooks/Firsthook";
import Apicalling from "./component/apicalling/Apicalling";

import ControlComp from "./component/Control_component/ControlComp";
import Uncontrolled from "./component/uncontrolled/Uncontrolled";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Axiox from "./component/axiox api fetching/Axiox";

import Aboutus from "./component/routing/Aboutus";
import Home from "./component/routing/Home";
import Contatus from "./component/routing/Contatus";
import Signin from "./component/routing/Signin";
import Error from "./component/routing/Error";
import User from "./component/userpage/User";
import Userinfo from "./component/userpage/Userinfo";
import Nav from "./component/Navbar.js/Nav";
import About from "./component/Navbar.js/About";
import Bio from "./component/Navbar.js/Bio";
import Contact from "./component/Navbar.js/Contact";
import Homeus from "./component/Navbar.js/Homeus"
import Image from "./component/image/Image";
import Onclick from "./component/high order function/Onclick";


import Childa from './component/Props drilling/Childa'
import { createContext } from "react";
import Achild from "./component/context api without prop/Achild";
import Onhover from "./component/high order function/Onhover";

const data=createContext()

function App() {
  const name="i am sumit rawat";
  
  return (
 
    // <div >
    //     <Checkuser status={fasle}/>

    // </div>
    // <div>
    //   <Checkuser />
    // </div>

    // day3

    // <FirstClass/>

    //day 4
    // <Firsthook initialValue={0}/>
    // <Useeffect/>

    // day 5

    // <Apicalling/>

    // day6

    // <Axiox/>

    // day 7

    // <ControlComp/>

    // day 8

    // <Uncontrolled/>

    //day 9

    // <Routes>
    //   <Route path="/" element={<Home/>}/>
    //   <Route path="/about" element={<Aboutus/>}/>
    //   <Route path="/contact" element={<Contatus/>}/>
    //   <Route path="/sign" element={<Signin/>}/>
    //   <Route path="/user" element={<User/>}/>
    //   <Route path="/user/:name" element={<Userinfo/>}/>
    //   <Route path="*" element={<Error/>}/>

    // </Routes>


    //  nav bar 

  //   <>
  //   <Nav/>
  //   <Routes>
  //     <Route path={"/"} element={<Homeus/>} />
  //     <Route path={"/About"} element={<About/>} />
  //     <Route path={"/Contactus"} element={<Contact/>} />
  //     <Route path={"/Bio"} element={<Bio/>} />
  //   </Routes>
  // </>
  // );


  // day 10


  // <A></A>


  // day 11

  // <Aa></Aa>
  // <Cc></Cc>





  // prop drilling concept in react js



  // <Childa value={name}></Childa>


  // using context api without using props



  // <data.Provider value={name}>
  //   <Achild/>

  // </data.Provider>


  // <Image></Image>


  // day17
  <>
  <Onhover/>
  
  
  <Onclick/>

  </>

  )
}

export default App;
  
export {data};
