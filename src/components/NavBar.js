import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact to="/">
        <label >start page</label> 
      </NavLink>
      <NavLink exact to="/end">
        <label >end page</label> 
      </NavLink>
    </div>
  );
}


