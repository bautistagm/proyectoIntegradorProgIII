import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";
import { Component } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import "../pages/styles.css";

class Home extends Component {
  render() {
    return (
      <>
        <h1>Bienvenidos a Cheflix!</h1>
        <main>
          <h2>Mejores Rateadas</h2>
          
          <PeliculasGrid apiEndpoint="https://api.themoviedb.org/3/movie/top_rated" />

          <h2>Cartelera</h2>
         
          <PeliculasGrid apiEndpoint="https://api.themoviedb.org/3/movie/now_playing" />
        </main>
      </>
    );
  }
}

export default Home;
