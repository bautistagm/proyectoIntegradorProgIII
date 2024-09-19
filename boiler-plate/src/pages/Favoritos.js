import React, { Component } from 'react';
import PeliculasGrid from '../components/PeliculasGrid/PeliculasGrid';

class Favoritos extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const storage = localStorage.getItem('favoritos')
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage)
            Promise.all(
                parsedStorage.map(id =>
                    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=3f3f4472794a21df42007fe391cd1280'))
                    .then(response => response.json())
                    .then(data => {
                        this.setState({
                            peliculas: [...this.state.peliculas, data]
                        })
                        console.log(data);
                    })
            )
        }
    }

    render() {
        return (<><PeliculasGrid peliculas= {this.state.peliculas}></PeliculasGrid></>
        );
    }
}

export default Favoritos