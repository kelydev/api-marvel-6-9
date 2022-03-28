import {
    NavLink
} from 'react-router-dom';

import fondoMarvel from '../assets/img/Marvel.jpg';
import spiderMarvel from '../assets/img/spiderMarvel.jpg';
import fondoMarvelv1 from '../assets/img/fondoMarvelv1.jpg';
import comiccMarvel from '../assets/img/comiccMarvel.jpg';
import fondoMarvelAnuncio from '../assets/img/fondoMarvelAnuncio.jpg';

const Home = () => {
    return (
        <main className="main">
            <div className="container-fluid">
                <NavLink to="/" className="nav__anuncio">
                    <img src='https://terrigen-cdn-dev.marvel.com/content/prod/2x/disneybtn_asset2x_4.png' alt="container__img" className="nav__logo"/>
                </NavLink>
            </div>
            <div id="demo" className="carousel slider" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={fondoMarvel} alt="fondo Marvel" className="d-block"/>
                    </div>
                    <div className="carousel-item">
                        <img src={spiderMarvel} alt="spider" className="d-block"/>
                    </div>
                    <div className="carousel-item">
                        <img src={fondoMarvelv1} alt="marvelv1" className="d-block"/>
                    </div>
                    <div className="carousel-item">
                        <img src={comiccMarvel} alt="comic" className="d-block"/>
                    </div>
                    <div className="carousel-item">
                        <img src={fondoMarvelAnuncio} alt="anuncioMarvel" className="d-block"/>
                    </div>
                </div>
                <div className="carousel-indicator">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="button__slider active">
                        New Marvel Collection From RSVLTS!
                    </button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1" className="button__slider">
                        The Future Of Spider-Man
                    </button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2" className="button__slider">
                        This Week's New Comics
                    </button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3" className="button__slider">
                        Celebrate Pride
                    </button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="4" className="button__slider">
                        The Future Of T'Challa
                    </button>
                </div>
            </div>
        </main>
    );
}
 
export default Home;