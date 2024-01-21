import { Link } from "react-router-dom"
import './style.css';

export const DestinationNav = () => {
  return (
    <div className="destination-main-nav">
        <ul className="destination-nav-list">
          <Link className='link' to='moon'><li>MOON</li></Link> 
          <Link className='link' to='mars'><li>MARS</li></Link>
          <Link className='link' to='europe'><li>EUROPE</li></Link> 
          <Link className='link' to='titan'><li>TITAN</li></Link>   
        </ul>    
    </div>
  )
}
