import Slot from "../components/Slot"
import greyBackground from '../assets/Input.png'
import rectangle from '../assets/rectangle_3.png'
import facebookIcon from '../assets/FacebookIcon.png'
import instagramIcon from '../assets/InstagramIcon.png'
import linkedInIcon from '../assets/LinkedInIcon.png'
import youTubeIcon from '../assets/YouTubeIcon.png'
import rbLogo from '../assets/rbLogo.png'
import divider from '../assets/Divider.png'
import arrow from '../assets/Bultina.png'
import calendar from '../assets/calendar.png'
import clock from '../assets/time.png'
import '../styles/Landing.css'

function Landing() {
    const slots = [
        {id: 1, time: "10:35-11:10", route: "Rīga-Viļņa", price: 12.35},
        {id: 2, time: "16:30-17:35", route: "Rīga-Viļņa", price: 21.99},
        {id: 3, time: "20:30-21:50", route: "Rīga-Viļņa", price: 19.79}
    ]

    const searchSlots = () => {}
    
    return (
        <>
            <div>
                <text className="text">Izvēlieties biļetes braucieniem uz Latviju, Lietuvu un Igauniju!</text>
                <div className="background">
                    <form className="left-form">
                        <input type="text" placeholder="No" className="input"/>
                    </form>
                    <img src={arrow} className="arrow"/>
                    <form className="right-form">
                        <input type="text" placeholder="Uz" className="input"/>
                    </form>
                    <img src={calendar} className="calendar"/>
                    <form className="date-form">
                        <input type="text" placeholder="Datums" className="input-lower"/>
                    </form>
                    <img src={clock} className="clock"/>
                    <form className="time-form">
                        <input type="text" placeholder="Laiks" className="input-lower"/>
                    </form>
                    <button type="button" className="button-style">Meklēt</button>
                    <button type="button" className="plus-button">+</button>
                    <button type="button" className="minus-button">-</button>
                    <img src={greyBackground} className="background-style"/>
                </div>
                {/* {slots.map(slot => 
                    <div className="background">
                        <img src={greyBackground} className="background-style"/>
                        <Slot slot={slot} key={slot.id} className="text"/>   
                    </div>
                )} */}
        
                <img src={divider} className="background-style"></img>
                <footer>
                    <img src={rbLogo} className='footer-logo'/>
                    <button className="icon-button"><img src={facebookIcon}/></button>
                    <button className="icon-button"><img src={linkedInIcon}/></button>
                    <button className="icon-button"><img src={youTubeIcon}/></button>
                    <button className="icon-button"><img src={instagramIcon}/></button>
                    <img src={rectangle} className="footer-style"/>
                </footer>
            </div>
        </>
    )
}

export default Landing