import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";
import { Component } from "react"
import SearchForm from "../components/SearchForm/SearchForm";
import "../pages/styles.css"

class Home extends Component {

    

    render() {
      return (
        <>
         
          <h1>Bienvenidos a Cheflix!</h1>
          <main>
            <h2>Peliculas más Populares</h2>
            <PeliculasGrid />
  
            <h2>Cartelera</h2>
            <PeliculasGrid />
          </main>
        </>
      );
    }
  }
  
  export default Home;