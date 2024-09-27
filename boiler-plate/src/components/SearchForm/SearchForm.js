import { Component } from "react";
import "./SearchForm.css"

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ""
        };
    }

    handleFormChange(e) {
        this.setState({
            query: e.target.value
        });
    }

    handleCancelSubmit(e) {
        e.preventDefault();
    }

    handleFormSubmit(){
        if (this.state.query) {
        this.props.history.push(`/search?query=${this.state.query}`);
    }
    }

    render() {
        return (
            <div className="fondo">
                <form onSubmit={(e) => this.handleCancelSubmit(e)}>
                    <input
                        onChange={(e) => this.handleFormChange(e)}
                        name="query"
                        value={this.state.query}
                        placeholder="Buscar..."
                        className="caja"
                    />
                    <button className="button" onClick={() => this.handleFormSubmit()}>
                        <img src="/img/lupita.jpg" alt="Buscar" class="search-icon"/>
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchForm;