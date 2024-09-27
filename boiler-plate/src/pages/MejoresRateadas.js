import React, { Component } from 'react';
import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";
import Loader from '../components/Loader/Loader';

class MejoresRateadas extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],             
            filteredMovies: [],      
            filterValue: '',         
            actualPage: 1,
            cargando: true,           
        };
    }

    componentDidMount() {
        this.fetchMovies();  
    }

    
    fetchMovies() {
        this.setState({ cargando: true });
        fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=3f3f4472794a21df42007fe391cd1280&page=${this.state.actualPage}`
        )
        .then((response) => response.json())
        .then((data) => {
            const newMovies = this.state.movies.concat(data.results);  
            this.setState({
                movies: newMovies,               
                filteredMovies: newMovies,        
                actualPage: this.state.actualPage + 1,
                cargando: false   
            });
        })
        .catch((err) => {
            console.log(err);
            this.setState({ cargando: false });
        });
    }

   
    handleFilter(e) {
        const value = e.target.value.toLowerCase();  
        this.setState({
            filterValue: value,
            filteredMovies: this.state.movies.filter(movie =>
                movie.title.toLowerCase().includes(value)
            ),
        });
    }

    
    handleResetFilter() {
        this.setState({
            filterValue: '',
            filteredMovies: this.state.movies  
        });
    }

   
    handleLoadMore() {
        this.fetchMovies(); 
    }

    render() {
        const { cargando, filteredMovies } = this.state;
        
        return (
            <>
            <main>
                <h2>Mejores Películas Rateadas</h2>

                {cargando ? ( 
                    <Loader />
                ) : (
                    <>
                    <div style={{ marginBottom: "20px"}}>
                        <input 
                            type="text"
                            placeholder="Filtrar películas"
                            value={this.state.filterValue}
                            onChange={(e) => this.handleFilter(e)}
                        />
                        <button onClick={() => this.handleResetFilter()}>Resetear Filtro</button>
                    </div>

                    <PeliculasGrid peliculas={filteredMovies} />

                    <div style={{ marginTop: "20px", textAlign: "center" }}>
                        <button onClick={() => this.handleLoadMore()}>Cargar más</button>
                    </div>
                    </>
                )}
            </main>
            </>
        );
    }
}

export default MejoresRateadas;



