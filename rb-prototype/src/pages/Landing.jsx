import Slot from "../components/Slot"
import greyBackground from '../assets/Input.png'
import rectangle3 from '../assets/rectangle_3.png'
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
                <form onSubmit={searchSlots}>
                    <input type="text" placeholder="No"/>
                    <button type="submit" className="button-style">Meklēt</button>
                </form>
                <text>Izvēlieties biļetes braucieniem uz Latviju, Lietuvu un Igauniju!</text>
                <div>
                    <img src={greyBackground} className="background-style"/>
                    <div>
                        {slots.map(slot => <Slot slot={slot} key={slot.id}/>)}
                    </div>
                </div>
                <footer>
                    <img src={rectangle3} className="footer-style"/>
                </footer>
            </div>
        </>
    )
}

export default Landing