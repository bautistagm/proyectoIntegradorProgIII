import './PeliculasGrid.css';
import Peliculas from '../Peliculas/Peliculas';
import { Component } from "react";

class PeliculasGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
          peliculas: [],  
          viewMore: false
        };
      }
    
      componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=3f3f4472794a21df42007fe391cd1280')  
          .then(data => {
            this.setState({
              peliculas: data.results,  
            });
          })
          .catch(error => console.log(error));
      }
    
      render() {
        return (
          <section className='container'>
            {
              this.state.peliculas.length > 0 ?
                this.state.peliculas.map((pelicula, idx) => <Peliculas key={idx} pelicula={pelicula} />)
                :
                <p>No se encontraron películas.</p>
            }
          </section>
        );
      }
}

export default PeliculasGrid;
