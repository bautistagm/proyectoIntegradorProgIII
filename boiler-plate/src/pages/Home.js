import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";
import { Component } from "react";
import "../pages/styles.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      topRatedMovies: [],
      nowPlayingMovies: [],
    };
  }

  componentDidMount() {

    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=3f3f4472794a21df42007fe391cd1280")
      .then(response => response.json())
      .then(data => {
        this.setState({
          topRatedMovies: data.results.slice(0, 5),
        });
      })
      .catch(error => console.log(error));


    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=3f3f4472794a21df42007fe391cd1280")
      .then(response => response.json())
      .then(data => {
        this.setState({
          nowPlayingMovies: data.results.slice(0, 5),
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        <h1>Bienvenidos a Cheflix!</h1>
        <main>

          <h2>Mejores Rateadas</h2>
          <PeliculasGrid peliculas={this.state.topRatedMovies} />

          <h2>Cartelera</h2>
          <PeliculasGrid peliculas={this.state.nowPlayingMovies} />
        </main>
      </>
    );
  }
}

export default Home;


