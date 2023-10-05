import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const Checkout = () => {
  const { cartItems, clear } = useCart();
  const [buyerInfo, setBuyerInfo] = useState({ name: '', phone: '', email: '' });
  const [orderId, setOrderId] = useState(null);
  const [orderCompleted, setOrderCompleted] = useState(false); // Agrega un estado para rastrear si la compra se ha completado

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo({ ...buyerInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear la orden
    const order = {
      buyer: buyerInfo,
      items: cartItems.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        cant: item.quantity,
      })),
      total: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    };

    try {
      // Guardar la orden en Firestore
      const docRef = await addDoc(collection(db, 'ordenes'), order);
      setOrderId(docRef.id);

      // Limpiar el carrito
      clear();

      // Marcar la compra como completada
      setOrderCompleted(true);
    } catch (error) {
      console.error('Error al guardar la orden:', error);
    }
  };

  return (
    <div className="checkout-container">
      {orderCompleted ? (
        <div>
          <h2>¡Gracias por tu compra!</h2>
          <p>Tu número de orden es: {orderId}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          {/* Resto del formulario aquí */}
          <button type="submit">Finalizar compra</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;

