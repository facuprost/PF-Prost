import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ data }) => {
  const { addItem, isInCart } = useCart(); 
  const [count, setCount] = useState(null);

  const onAdd = (value) => {
    setCount(value);
    if (!isInCart(data.id)) {
      addItem(data, value);
    }
  };

  
    return (
      <div className="detail">
        {data ? ( 
          <div className="detail-card">
            <img className="detail-card-img" src={data.image} alt="product-image" />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>$ {data.price}</p>
          </div>
        ) : null}
        {typeof count === "number" && data ? ( 
          <Link to="/cart" className="finalizar-compra">Finalizar compra</Link>
        ) : (
          <ItemCount stock={data ? data.stock : 0} initial="1" onAdd={onAdd} /> 
        )}
      </div>
    );
  };
  
