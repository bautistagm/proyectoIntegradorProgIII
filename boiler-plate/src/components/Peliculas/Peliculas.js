import { Link } from "react-router-dom";
import './Peliculas.css';
import { Component } from "react";

class Peliculas extends Component {


  constructor(props) {
    super(props);
    this.state = {
      descripciontxt: 'Ver descripcion',
      descripcion: 'Oculta ',
      favoritostxt: "Agregar"
    };
  };
  mostrarDesc() {
    if (this.state.descripcion === 'Oculta') {
      this.setState({
        descripciontxt: 'Ocultar descripcion',
        descripcion: 'Visible '
      })
    } else {
      this.setState({
        descripciontxt: 'Ver descripcion',
        descripcion: 'Oculta'
      })

    }
  };

  componentDidMount() {
    let favs = [];
    const storage = localStorage.getItem('favoritos')

    if (storage !== null) {
      let favsJs = JSON.parse(storage)
      favs = favsJs
    }
    if (favs.includes(this.props.pelicula.id)) {
      this.setState({
        favoritostxt: 'Quitar'
      })
    }
  };
  cambiarFavs(id) {
    let favs = [];
    const storage = localStorage.getItem('favoritos')

    if (storage !== null) {
      let favsJs = JSON.parse(storage)
      favs = favsJs
    }
    if (favs.includes(id)) {
      favs = favs.filter(ID => ID !== id);
      this.setState({
        favoritostxt: 'Agregar'
      })
    } else {
      favs.push(id);
      this.setState({
        favoritostxt: 'Quitar'
      })
    }
    localStorage.setItem('favoritos', JSON.stringify(favs));
  }


  render() {

    return (
      <div className="character-card">
        <Link to={`/detalle/${this.props.pelicula.id}`}>
          <img src={`https://image.tmdb.org/t/p/w342/${this.props.pelicula.poster_path}`} alt={this.props.pelicula.title} />
          <h4>{this.props.pelicula.title}</h4>
        </Link>
        <p onClick={() => this.mostrarDesc()} className='OverViewCard'>{this.state.descripciontxt} </p>
        <p className={this.state.descripcion}>{this.props.pelicula.overview}</p>
        <button><a href={'hola'}>Ver todas</a></button>


        <button onClick={() => this.cambiarFavs(this.props.pelicula.id)}>{this.state.favoritostxt}</button>

      </div>
    );
  }
}

export default Peliculas;
