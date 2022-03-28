import {
    NavLink
} from 'react-router-dom';

import logo from '../assets/img/logo.png';
import icono from '../assets/img/icono.png'
import search from '../assets/img/searchh.png';

const Header = () => {
    return (
    <header className="header">
        <nav className="nav__top">
            <ul className="nav__list">
                <li className="nav__item nav__item--signUp">
                    <span className="nav__span">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.6 66.7">
                            <path fill-rule="evenodd"
                                d="M59.5 15.1L53 51.4c0 .4-.3.6-.6.6h-6.5c-.3 0-.6-.2-.8-.6l-8.8-24.7H36l-4.3 24.7c-.1.3-.3.6-.6.6H25c-.3 0-.6-.2-.5-.6l6.6-37.3c.1-.3.3-.6.6-.6h6.4c.5 0 .7.2.8.6l8.8 24.7h.3l5.5-30.4C47.9 3.7 40.6.9 32.7.9 14.7.9.2 15.5.2 33.4c0 8.8 3.5 16.7 9.1 22.5l7.3-41.7c.1-.3.3-.6.6-.6H24c.3 0 .5.2.5.6l-8.3 47.2c4.8 2.8 10.4 4.5 16.4 4.5 17.9 0 32.5-14.5 32.5-32.5 0-6.8-2.1-13.1-5.6-18.3z">
                            </path>
                        </svg>
                    </span>
                    <NavLink to="/" className="nav__link">SIGN IN</NavLink>
                    <span className="nav__spam">|</span>
                    <NavLink to="/" className="nav__link">JOIN</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/" className="nav__link">
                        <img src={logo} alt="Logo Web" className="nav__logo"/>
                    </NavLink>
                </li>
                <li className="nav__item nav__item--subscribe">
                    <div className="nav__subscribe">
                        <img src={icono} alt="logo" className="nav__img"/>
                        <div className="nav__text">
                            <p className="nav__parrafo">MARVEL UNLIMITED</p>
                            <span className="nav__spanSubscribe">SUBSCRIBE</span>
                        </div>
                    </div>
                    <NavLink to="/" className="nav__item--search">
                        <img src={search} alt="buscador" className="nav__search"/>
                    </NavLink>
                </li>
            </ul>
        </nav>
        <nav className="nav__bottom">
            <ul className="nav__list--bottom">
                <li className="nav__items">
                    <NavLink to="/" className="nav__links">VIDEOS</NavLink>
                </li>
                <li className="nav__items">
                    <NavLink to="/" className="nav__links">CHARACTERS</NavLink>
                </li>
                <li className="nav__items">
                    <NavLink to="/" className="nav__links">COMICS</NavLink>
                </li>
                <li className="nav__items">
                    <NavLink to="/" className="nav__links">MOVIES</NavLink>
                </li>
                <li className="nav__items">
                    <NavLink to="/" className="nav__links">TV SHOWS</NavLink>
                </li>
                <li className="nav__items">
                    <a href="#" className="nav__links">GAMES</a>
                    <NavLink to="/" className="nav__links">GAMES</NavLink>
                </li>
                <li className="nav__items">
                    <NavLink to="/" className="nav__links">NEWS</NavLink>
                </li>
                <li className="nav__items">
                    <NavLink to="/" className="nav__links">MORE</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    );
}
 
export default Header;