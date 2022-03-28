import {
    NavLink
} from 'react-router-dom';

import marvel from '../assets/img/marvel.png';

const Footer = () => {
    return (
        <footer className="footer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#202020" fill-opacity="1"
                    d="M0,288L0,128L480,128L480,224L960,224L960,192L1440,192L1440,320L960,320L960,320L480,320L480,320L0,320L0,320Z">
                </path>
            </svg>
            <div className="footer__container">
                <div className="row footer__top">
                    <div className="col-md-4 text-center footer__md4">
                        <img src={marvel} alt="logo" className="footer__logo"/>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <NavLink to="/" className="footer__link">ABOUT</NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink to="/" className="footer__link">HELP/FAQS</NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink to="/" className="footer__link">CAREERS</NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink to="/" className="footer__link">INTERNSHIPS</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <NavLink to="/" className="footer__link">ADVERTISING</NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink to="/" className="footer__link">DISNEY+</NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink to="/" className="footer__link">MARVELHQ.COM</NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink to="/" className="footer__link">REDEEM DIGITAL</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p className="footer__parrafo">Copyright © 2021 Kelydev, Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;