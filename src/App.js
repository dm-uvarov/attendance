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
import { connect,useDispatch } from "react-redux";
import { fetchStudents,fetchDisciplines, fetchAppointments,fetchAttendances,fetchSlots } from './actions/actions'
import {useSelector} from "react-redux"
import {BrowserRouter,
        Routes,
       Route,
       useNavigate } from 'react-router-dom';
import DisciplineCard from './components/DisciplineCard';

const mapStateToProps = (state) => {
        return {
          students: state.students,
          disciplines: state.disciplines,
          appointments: state.appointments,
          attendances: state.attendances,
          slots: state.slots
        };
};

const mapDispatchToProps = (dispatch) => {
        return {
          fetchStudents: (students) => dispatch(fetchStudents(students)),
          fetchDisciplines: (disciplines) => dispatch(fetchDisciplines(disciplines)),
          fetchAppointments: (appointments) => dispatch(fetchAppointments(appointments)),
          fetchAttendances: (attendances) => dispatch(fetchAttendances(attendances)),
          fetchSlots: (slots) => dispatch(fetchSlots(slots))
        };
};

function App(props) {

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

  // const handleLogout = () => {
  //   fetch("/logout", {
  //     method: "DELETE",
  //   });
  //     setUser([]);
  //     setIsLoggedIn(false);
  //     // navigate("/");
  // };



  useEffect(() => {
    fetch(`/students`)
      .then((r) => r.json())
      .then((students) => {
        dispatch(fetchStudents(students));
      });
  }, []);

  useEffect(() => {
    fetch(`/attendances`)
      .then((r) => r.json())
      .then((attendances) => {
        dispatch(fetchAttendances(attendances));
      });
  }, []);

  useEffect(() => {
    fetch(`/slots`)
      .then((r) => r.json())
      .then((slots) => {
        dispatch(fetchSlots(slots));
      });
  }, []);
  useEffect(() => {
    fetch(`/disciplines`)
      .then((r) => r.json())
      .then((disciplines) => {
        dispatch(fetchDisciplines(disciplines));
      });
  }, []);
  useEffect(() => {
    fetch(`/appointments`)
      .then((r) => r.json())
      .then((appointments) => {
        dispatch(fetchAppointments(appointments));
      });
  }, []);




  return (
   
    <div className="App">
       
      <div> 
        {(isloggedIn ) ? (<NavBar setUser={setUser} setIsLoggedIn={setIsLoggedIn} />):(
          <Login setUser= {setUser} setIsLoggedIn = {setIsLoggedIn} />
        )}
      </div>

      <Routes>  
        <Route path="/classes" element ={<DisciplinesListPage />} />

        <Route path="/classes/:id" element ={<DisciplineCard />} />

        <Route path="/slots" element ={<SlotPage />} />
      </Routes>


    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

