import React,{useState ,useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import {unsetSlot} from "../features/slotsSlice"
import {unsetDisc} from "../features/discSlice"
import {removeUser} from "../features/userSlice"
import { useDispatch } from 'react-redux'

export default function Logout({setUser,setIsLoggedIn}) {

    let navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = (e) =>{
      e.preventDefault();
        fetch('/logout',{method:"DELETE"}).then(r=>r.json()).then(setUser([]))
        // setUser([])
        setIsLoggedIn(false)
        dispatch(unsetDisc())
        dispatch(unsetSlot())
        navigate(`/`)
        dispatch(removeUser())
    }



  return (
    <NavLink to="/" onClick={ handleLogout }>
     Logout
    </NavLink>
  )
}