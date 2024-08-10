import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={product.imageUrl} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">${product.price}</p>
          <Link to={`/item/${product.id}`} className="btn btn-primary">Ver Detalle</Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
