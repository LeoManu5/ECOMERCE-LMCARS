import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src="/cart-icon.png" alt="Cart Icon" />
      <span className="badge badge-pill badge-primary">3</span>
    </div>
  );
};

export default CartWidget;
