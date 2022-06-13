import React from "react";
import Logout from "./Logout"
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux"

export default function NavBar({setUser,setIsLoggedIn}) {

  const userStateFromRedux = useSelector(state => state.user.user) 

  return (
    <div className="navbar">
      <div className="left">  
        <NavLink to="/classes" className="menu-left" >
            Classes
        </NavLink>
      
        <NavLink to="/slots" className="menu-left">
            Schedule
        </NavLink>
     
      {/* <NavLink to="/slots">
            show up
      </NavLink>
      <br></br> */}
        

     
        <Logout setUser={setUser} setIsLoggedIn={setIsLoggedIn} className="menu-left" />
      </div>
      <small>
        <span style={{float:"right", marginRight:"20px"}}>Welcome | {userStateFromRedux.name}! 
        </span>
      </small>
    </div>
  );
}


