import { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [qty, setQty] = useState(Number(initial));

  const onSubs = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(qty);
  };

  return (
    <div className="detail-count">
      <button onClick={onSubs}>-</button>
      <span>{qty}</span>
      <button onClick={() => setQty(qty + 1)}>+</button>
      <button onClick={handleAddToCart}>Agregar a carrito</button> 
    </div>
  );
};

