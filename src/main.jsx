import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDuSvMeHYNMpxipnOrMPb5klkfr58y7UMs",
  authDomain: "proyecto-final-prost.firebaseapp.com",
  projectId: "proyecto-final-prost",
  storageBucket: "proyecto-final-prost.appspot.com",
  messagingSenderId: "88107695630",
  appId: "1:88107695630:web:c1751b3ab9f10a081a865f"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
