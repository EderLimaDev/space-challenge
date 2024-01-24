
import './App.css'
import { Routes, Route } from "react-router-dom";
import Crew from './Pages/CrewMember/Crew';
import Destination from './Pages/Destination/Destination';
import Home from './Pages/Home/Home.jsx';
import Technology from './Pages/Technology/Technology';
import Navbar from './components/NavBar/Navbar';
import Moon from './Pages/Destination/SubPagesDestination/Moon.jsx';
import Mars from './Pages/Destination/SubPagesDestination/Mars.jsx';
import Europe from './Pages/Destination/SubPagesDestination/Europe.jsx';
import Titan from './Pages/Destination/SubPagesDestination/Titan.jsx';


function App() {


  return (



    <div className='mainPage'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />}>

          <Route path='moon' element={<Moon />} />
          <Route path='mars' element={<Mars />} />
          <Route path='europe' element={<Europe />} />
          <Route path='titan' element={<Titan />} />
        
        </Route>
        
        
        <Route path='/crew' element={<Crew />}/>
        <Route path='/technology' element={<Technology />}/>    
      </Routes>
     
      
    </div>
  )
}

export default App;