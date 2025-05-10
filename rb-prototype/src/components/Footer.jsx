import facebookIcon from '../assets/FacebookIcon.png'
import instagramIcon from '../assets/InstagramIcon.png'
import linkedInIcon from '../assets/LinkedInIcon.png'
import youTubeIcon from '../assets/YouTubeIcon.png'
import rbLogo from '../assets/rbLogo.png'
import divider from '../assets/Divider.png'
import rectangle from '../assets/rectangle_3.png'
import '../styles/Footer.css'

function Footer() {
    return <>
        <div>
            <img src={divider} className="background-style"></img>
            <footer>
                <div className='logo-group'>
                    <button className="icon-button"><img src={facebookIcon}/></button>
                    <button className="icon-button"><img src={linkedInIcon}/></button>
                    <button className="icon-button"><img src={youTubeIcon}/></button>
                    <button className="icon-button"><img src={instagramIcon}/></button>
                </div>
                <img src={rbLogo} className='footer-logo'/>
                <img src={rectangle} className="footer-style"/>
            </footer>
        </div>
    </>
}

export default Footer