import React from "react";
import "./css/style.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavigationBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import { Cart } from "./components/Cart/Cart";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/home" element={<Home />} />
        <Route path="/items" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
        <Route path="/items/:category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
