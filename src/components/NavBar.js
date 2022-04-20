import React from "react";
import Logout from "./Logout"
import { NavLink } from "react-router-dom";

export default function NavBar({setUser,setIsLoggedIn}) {
  return (
    <div className="navbar">
      <NavLink to="/classes">
            Classes
      </NavLink>
      
      <NavLink to="/slots">
            Schedule
      </NavLink>
     
      {/* <NavLink to="/slots">
            show up
      </NavLink>
      <br></br> */}

     
      <Logout setUser={setUser} setIsLoggedIn={setIsLoggedIn} />

    </div>
  );
}


