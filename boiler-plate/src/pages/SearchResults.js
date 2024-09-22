import { Component } from "react"
import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";

class SearchResults extends Component{
    constructor(props){
        super(props);

        this.state = {
            movies:[]
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=3f3f4472794a21df42007fe391cd1280`)
        .then(response => response.json())
        .then(data => this.setState({
            movies:data.results
        })).catch(error => console.log(error));
    }

    render(){
        return (
            <div><PeliculasGrid movies={this.state.movies}/></div>
        )
    }
}

export default SearchResults