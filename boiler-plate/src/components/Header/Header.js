import { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchForm from "../SearchForm/SearchForm";

class Header extends Component {
    render() {
        return (
            <>
                <nav>
                    <ul>
                        <img src="/img/cheflix.jpg" alt="Logo" className="logo" />
                    </ul>
                    <ul className="main-nav">
                    <li className="li-navs">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="li-navs">
                            <Link to="/favoritos">Favoritos</Link>
                        </li>
                        <li className="li-navs">
                            <Link to="/mejoresrateadas">Mejores Rateadas</Link>
                        </li>
                        <li className="li-navs">
                            <Link to="/all">Cartelera</Link>
                        </li>
                        
                    </ul>
                    <div className="fondo">
                        <SearchForm history={this.props.history} />
                    </div>
                  
                </nav>
            </>
        );
    }
}

export default Header;
