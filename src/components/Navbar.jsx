import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">LMCARS Seguridad Automotor</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/alarmas">Alarmas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/levanta-vidrios">Levanta Vidrios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/polarizados">Polarizados</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/llaves-codificadas">Llaves Codificadas</Link>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
