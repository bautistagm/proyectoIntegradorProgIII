import './Peliculas.css'
import { Component } from "react"

class Peliculas extends Component {
    
    constructor(props){
        super(props);
        this.state = {
          viewMore : false
        }
      }
      

      render(){

        const {img, nombre, descripcion, link, extra} = this.props.personaje
        return(
            <div className="character-card">
              <img src={`${img}`} alt="" />
              <h4>{nombre}</h4>
              <p>{descripcion}</p>
              <a href={`${link}`}>Ver más</a>
              <button>Ver extra</button>
              <button>Ocultar extra</button>
              <p className={this.state.viewMore === true ? 'show': 'hide' }>{extra}</p>
          </div>
        )
      
      }
      

}

export default Peliculas;