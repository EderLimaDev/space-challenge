import './style.css';
import logotipo from '../../assets/shared/logo.svg'

function Navbar() {
    return(
        <div className='headerNav'>
            <div className="logoNav">
                <img src={logotipo} alt="logotipo" />
            </div>
            <div className='line'><hr /></div>
            
            <div className='navigation'>
                <ul>
                    <li><strong>00</strong>&nbsp; HOME</li>
                    <li><strong>01</strong>&nbsp; DESTINATION</li>
                    <li><strong>02</strong>&nbsp; CREW</li>
                    <li><strong>03</strong>&nbsp; TECHNOLOGY</li>
                </ul>

            </div>
                
        </div>
    )
}

export default Navbar;