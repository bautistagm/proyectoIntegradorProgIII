import React, { Component } from 'react';
import "../pages/styles.css"

class PeliculaDetalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: null,
            cargando: true,
            mensaje: '',
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.fetchPelicula(id);
    }

    fetchPelicula(id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3f3f4472794a21df42007fe391cd1280`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    pelicula: data,
                    cargando: false,
                });
            })
            .catch(error => {
                this.setState({ cargando: false });
            });
    }

    agregarAFavoritos(id) {
        const storage = localStorage.getItem('favoritos');
        const favoritos = storage ? JSON.parse(storage) : [];
        if (!favoritos.includes(id)) {
            favoritos.push(id);
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
            this.setState({ mensaje: 'Película agregada a favoritos!' });
        }
    }

    render() {
        const { pelicula, cargando, mensaje } = this.state;

        if (cargando) {
            return <div>Cargando...</div>;
        }

        if (!pelicula) {
            return <div>No se encontró la película.</div>;
        }

        return (
            <div className="pelicula-detalle">
                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
                <h1>{pelicula.title}</h1>
                <p>Calificación: {pelicula.vote_average}</p>
                <p>Fecha de Estreno: {pelicula.release_date}</p>
                <p>Duración: {pelicula.runtime} minutos</p>
                <p>Sinopsis: {pelicula.overview}</p>
                <p>Género: {pelicula.genres.map(genre => genre.name)}</p>
                <button onClick={() => this.agregarAFavoritos(pelicula.id)}>
                    Agregar a Favoritos
                </button>
                {mensaje && <p>{mensaje}</p>} 
            </div>
        );
    }
}

export default PeliculaDetalle;


