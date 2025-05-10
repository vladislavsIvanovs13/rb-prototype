import rectangle from '../assets/rectangle_3.png'
import facebookIcon from '../assets/FacebookIcon.png'
import instagramIcon from '../assets/InstagramIcon.png'
import linkedInIcon from '../assets/LinkedInIcon.png'
import youTubeIcon from '../assets/YouTubeIcon.png'
import rbLogo from '../assets/rbLogo.png'
import divider from '../assets/Divider.png'
import '../styles/About.css'
import att1 from '../assets/att1.png'
import att2 from '../assets/att2.png'
import att3 from '../assets/att3.png'
import Footer from '../components/Footer'

function About() {
    return (
        <>
            <div>
                <div className='divParMums'>
                    <text className="textLargest">Par mums</text>
                </div>

                <div className="divVert">

                    <div className='divTextWhite'>
                        <text className="textWhite">Rail Baltica ir jauns dzelzceļa infrastruktūras projekts ar mērķi integrēt Baltijas valstis Eiropas dzelzceļu tīklā. Projektā piedalās piecas Eiropas Savienības valstis – Polija, Lietuva, Latvija, Igaunija un, lai arī netieši, Somija. Paredzēts, ka dzelzceļa līnija savienos Helsinkus, Tallinu, Pērnavu, Rīgu, Paņevežu, Kauņu, Viļnu un Varšavu. Dzelzceļa līnijas izbūve, kas vīsies caur Baltijas valstīm, tiek dēvēta par Rail Baltica Globālo projektu.</text>
                    </div>
                    <div className='divImgRight'>
                        <img src={att1} className='imgRight' />
                    </div>
                </div>

                <div >
                    <img src={att2} className='imgCenter' />
                </div>

                <div className='divVirsraksts'>
                    <text className="virsraksts">Atbildība pret vidi</text>
                </div>
                <div className='divTeksts'>
                    <text className="teksts">Rail Baltica dzelzceļa līnija būs pilnībā elektrificēta, tāpēc vilcienu darbība neradīs kaitīgos izmešus, savukārt būvniecībā tiks izmantotas jaunākās tehnoloģijas un materiāli. Maršruts tiek plānots tā, lai pēc iespējas neskartu “Natura 2000” īpaši aizsargājamo dabas teritoriju tīklu un neatstātu zīmīgu iespaidu uz citām ekoloģiski jutīgajām teritorijām. Kur vien nepieciešams, tiks uzstādītas trokšņu barjeras, tāpat tiks veidotas pārejas savvaļas dzīvniekiem.</text>
                </div>

                <div className='divVirsraksts'>
                    <text className="virsraksts">Drošība</text>
                </div>
                <div className='divTeksts'>
                    <text className="teksts">Rail Baltica izbūve norisināsies saskaņā ar visstingrākajām drošības prasībām. Vilcienu kustības kontrolēšanai tiks izmantota jaunākās paaudzes Eiropas Dzelzceļa satiksmes vadības sistēma (ERTMS). Visi šķērsojumi ar brauktuvēm un gājēju ceļiem tiks veidoti divos līmeņos, un sliežu ceļš visā maršruta garumā tiks iežogots. Pasažieru stacijas būs aprīkotas tā, lai piekļuve dzelzceļa pakalpojumiem būtu viegla un ērta it visiem.</text>
                </div>

                <div className='divVirsraksts'>
                    <text className="virsraksts">Mūsdienīgums</text>
                </div>
                <div className='divTeksts'>
                    <text className="teksts">Rail Baltica celtniecībā tiks izmantotas visjaunākās tehnoloģijas un materiāli. Daļa to pašlaik atrodas izstrādes un standartizācijas procesā vai komercražošanas sākumstadijā. Katrā Baltijas valstī tiks būvēti vairākveidu satiksmes kravas termināļi, kas nodrošinās ātru un efektīvu kravas konteineru pārnesi starp dažādiem transportēšanas veidiem. Dzelzceļa stacijās tiks izmantoti jaunākie multimodālu pasažieru termināļu risinājumi, kas ērti savienos dažādus iekšpilsētu, reģionālos un tālsatiksmes transporta pakalpojumus; tāpat tiks nodrošinātas stāvvietas automašīnām un velosipēdiem, kā arī ierīkotas atpūtas un iepirkšanās zonas.</text>
                </div>
                <div >
                    <img src={att3} className='imgCenter' />
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default About