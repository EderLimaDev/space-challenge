import './style.css';
import logotipo from '../../assets/shared/logo.svg'
import menuIcon from '../../assets/shared/icon-hamburger.svg'
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className='headerNav'>
            <div className="logoNav">
                <img src={logotipo} alt="logotipo" />
            </div>
            
            <div className='navigation'>
                <ul>
                   <Link className='link' to='/'> <li><strong>00</strong>HOME</li></Link> 
                   <Link className='link' to='destination/moon'><li><strong>01</strong>DESTINATION</li></Link>
                   <Link className='link' to='crew'><li><strong>02</strong>CREW</li></Link> 
                   <Link className='link' to='technology'> <li><strong>03</strong>TECHNOLOGY</li></Link>
                </ul>

            </div>
            <div className='buttonMenu'>
                <img src={menuIcon} alt='button hamburger'/>
            </div>
        </div>
    )
}

export default Navbar;