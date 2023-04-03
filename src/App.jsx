import React from "react";
import "./css/style.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ColorSchemes from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <ColorSchemes />
      <ItemListContainer />
    </>
  );
}

export default App;
