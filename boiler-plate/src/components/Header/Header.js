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
                        <li>
                            <Link to="/favoritos">Favoritos</Link>
                        </li>
                        <li>Ver todas</li>
                    </ul>
                    <div className="fondo">
                        <SearchForm history={this.props.history} />
                    </div>
                    <ul className="user">
                        <li>Nombre usuario <img src="" alt="" /></li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Header;
