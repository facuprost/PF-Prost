import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import { useCart } from '../context/CartContext'; 

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { id: catId } = useParams();
  const { cartItems } = useCart(); 

  useEffect(() => {
    const fetchData = async () => {
      const q = catId ? query(collection(db, "productos"), where("category", "==", catId)) : collection(db, "productos");
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(items);
    };

    fetchData();
  }, [catId]);

  return (
    <div className="item-container">
      <ItemList data={data} cartItems={cartItems} /> 
    </div>
  );
};

export default ItemListContainer;
