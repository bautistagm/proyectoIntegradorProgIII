import PeliculasGrid from "../components/PeliculasGrid/PeliculasGrid";
import { Component } from "react"
import SearchForm from "../components/SearchForm/SearchForm";


class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            query:""
        }
    }

    handleFormChange(e){
        this.setState({
            query: e.target.value
        })
    }

    handleCancelSubmit(e){
        e.preventDefault()
    }

    handleFormSubmit(){
        this.props.history.push("/search", { query: this.state.query })
    }

    render() {
      return (
        <>
         <div className="fondo">
                <SearchForm history={this.props.history}/>
                <form onSubmit={(e)=>this.handleCancelSubmit(e)}>
                    <input onChange={(e)=>this.handleFormChange(e)} name = "query" value={this.state.query}/>
                    <button onClick={()=>this.handleFormSubmit}>Search</button>
                </form>
            </div>
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