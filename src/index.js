import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

const firebaseConfig = {
  apiKey: "AIzaSyDy6NhYeHz4nuaplKPzdZhMx0lOyxGPYkk",
  authDomain: "ecommerce-e4be7.firebaseapp.com",
  projectId: "ecommerce-e4be7",
  storageBucket: "ecommerce-e4be7.appspot.com",
  messagingSenderId: "537680232549",
  appId: "1:537680232549:web:479717b2013e9cce67068c",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
