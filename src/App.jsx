import React from "react";
import "./css/style.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ColorSchemes from "./components/NavBar/NavBar";
import items from "./products/data";

function App() {
  return (
    <>
      <ColorSchemes />
      <ItemListContainer items={items} />
    </>
  );
}

export default App;
