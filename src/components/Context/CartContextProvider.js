// TODO: CartContext
// TODO: Estado donde vamos a almacenar nuestro items
// TODO: Debemos crear una función que me permita agragegar un item
// TODO: Una función que me permita remover un item
// TODO: Una función que me permita limpiar el carrito
import { useContext, useState } from "react";
import { createContext } from "react";
import { json } from "react-router-dom";

const cartContext = createContext();
const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (cartKey, id, quantity) => {
    setItems([...items, { id, quantity }]);
    const newArray = JSON.stringify(items);
    setItems(newArray);
    localStorage.setItem(cartKey, items);
  };

  const getCart = (cartKey) => {
    const cartItems = localStorage.getItem(cartKey);
    const newArray = JSON.parse(cartItems);
    return newArray;
  };

  const removeItem = (cartKey, id) => {
    let array = this.getCart(cartKey);
    let index = array.indexOf(id);
    let newArray = array.splice(index, 1);
    localStorage.setItem(cartKey, newArray);
  };

  return (
    <cartContext.Provider value={{ addItem, getCart, removeItem }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);

export default CartProvider;
