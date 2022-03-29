import React, {useState, useEffect} from 'react';

const Api = () => {

    const [hero, setHero] = useState([]);

    useEffect (()=>{
        fetch("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=18fb7ecdf44b4742cda3c99aad7e47e0&hash=6d0e8376fdfb3bd21746121e2f0028d6")
        .then(response=> response.json())
        .then(dat => setHero(dat.data.results));
    },[]);

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
                    {hero.map(heros => (
                        <div className="col-md-6 col-lg-3">
                        <div className="card api__card">
                            <img className="card__img" src={`${heros.thumbnail.path}.${heros.thumbnail.extension}`} alt="mortarboard"/>
                            <div className="card-body">
                                <h4 className="card-title">{heros.name}</h4>
                                <p>Numero de comics: {heros.comics.available}</p>
                                <p className="card-text">{heros.modified}</p>
                                <button type="submit" className="btn btn-outline-dark">Ver</button>
                            </div>
                        </div>
                    </div>   
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Api;