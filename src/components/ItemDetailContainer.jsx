import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore"; // Importa las funciones necesarias de Firestore
import { db } from '../firebase/firebaseConfig';
 // Importa la instancia de Firebase

export const ItemDetailContainer = () => {
  const { id: itemId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define una función asincrónica para obtener el detalle del producto desde Firestore
    const fetchItem = async () => {
      const itemRef = doc(db, "productos", itemId);
      const itemDoc = await getDoc(itemRef);
      if (itemDoc.exists()) {
        setData({ id: itemDoc.id, ...itemDoc.data() });
      }
    };

    fetchItem(); // Llama a la función asincrónica
  }, [itemId]);

  return (
    <div className="detail-container">
      <ItemDetail data={data} />
    </div>
  );
};
