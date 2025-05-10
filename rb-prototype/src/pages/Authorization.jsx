import '../styles/Authorization.css'

function Authorization() { 
    return (
        <>
            <div className="card">
                <label for="username">Lietotājvārds</label><br/>
                <input type="text" placeholder="Lietotājvārds" id="username" className="userName"/>

                <label for="password">Parole</label><br/>
                <input type="text" placeholder="Parole" id="password" className="userName"/>

                <div className="btns">
                    <button className="auth">Autorizēties</button>
                    <button className="auth">Reģistrēties</button>
                </div>
            </div>
        </>
    )
}

export default Authorization