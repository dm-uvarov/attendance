import React,{useState ,useEffect } from 'react'
import {NavLink} from 'react-router-dom'


export default function Logout({setUser,setIsLoggedIn}) {

    const handleLogout = (e) =>{
      e.preventDefault();
        fetch('/logout',{method:"DELETE"}).then(r=>r.json()).then(console.log)
        setUser([])
        setIsLoggedIn(false)
    }



  return (
    <NavLink to="/" onClick={ handleLogout }>
     Logout
    </NavLink>
  )
}