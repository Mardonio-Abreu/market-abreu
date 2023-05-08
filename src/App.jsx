import React from "react";
import "./css/style.css";
import ItemList from "./components/ItemList/ItemList";
import ColorSchemes from "./components/NavBar/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <ColorSchemes />
      <ItemList />
    </>
  );
};

export default App;
