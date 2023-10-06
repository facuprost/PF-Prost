import React, { useContext} from 'react';
import { CartContext } from '../context/CartContext'; 
import { Link } from 'react-router-dom'; 

const CartWidget = () => {
  const { cartItems } = useContext(CartContext); 

 
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
   
    totalItems > 0 ? (
      <Link to="/cart" className="nav-cart"> 
        <img src="/cart_icon.jpg" alt="cart-icon" className="icon" />
        <span>{totalItems}</span>
      </Link>
    ) : null
  );
};

export default CartWidget;

