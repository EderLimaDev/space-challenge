import './App.css'
import Home from './Home/Home.jsx';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className='mainPage'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App;