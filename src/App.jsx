import './App.css'
import { Routes, Route } from "react-router-dom";
import Crew from './Pages/CrewMember/Crew';
import Destination from './Pages/Destination/Destination';
import Home from './Pages/Home/Home.jsx';
import Technology from './Pages/Technology/Technology';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className='mainPage'>
      <Navbar />
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />}/>
        <Route path='/crew' element={<Crew />}/>
        <Route path='/technology' element={<Technology />}/>
      </Routes>
      
      
      
      
    </div>
  )
}

export default App;