import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/">
            disciplines
      </NavLink>
      <br></br>
      <NavLink to="/slots">
            all slots
      </NavLink>
      <br></br>
      <NavLink to="/logout">
            logout
      </NavLink>
    </div>
  );
}


