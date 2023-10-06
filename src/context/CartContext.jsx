import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, quantity) => {
 
    const existingItemIndex = cartItems.findIndex((i) => i.id === item.id);

    if (existingItemIndex !== -1) {
 
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
    
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const clear = () => {
    setCartItems([]);
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
}

