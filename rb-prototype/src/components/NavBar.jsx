import { Link } from 'react-router-dom'
import '../styles/NavBar.css'
import Grozs from '../assets/ButtonGrozs.png'

function NavBar() {
    return <nav>
        <div className='navbar'>
            <Link to="/" className='nav-link'>Uz sākumu</Link>
            <Link to="/about" className='nav-link'>Par mums</Link>
            <button className='button'>
                <Link to="/basket" className='nav-link-grozs'>Grozs</Link>
            </button>
        </div>
    </nav>
}

export default NavBar