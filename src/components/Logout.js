import React,{useState ,useEffect } from 'react'


export default function Logout({setUser,setIsLoggedIn}) {

    const handleLogout = (e) =>{
      e.preventDefault();
        fetch('/logout',{method:"DELETE"}).then(r=>r.json()).then(console.log)
        setUser([])
        setIsLoggedIn(false)
    }



  return (
        <label onClick={ handleLogout }>Logout</label>
  )
}