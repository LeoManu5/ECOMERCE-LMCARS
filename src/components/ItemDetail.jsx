import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <ItemQuantitySelector />
      <Description text={product.longDescription} />
      <AddItemButton />
    </div>
  );
};

export default ItemDetail;
