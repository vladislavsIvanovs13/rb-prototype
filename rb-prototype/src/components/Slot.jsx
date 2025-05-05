function Slot({slot}) {
    return (
        <>
            <div className="slot">
                <table>
                    <tr>
                        <td><h3>{slot.time}</h3></td>
                        <td><h3>{slot.route}</h3></td>
                        <td><h3>{slot.price}</h3></td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Slot