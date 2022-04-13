import React,{useState ,useEffect } from 'react'


export default function Logout({setUser}) {

    const handleLogout = () =>{
        fetch('/logout',{method:"DELETE"}).then().then(console.log)
        setUser(null)
    }



  return (
        <label onClick={handleLogout}>Logout</label>
  )
}