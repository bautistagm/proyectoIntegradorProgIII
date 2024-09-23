import './PeliculasGrid.css';
import React, { Component } from 'react';
import Peliculas from '../Peliculas/Peliculas';

class PeliculasGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],  
    };
  }

  componentDidMount() {
    const { apiEndpoint } = this.props;  // Recibimos la URL desde las props
    fetch(`${apiEndpoint}?api_key=3f3f4472794a21df42007fe391cd1280`)
      .then(response => response.json())
      .then(data => {
        this.setState({
            peliculas: data.results.slice(0, 5)  // Mostramos solo 5 películas
        });
      })
      .catch(error => console.log(error));  
  }

  render() {
    return (
      <section className="card-container">
        {this.state.peliculas.length > 0 ? (
          this.state.peliculas.map((pelicula, idx) => (
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
