import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";
import { Component } from "react";
import Loader from '../components/Loader/Loader';
import "../pages/styles.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      topRatedMovies: [],
      nowPlayingMovies: [],
      cargando: true,
    };
  }

  componentDidMount() {

    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=3f3f4472794a21df42007fe391cd1280")
      .then(response => response.json())
      .then(data => {
        this.setState({
          topRatedMovies: data.results.slice(0, 5),
          cargando: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ cargando: false });
      });


    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=3f3f4472794a21df42007fe391cd1280")
      .then(response => response.json())
      .then(data => {
        this.setState({
          nowPlayingMovies: data.results.slice(0, 5),
          cargando: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ cargando: false });
      });
  }

  render() {
    return (
      <>
        <h1>Bienvenidos a Cheflix!</h1>
        <main>
        {this.state.cargando ? (
          <Loader/>
        ) : (
          <>
          <h2>Mejores Ranqueadas</h2>
          <PeliculasGrid peliculas={this.state.topRatedMovies} />

          <h2>Cartelera</h2>
          <PeliculasGrid peliculas={this.state.nowPlayingMovies} />
          </>
        )}
        </main>
      </>
    );
  }
}

export default Home;


