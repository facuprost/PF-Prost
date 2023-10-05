import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ data }) => {
  const { addItem, isInCart } = useCart(); // Obtiene la función addItem y la función isInCart desde el contexto
  const [count, setCount] = useState(null);

  const onAdd = (value) => {
    setCount(value);
    if (!isInCart(data.id)) {
      addItem(data, value); // Agrega el producto al carrito si no está en el carrito
    }
  };

  
    return (
      <div className="detail">
        {data ? ( // Verifica si data está definido antes de acceder a sus propiedades
          <div className="detail-card">
            <img className="detail-card-img" src={data.image} alt="product-image" />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>$ {data.price}</p>
          </div>
        ) : null}
        {typeof count === "number" && data ? ( // Verifica si data está definido antes de acceder a su propiedad stock
          <Link to="/cart">Finalizar compra</Link>
        ) : (
          <ItemCount stock={data ? data.stock : 0} initial="1" onAdd={onAdd} /> // Verifica si data está definido antes de acceder a su propiedad stock
        )}
      </div>
    );
  };
  
