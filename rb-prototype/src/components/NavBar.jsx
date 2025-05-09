import { Link } from 'react-router-dom'
import '../styles/NavBar.css'
import rbLogo from '../assets/rbLogo.png'

function NavBar() {
    return <nav className='navbar'>
        <img src={rbLogo} className='logo'/>
        <div className='navbar-buttons'>
            <Link to="/" className='nav-link'>Uz sākumu</Link>
            <Link to="/about" className='nav-link'>Par mums</Link>
            <button className='button'>
                <Link to="/basket" className='nav-link-grozs'>Grozs</Link>
            </button>
        </div>
    </nav>
}

export default NavBar