import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart-icon.png'; // Asegúrate de tener un icono de carrito en esta ruta

const CartWidget = () => {
    return (
        <Link to="/cart">
            <div className="cart-widget">
                <img src={cartIcon} alt="Cart" style={{ width: 30, height: 30 }} />
                <span className="badge badge-pill badge-danger">3</span> {/* Número hardcodeado */}
            </div>
        </Link>
    );
};

export default CartWidget;
