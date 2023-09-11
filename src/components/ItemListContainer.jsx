import React, { useEffect, useState } from 'react';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al cargar los productos', error));
  }, []);

  return (
    <div className="item-list-container">
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/item/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
