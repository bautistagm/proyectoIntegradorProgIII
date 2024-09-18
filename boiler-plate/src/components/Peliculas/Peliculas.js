import './Peliculas.css';
import { Component } from "react";

class Peliculas extends Component {

  render() {
   
    const { pelicula } = this.props;

    if (!pelicula) {
      return <p>No hay información disponible</p>;  
    }

   
    const { img, nombre, descripcion, link, extra } = pelicula;

    return (
      <div className="character-card">
        <img src={img} alt={nombre} />
        <h4>{nombre}</h4>
        <p>{descripcion}</p>
        <button><a href={link}>Ver todas</a></button>
        
        <p className={this.state?.viewMore === true ? 'show' : 'hide'}>{extra}</p>
      </div>
    );
  }
}

export default Peliculas;
