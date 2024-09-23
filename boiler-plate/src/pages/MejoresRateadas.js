import React, { Component } from 'react';
import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";
import "../pages/styles.css";


class MejoresRateadas extends Component {
    constructor() {
        super();
        this.state = {
            topRatedMovies: [],
        };
    }

    componentDidMount() {

        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=3f3f4472794a21df42007fe391cd1280")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    topRatedMovies: data.results,
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <>
                <h1>Mejores Películas Rateadas</h1>
                <main>

                    <PeliculasGrid peliculas={this.state.topRatedMovies} />
                </main>
            </>
        );
    }
}

export default MejoresRateadas;
