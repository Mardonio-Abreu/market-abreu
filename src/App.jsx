import React from "react";
import "./css/style.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavigationBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/allItems" element={<ItemListContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
