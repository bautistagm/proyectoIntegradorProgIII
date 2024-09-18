import { Component } from "react"

class SearchForm extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div>
                <form>
                    <input name = "query" />
                </form>
            </div>
        )
    }
}

export default SearchForm