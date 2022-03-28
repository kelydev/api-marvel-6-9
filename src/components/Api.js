import {
    NavLink
} from 'react-router-dom';

const Api = () => {
    return (
        <section className="api">
            <div className="container">
                <div className="container__top text-center">
                    <h2 className="api__text">Busca tu heroe favorito</h2>
                    <p>Busca tu heroe favorito en la Api de Marvel mira el mensaje que tiene pra ti :)</p>
                    <form className="form-inline api__form">
                        <input type="text" className="api__input form-control" placeholder="Buscar Heroe" name="buscador"/>
                        <button type="submit" className="api__buscador btn btn-outline-dark">Buscar</button>
                    </form>
                </div>
                <div className="container__card row text-center">
                    <div className="col-md-6 col-lg-3">
                        <div className="card api__card">
                            <img className="card__img"
                                src="https://cdn3.iconfinder.com/data/icons/marvel-avatars-filledoutline/64/ironman-avangers-marvel-avatars-gartoon-marvel_avatars-hero-512.png"
                                alt="mortarboard"/>
                            <div className="card-body">
                                <h4 className="card-title">America</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                                <p>S/123</p>
                                <NavLink to="/" className="btn btn-dark">ver</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="card api__card">
                            <img className="card__img"
                                src="https://cdn3.iconfinder.com/data/icons/marvel-avatars-filledoutline/64/vision-avangers-marvel-avatars-gartoon-marvel_avatars-hero-512.png"
                                alt="clock"/>
                            <div className="card-body">
                                <h4>Doctor Stranger</h4>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere.</p>
                                <p>S/123</p>
                                <NavLink to="/" className="btn btn-dark">ver</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card api__card">
                            <img className="card__img"
                                src="https://cdn4.iconfinder.com/data/icons/heroes-villains-vol-1-colored/100/Ironman_Mark_3-512.png"
                                alt="tarea"/>
                            <div className="card-body">
                                <h4>Wong</h4>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere.</p>
                                <p>S/123</p>
                                <NavLink to="/" className="btn btn-dark">ver</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card api__card">
                            <img className="card__img"
                                src="https://cdn1.iconfinder.com/data/icons/people-avatars-23/24/people_avatar_head_captain_america_marvel_hero-512.png"
                                alt="progreso"/>
                            <div className="card-body">
                                <h4>Spider Man</h4>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere.</p>
                                <p>S/123</p>
                                <NavLink to="/" className="btn btn-dark">ver</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Api;