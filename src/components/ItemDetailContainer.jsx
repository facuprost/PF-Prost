import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import { useCart } from '../context/CartContext'; 

export const ItemDetailContainer = () => {
  const { id: itemId } = useParams();
  const [data, setData] = useState(null);
  const { cartItems } = useCart(); 

  useEffect(() => {
    const fetchItem = async () => {
      const itemRef = doc(db, "productos", itemId);
      const itemDoc = await getDoc(itemRef);
      if (itemDoc.exists()) {
        setData({ id: itemDoc.id, ...itemDoc.data() });
      }
    };

    fetchItem();
  }, [itemId]);

  return (
    <div className="detail-container">
      <ItemDetail data={data} cartItems={cartItems} /> 
    </div>
  );
};
