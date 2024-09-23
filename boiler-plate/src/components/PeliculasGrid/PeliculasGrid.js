import './PeliculasGrid.css';
import React, { Component } from 'react';
import Peliculas from '../Peliculas/Peliculas';

class PeliculasGrid extends Component {
  render() {
    const { peliculas } = this.props;

    return (
      <section className="card-container">
        {peliculas && peliculas.length > 0 ? (
          peliculas.map((pelicula, idx) => (
            <Peliculas key={idx} pelicula={pelicula} />
          ))
        ) : (
          <p>No se encontraron películas.</p>
        )}
      </section>
    );
  }
}

export default PeliculasGrid;

