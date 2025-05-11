import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import rectangle from '../assets/rectangle_3.png'
import edit from '../assets/edit.png'
import '../styles/Basket.css'
import bin from '../assets/bin.png'
import ievaditAtlKodu from '../assets/ButtonIevaditAtlaidesKodu.png'
import apmaksat from '../assets/ButtonApmaksat.png'
import Footer from '../components/Footer'

function Basket() { 
    const navigate = useNavigate()
    
    const [slot, setSlot] = useState(null);
    const [loading, setLoading] = useState(true)
    const [total, setTotal] = useState(0.0)

    const [clickedFirst, setClickedFirst] = useState(false)
    const [clickedSecond, setClickedSecond] = useState(false)

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

    useEffect(() => {
        redirect()
        getBasketContents()
        calculateTotal()
    }, [])

    const redirect = () => {
        const registered = localStorage.getItem('registered')
        if (!registered)
            navigate('/register')
    }

    const getBasketContents = () => {
        const selected = localStorage.getItem('selectedSlot')
        if (selected) {
            setSlot(JSON.parse(selected))
            setLoading(false)
        }
    }

    const calculateTotal = () => {
        if (slot) {
            const sum = slot.reduce((t, s) => t + s.price, 0.0)
            setTotal(sum)
        }
    }

    const deleteTicket = () => {
        localStorage.removeItem('selectedSlot')
        setSlot(null)
    }

    if (loading) return

    return (
        <>
            <div>
                <div className="containerGrey">
                    <div>
                        <text className="textGrozs">Grozs</text>
                    </div>
                    {slot && (<div className="containerWhite">
                        <div className="vert">
                            <text className="text">{slot.route}</text>
                            <text className="textRight"> 31. vieta, ar logu</text>
                            <img src={edit} className="editButton" />
                        </div>
                        <div>
                            <text className="textGrey">{slot.date}</text>
                        </div>
                        <div>
                            <text className="textGrey">{slot.time}</text>
                        </div>
                        <div className="vert">
                            <text className="text">€ {slot.price}</text>
                            <button type="button" onClick={handleClickFirst}
                                className={`${clickedFirst ? 'pirmKlase' : 'otrKlase'}`}>1.klase</button>
                            <button type="button" onClick={handleClickSecond}
                                className={`${clickedSecond ? 'pirmKlase-right' : 'otrKlase-right'}`}>2.klase</button>
                            <button type="button" onClick={deleteTicket} className='bin-icon'>
                                <img src={bin}/>
                            </button>
                        </div>
                    </div>)}
                    <div className="vert-low">
                        <img src={ievaditAtlKodu} className="ievaditApmKodu" />
                        <img src={apmaksat} className="ievaditApmKodu" />
                        <text className="textApmaksai">Apmaksai:</text>
                        <text className="textPrice">€ {total}</text>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Basket