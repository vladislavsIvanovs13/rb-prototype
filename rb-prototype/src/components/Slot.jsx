import greyBackground from '../assets/Input.png'
import "../styles/Slot.css"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function Slot({slot}) {
    const [clickedFirst, setClickedFirst] = useState(false)
    const [clickedSecond, setClickedSecond] = useState(false)
    const navigate = useNavigate()

    const handleClickFirst = () => {
        if (clickedSecond)
            setClickedSecond(false)
        setClickedFirst(!clickedFirst)
    }

    const handleClickSecond = () => {
        if (clickedFirst)
            setClickedFirst(false)
        setClickedSecond(!clickedSecond)
    }

    const navigateToBasket = (slot) => {
        localStorage.setItem('selectedSlot', JSON.stringify(slot));
        navigate('/basket')
    }

    return (
        <>
            <div>
                <div className='slot'>
                    <table className='slot-row'>
                        <tr>
                            <th className='th-shift'>{slot.time}</th>
                            <th className='th-shift'>{slot.route}</th>
                            <th><button type="button" onClick={handleClickFirst}
                                className={`${clickedFirst ? 'first-class-blue' : 'first-class-white'}`}>1.klase</button></th>
                            <th><button type="button" onClick={handleClickSecond}
                                className={`${clickedSecond ? 'second-class-blue' : 'second-class-white'}`}>2.klase</button></th>
                            <th className='th-shift'>€ {slot.price}</th>
                            <th><button type="button" onClick={() => navigateToBasket(slot)}
                                className="first-class-blue">Izvēlēties</button></th>
                        </tr>
                    </table>
                    <img src={greyBackground} className="background-slot"/>
                </div>
            </div>
        </>
    )
}

export default Slot