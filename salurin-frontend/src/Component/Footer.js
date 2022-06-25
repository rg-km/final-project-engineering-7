import './Footer.css';
import Youtube_Logo from '../Assets/Youtube-Logo.png';
import LinkedIn_Logo from '../Assets/LinkedIn-Logo.png';
import Instagram_Logo from '../Assets/Instagram-Logo.png';
import Salurin_White from '../Assets/Logo-Salurin-White.png';

function Footer(){
    return(
        <footer className="footer-container">
            <div className="salurin-container">
                <img src={Salurin_White} alt='Logo_Salurin'></img>
                <p className='footer-text'>Salurin</p>
            </div>
            <p className='footer-text'>© 2022 Kelompok 7 - Ruang Guru Camp</p>
            <div className="logo-container">
                <div className="logo-wrapper" >
                    <img src={Youtube_Logo} alt='Youtube_Logo'></img>
                </div>
                <div className="logo-wrapper" >
                    <img src={LinkedIn_Logo} alt='LinkedIn_Logo'></img>
                </div>
                <div className="logo-wrapper" >
                    <img src={Instagram_Logo} alt='Instagram_Logo'></img>
                </div>
            </div>
        </footer>
    )
}
export default Footer