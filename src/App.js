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
import AttendancePage from './components/AttendancePage'


import {BrowserRouter,
        Routes,
       Route,
       useNavigate } from 'react-router-dom';

function App() {

  // const navigate = useNavigate();
  const [user,setUser] = useState(null)

  useEffect(() => {
    fetch('/logout',{method:"DELETE"}).then().then(console.log)
    setUser(null)
    // navigate('/login')
  }, [])

  // if (!user) {
  //   return  ( 
  //     <Routes>
  //       <Route path="/">
  //         <Login setUser={setUser} />
  //       </Route>
  //     </Routes> 
  // )}

  return (
  
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/login" element ={<Login  setUser={setUser}/>} />

        <Route path="/signup" element ={<Signup />} />

        <Route path="/logout" element ={<Logout setUser={setUser} />} />

        <Route path="/" element ={<DisciplinesListPage />} />
        {/*slot page for chosen discipline     */}
        <Route path="/:id/slots" element ={<SlotPage />} />
        {/*slot page for all disciplines    */}
        <Route path="/slots" element ={<SlotPage />} />


        {/*attendace page for chosen discipline     */}
        <Route path="/:id/slots/:id" element ={<SlotPage />} />
        {/*attendance page for all disciplines    */}
        <Route path="/slots/:id" element ={<AttendancePage />} />

      
      </Routes>
    </div>

  );
}

export default App;
