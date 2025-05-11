import { useEffect } from 'react'
import { useState } from 'react'

function Basket() { 
    const [slot, setSlot] = useState(null);
    useEffect(() => { getBasketContents() }, [])

    const getBasketContents = () => {
        const selected = localStorage.getItem('selectedSlot')
        if (selected)
            setSlot(JSON.parse(selected))
        alert(selected)
    }

    return (
        <>
            <div>
                {slot ? (<div>{slot.id}</div>) : (<p>loading...</p>)}
            </div>
        </>
    )
}

export default Basket