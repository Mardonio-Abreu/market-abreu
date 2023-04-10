import React from "react";
import "./css/style.css";
import ColorSchemes from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Item from "./components/Item/Item";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <ColorSchemes />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/items" element={<ItemListContainer />} />
          <Route path="/:category/:id" element={<Item />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
