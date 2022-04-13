import logo from './logo.svg';
import './App.css';
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



  return (
  <BrowserRouter >
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/login" element ={<Login />} />

        <Route path="/signup" element ={<Signup />} />

        <Route path="/logout" element ={<Logout />} />

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
  </BrowserRouter>
  );
}

export default App;
