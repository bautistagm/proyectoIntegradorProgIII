import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <p>Cargando...</p>
            <img src="/img/loader.gif" alt="Loader" />
        </div>
    );
};

export default Loader;
