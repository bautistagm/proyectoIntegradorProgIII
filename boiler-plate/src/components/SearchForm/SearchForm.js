import { Component } from "react";

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
                    />
                    <button  onClick={() => this.handleFormSubmit()}>
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchForm;