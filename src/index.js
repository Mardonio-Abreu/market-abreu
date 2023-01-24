import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //Importo y ejecuto
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <CartWidget cantCarrito={10}/>
    <NavBar />
    
  </React.StrictMode>
);