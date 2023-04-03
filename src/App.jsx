import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./css/style.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ColorSchemes from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Item from "./components/item/Item";

function App() {
  return (
    <Routes>
      <Route path="/products" element={<ItemListContainer />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
