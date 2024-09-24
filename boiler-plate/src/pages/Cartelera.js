import React, { Component } from 'react';
import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";

class Cartelera extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],             
            filteredMovies: [],      
            filterValue: '',         
            actualPage: 1,           
        };
    }

    componentDidMount() {
        this.fetchMovies();  
    }

    
    fetchMovies() {
        fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=3f3f4472794a21df42007fe391cd1280&page=${this.state.actualPage}`
        )
        .then((response) => response.json())
        .then((data) => {
            const newMovies = this.state.movies.concat(data.results);  
            this.setState({
                movies: newMovies,               
                filteredMovies: newMovies,        
                actualPage: this.state.actualPage + 1  
            });
        })
        .catch((err) => console.log(err));
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
        return (
            <>
                <h1>Cartelera</h1>

               
                <div style={{ marginBottom: "20px" }}>
                    <input 
                        type="text"
                        placeholder="Filtrar películas"
                        value={this.state.filterValue}
                        onChange={(e) => this.handleFilter(e)}
                    />
                    <button onClick={() => this.handleResetFilter()}>Resetear Filtro</button>
                </div>

               
                <PeliculasGrid peliculas={this.state.filteredMovies} />

               
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <button onClick={() => this.handleLoadMore()}>Cargar más</button>
                </div>
            </>
        );
    }
}

export default Cartelera;