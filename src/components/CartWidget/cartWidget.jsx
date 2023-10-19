import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i> {/* Icono de carrito de compras de Font Awesome */}
      <span className="item-count">3</span> {/* Número hardcodeado */}
    </div>
  );
};

export default CartWidget;
