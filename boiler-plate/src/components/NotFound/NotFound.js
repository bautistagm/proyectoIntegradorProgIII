import './NotFound.css';
import { Component } from "react";

class NotFound extends Component {
    render() {
        return (
            <div className="not-found">
                <h1>404 - Página No Encontrada</h1>
                <p>Lo sentimos, la página que estás buscando no existe.</p>
                <button onClick={() => this.props.history.push('/')}>Volver al Inicio</button>
            </div>
        );
    }
}

export default NotFound;
