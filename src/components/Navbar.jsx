import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">LMCARS Seguridad Automotor</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
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
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
