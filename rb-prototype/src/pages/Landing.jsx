import Slot from "../components/Slot"
import greyBackground from '../assets/Input.png'
import arrow from '../assets/Bultina.png'
import calendar from '../assets/calendar.png'
import clock from '../assets/time.png'
import '../styles/Landing.css'
import Footer from "../components/Footer"
import { useState } from "react"

function Landing() {
    const slots = [
        {id: 1, date: "2025-05-31", time: "10:35-11:10", route: "Rīga-Viļņa", price: 12.35},
        {id: 2, date: "2025-06-12", time: "16:30-17:35", route: "Rīga-Viļņa", price: 21.99},
        {id: 3, date: "2025-06-12", time: "20:30-21:50", route: "Rīga-Viļņa", price: 19.79}
    ]

    const [matchingSlots, setMatchingSlots] = useState([]);
    const [count, setCount] = useState(0)
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    const inc = () => setCount(count => ++count)
    const dec = () => setCount(count => count > 0 ? --count : 0)

    const searchSlots = () => {
        const matchingSlots = slots.filter(
            slot => slot.route.slice(0, slot.route.indexOf('-')).toLowerCase().includes(from.toLowerCase()) &&
                slot.route.slice(slot.route.indexOf('-') + 1).toLowerCase().includes(to.toLowerCase()))
        setMatchingSlots(matchingSlots)
    }

    const handleEnter = (e) => {
        if (e.key == 'Enter')
            searchSlots()
    }
    
    return (
        <>
            <div>
                <text className="text">Izvēlieties biļetes braucieniem uz Latviju, Lietuvu un Igauniju!</text>
                <div className="background">
                    <form className="left-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" onChange={(e) => setFrom(e.target.value)} onKeyDown={handleEnter}
                        value={from} placeholder="No" className="input"/>
                    </form>
                    <img src={arrow} className="arrow"/>
                    <form className="right-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" onChange={(e) => setTo(e.target.value)} onKeyDown={handleEnter}
                        value={to} placeholder="Uz" className="input"/>
                    </form>
                    <img src={calendar} className="calendar"/>
                    <form className="date-form">
                        <input type="text" placeholder="Datums" className="input-lower"/>
                    </form>
                    <img src={clock} className="clock"/>
                    <form className="time-form">
                        <input type="text" placeholder="Laiks" className="input-lower"/>
                    </form>
                    <button onClick={searchSlots} type="button" className="button-style">Meklēt</button>
                    <button onClick={inc} type="button" className="plus-button">
                        <span className="sign">+</span>
                    </button>
                    <form className="counter-form">
                        <input type="text" value={count} className="input-counter"/>
                    </form>
                    <button onClick={dec} type="button" className="minus-button">
                        <span className="sign">-</span>
                    </button>
                    <img src={greyBackground} className="background-style"/>
                </div>
                <div className="background">
                    {matchingSlots.map(slot =>
                        <Slot slot={slot} key={slot.id} className="text"/>
                    )}
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Landing