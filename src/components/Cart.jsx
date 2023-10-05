import React from 'react';
import { useCart } from '../context/CartContext'; // Importa useCart desde tu contexto
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const Cart = () => {
  const { cartItems, removeItem, clear } = useCart(); // Obtén cartItems, removeItem y clear del contexto

  // Función para calcular el precio total del carrito
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.quantity}x {item.title}</span>
                <span>${item.price * item.quantity}</span>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <span>Total: ${getTotalPrice()}</span>
          </div>
          <button onClick={clear}>Vaciar Carrito</button>
        </>
      ) : (
        <>
          <p>El carrito está vacío.</p>
          <Link to="/">Volver al Landing</Link>
        </>
      )}
    </div>
  );
};

export default Cart;

