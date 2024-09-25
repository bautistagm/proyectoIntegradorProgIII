import React, { Component } from 'react';
import Peliculas from '../components/Peliculas/Peliculas';
import Loader from '../components/Loader/Loader';

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasFavoritas: [],
            cargando: true,
        };
    }

    componentDidMount() {
        const storage = localStorage.getItem('favoritos');
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage);
            Promise.all(
                parsedStorage.map(id =>
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3f3f4472794a21df42007fe391cd1280`)
                        .then(response => response.json())
                )
            )
            .then(data => {
                this.setState({
                    peliculasFavoritas: data,
                    cargando: false,
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({ cargando: false });
            });
        } else {
            this.setState({ cargando: false });
        }
    }

    quitarFavoritos(id) {
        const storage = localStorage.getItem('favoritos');
        const parsedStorage = JSON.parse(storage);
        const restoFavoritos = parsedStorage.filter(favId => favId !== id);

        localStorage.setItem('favoritos', JSON.stringify(restoFavoritos));

        this.setState({
            peliculasFavoritas: this.state.peliculasFavoritas.filter(pelicula => pelicula.id !== id)
        });
    }

    render() {
        return (
            <div className="favoritos-container">
                <h1>Mis Favoritos</h1>
                {this.state.cargando ? ( 
                    <Loader />
                ) : (
                  this.state.peliculasFavoritas.length > 0 ? (
                    this.state.peliculasFavoritas.map((pelicula) => (
                        <div key={pelicula.id} className="favoritos-card">
                            <Peliculas pelicula={pelicula} />
                        </div>
                    ))
                ) : (
                    <p>No tienes películas favoritas aún.</p>
                )
                )}
            </div>
        );
    }
}

export default Favoritos;
