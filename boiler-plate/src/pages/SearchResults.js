import { Component } from "react";
import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";
import Loader from "../components/Loader/Loader";

class SearchResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            isLoading: true
        };
    }

    componentDidMount() {
        this.fetchMovies();
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            this.fetchMovies();
        }
    }

    fetchMovies() {
        const query = this.props.location.search;
        if (query) {
            this.setState({ isLoading: true });
            fetch(`https://api.themoviedb.org/3/search/movie${query}&api_key=3f3f4472794a21df42007fe391cd1280`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        movies: data.results || [],
                        isLoading: false
                    });
                })
                .catch(error => {
                    console.error("Error fetching movies:", error);
                    this.setState({ isLoading: false });
                });
        } else {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { movies, isLoading } = this.state;

        return (
            <div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <PeliculasGrid peliculas={movies} />
                )}
            </div>
        );
    }
}

export default SearchResults;
