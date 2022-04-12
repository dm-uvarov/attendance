import logo from './logo.svg';
import './App.css';
import StartPage from './components/StartPage'
import EndPage from './components/EndPage'
import NavBar from './components/NavBar'

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
        <Route path="/" element ={<StartPage />} />

        <Route path="/end" element ={<EndPage />} />


      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
