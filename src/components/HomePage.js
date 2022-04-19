import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import NavBar from "./NavBar"
import fetchSlots from  "../features/slotsSlice"
import fetchDisc from "../features/discSlice"
import fetchStud from "../features/studSlice"
import fetchAppo from "../features/appoSlice"
import fetchAtte from "../features/atteSlice"


export default function HomePage({user}) {

  const dispatch = useDispatch();
  console.log(user)


  // useEffect(() => {
  //   dispatch(fetchSlots());
  //   dispatch(fetchDisc());
  //   dispatch(fetchStud());
  //   dispatch(fetchAppo());
  //   dispatch(fetchAtte());
  // }, [dispatch]);


  return (
    <div>
      <div> 
      {/* <NavBar setUser={setUser} setIsLoggedIn={setIsLoggedIn} /> */}
      
      </div>

      <div> 
        Greetings, {user.name}!
      </div>
      <img src={user.pic} alt={user.name} />
    </div>
  )



}