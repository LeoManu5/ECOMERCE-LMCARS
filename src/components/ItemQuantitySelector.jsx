import React, { useState } from 'react';

const ItemQuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="d-flex align-items-center">
      <button onClick={handleDecrease} className="btn btn-secondary">-</button>
      <span className="mx-3">{quantity}</span>
      <button onClick={handleIncrease} className="btn btn-secondary">+</button>
    </div>
  );
}

export default ItemQuantitySelector;
