import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import NavBar from "./NavBar"
import fetchSlots from  "../features/slotsSlice"
import fetchDisc from "../features/discSlice"
import fetchStud from "../features/studSlice"
import fetchAppo from "../features/appoSlice"
import {logUser} from "../features/userSlice"


export default function HomePage({user}) {

  const dispatch = useDispatch();
  console.log(user)
  dispatch(logUser(user))

  return (
    <div>
      <div> 
      {/* <NavBar setUser={setUser} setIsLoggedIn={setIsLoggedIn} /> */}
      
      </div>

      <div> 
        
        <p>Mark student's attendance with given disciplines <b>HERE!</b></p>
      </div>
      <img src={user.pic} alt={user.name} />
    </div>
  )



}