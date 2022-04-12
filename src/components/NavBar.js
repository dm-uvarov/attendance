import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/">
            start page
      </NavLink>
      <br></br>
      <NavLink to="/end">
            end page
      </NavLink>
    </div>
  );
}


