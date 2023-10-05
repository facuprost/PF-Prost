import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore"; // Importa las funciones necesarias de Firestore
import { db } from '../firebase/firebaseConfig';


const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { id: catId } = useParams();

  useEffect(() => {
    // Define una función asincrónica para obtener los datos de Firestore
    const fetchData = async () => {
      const q = catId ? query(collection(db, "productos"), where("category", "==", catId)) : collection(db, "productos");
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(items);
    };

    fetchData(); // Llama a la función asincrónica
  }, [catId]);

  return (
    <div className="item-container">
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
