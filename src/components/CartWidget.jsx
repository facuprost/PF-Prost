import React from 'react';
import { useCart } from '../context/CartContext'; // Importa useCart desde tu contexto
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

const CartWidget = () => {
  const { cartItems } = useCart(); // Obtén los cartItems del contexto

  // Calcula la cantidad total de elementos en el carrito
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    // Condición para mostrar o no el widget
    totalItems > 0 ? (
      <Link to="/cart" className="nav-cart"> {/* Agrega el enlace a la ruta "/cart" */}
        <img src="/cart_icon.jpg" alt="cart-icon" className="icon" />
        <span>{totalItems}</span>
      </Link>
    ) : null
  );
};

export default CartWidget;

