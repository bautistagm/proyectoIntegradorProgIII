import { Component } from "react";
import "./Header.css"

const Header = () => {

    return (

    <nav>

        <ul>
            <img src="/img/cheflix.jpg" alt="Logo" className="logo" />
        </ul>
        <ul className="main-nav">
           
            <li>elemento menu</li>
            <li>elemento menu</li>
            <li>elemento menu</li>
            <li>elemento menu</li>
        </ul>
        <ul className="user">
            <li>Nombre usuario <img src="" alt="" /></li>
        </ul>
    </nav>


    )

    

}



export default Header;