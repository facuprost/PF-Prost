import '../style.css';
import { useState, useContext } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


export default function Checkout() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState();
  const { cartItems, limpiarCarrito } = useContext(CartContext);
    

  const precioTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  

  function crearOrden() {
    const db = getFirestore();
    const order = {
      buyer: {
       name, 
       email,
       phone
    },
    items: cartItems.map((item) => ({
      id: item.id,
      nombre: item.nombre,
      precioUnitario: item.precio,
      cantidad: item.quantity,
    })),
    total: precioTotal,
  };

  const ordenesRef = collection(db, "ordenes");
  addDoc(ordenesRef, order).then(result => setOrderId(result.id))
 }

 if(orderId) {
  return (
    <>
  <h5 style={{margin: "100px"}}>{`Gracias por tu compra, tu orden es: ${orderId}`}</h5>
  <Link to="/">
   <button onClick={limpiarCarrito} className="btn btn-success" type="button">Volver al catálogo</button>
  </Link>
  </>
  )
 }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Nombre</label>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <label>Email</label>
      <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
      <label>Telefono</label>
      <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
      <button onClick={crearOrden} >Finalizar compra</button>
    </form>
  )
}


