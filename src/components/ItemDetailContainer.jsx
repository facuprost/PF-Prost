import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <div className="item-detail-container">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default ItemDetailContainer;


