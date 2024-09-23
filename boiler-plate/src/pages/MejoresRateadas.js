import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";
import { Component } from "react";
import "../pages/styles.css";
import Peliculas from "../components/Peliculas/Peliculas";


class MejoresRateadas extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            filteredMovies: '',
            filterValue: '',
            actualPage: 1
        };
    }


    componentDidMount() {
        fetch(
            "https://api.themoviedb.org/3/movie/top_rated/?api_key=3f3f4472794a21df42007fe391cd1280"
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.results, filteredMovies: data.results })
            )
            .catch((err) => console.log(err));
    }
    handleFilter(e) {
        const value = e.target.value
        this.setState({
            filterValue: value,
            filteredMovies: this.state.movies.filter(movie =>
                movie.title.toLowerCase().includes(value.toLowerCase())
            ),
        });
    }
    handleResetFilter() {
        this.setState({
            filterValue: "",
            filteredMovies: this.state.movies
        })
    }

    handleLoadMore() {
        fetch(
            "https://api.themoviedb.org/3/movie/top_rated/?api_key=3f3f4472794a21df42007fe391cd1280"
        ).then((response) => response.json())
            .then((data) =>
                this.setState({ movies: this.state.movies.concat(data.results), 
                    filteredMovies:  this.state.filteredMovies.concat(data.results), 
                    actualPage: this.state.actualPage+ 1 })
            )
            .catch((err) => console.log(err));
    }


    render() {
        return (
            <>
                <div style={{ marginBottom: "50px" }}>
                    <input type="text"
                        value={this.state.filteredValue}
                        onChange={(e) => this.handleFilter(e)}
                    />
                    <button>Reset filter</button>
                </div>

                //hacerlo con una sola y un map o ver alternativas. Tambien sacar el slice de pelgrid y q sea solo del home
                <Peliculas movies={this.state.filteredMovies} />  
            </>
        );
    }



}

export default MejoresRateadas;