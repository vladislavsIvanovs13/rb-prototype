import '../styles/Authorization.css'
import google from '../assets/googleLogo1.png'
import Footer from '../components/Footer'

function Authorization() {
    return (
        <>
            <h1>Autorizācija</h1>
            <div className="card">
                <label for="username">Lietotājvārds</label><br/>
                <input type="text" placeholder="Lietotāja e-pasts" id="username" className="userName"/>

                <label for="password">Parole</label><br/>
                <input type="text" placeholder="Parole" id="password" className="userName"/>

               <a href="/" class="google">
                    <img src={google} className="google-icon"></img>
                    <p>Turpināt ar Google kontu</p>
                </a>
                <div className="btns">
                    <button className="auth">Autorizēties</button><br/>
                    <button className="auth">Reģistrēties</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Authorization