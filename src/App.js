import logo from './logo.svg';
import './App.css';
import React,{useState ,useEffect } from 'react'

import StartPage from './components/StartPage'
import Logout from './components/Logout'
import Login from './components/Login'
import SlotPage from './components/SlotPage'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import DisciplinesListPage from './components/DisciplinesListPage'
import HomePage from './components/HomePage'

import AttendancePage from './components/AttendancePage'
import { connect,useDispatch } from "react-redux";

import {useSelector} from "react-redux"
import {BrowserRouter,
        Routes,
       Route,
       useNavigate } from 'react-router-dom';
import DisciplineCard from './components/DisciplineCard';
import SlotCard from './components/SlotCard';
import {fetchSlots} from './features/slotsSlice'
import {fetchDisc} from './features/discSlice'
import {fetchStud} from './features/studSlice'
import {fetchAppo} from './features/appoSlice'
import {fetchAtte} from './features/atteSlice'


function App() {

  const [user,setUser] = useState([])
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  // const [shosenDiscipline, setShosenDiscipline] = useState('')



  useEffect(() => {
    fetch('/me')
      .then((r) => {
        if (r.ok){
          r.json()
            .then((user) =>{
              setIsLoggedIn(true);
              setUser(user)
            })
        }} )
      },[]);

  console.log("user",user)

  // useEffect(()=> {
  // dispatch(fetchSlots());
  // dispatch(fetchDisc());
  // dispatch(fetchStud());
  // dispatch(fetchAppo());
  // dispatch(fetchAtte());
  // },[dispatch])

  return (
   
    <div className="App">
       {/* <Login setUser= {setUser} setIsLoggedIn = {setIsLoggedIn} /> 
       */}
      { <div> 
        { isloggedIn  ? <NavBar setUser={setUser} setIsLoggedIn={setIsLoggedIn} /> :
          <Login setUser= {setUser} setIsLoggedIn = {setIsLoggedIn} />
        }
      </div> }

      <Routes>  
        <Route path="/home" element={<HomePage user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>} />

        <Route path="/classes" element ={<DisciplinesListPage />} />

        <Route path="/classes/:id" element ={<DisciplineCard />} />

        <Route path="/slots" element ={<SlotPage />} />

        <Route path="/slots/:id" element ={<SlotCard />} />
      </Routes>


    </div>
  );
}


export default App;

