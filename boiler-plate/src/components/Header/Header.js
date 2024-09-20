import { Component } from "react";
import "./Header.css"
import SearchForm from "../SearchForm/SearchForm";


class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            query: ""
        }
    }

    handleFormChange(e) {
        this.setState({
            query: e.target.value
        })
    }

    handleCancelSubmit(e) {
        e.preventDefault()
    }

    handleFormSubmit() {
        this.props.history.push("/search", { query: this.state.query })
    }

    render() {
        return (
            <>

                <nav>

                    <ul>
                        <img src="/img/cheflix.jpg" alt="Logo" className="logo" />
                    </ul>
                    <ul className="main-nav">

                        <li>Detalle</li>
                        <li>Favoritos</li>
                        <li>Ver todas</li>

                    </ul>

                    <div className="fondo">
                        <SearchForm history={this.props.history} />
                        <form onSubmit={(e) => this.handleCancelSubmit(e)}>
                            <input onChange={(e) => this.handleFormChange(e)} name="query" value={this.state.query} />
                            <button onClick={() => this.handleFormSubmit}>Search</button>
                        </form>
                    </div>
                    
                    <ul className="user">
                        <li>Nombre usuario <img src="" alt="" /></li>
                    </ul>
                </nav>

            </>
        )

    }

}



export default Header;