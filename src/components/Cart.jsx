import React from 'react';
import { useCart } from '../context/CartContext'; 
import { Link } from 'react-router-dom'; 

const Cart = () => {
  const { cartItems, removeItem, clear } = useCart(); 

 
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
          <Link to="/checkout" className='pagar'>
          <button onClick={clear}>Pagar</button>
          </Link>
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

