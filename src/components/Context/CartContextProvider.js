// TODO: CartContext
// TODO: Estado donde vamos a almacenar nuestro items
// TODO: Debemos crear una función que me permita agragegar un item
// TODO: Una función que me permita remover un item
// TODO: Una función que me permita limpiar el carrito
import { useContext, useState } from "react";
import { createContext } from "react";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (id, quantity) => {
    setItems([...items, { id, quantity }]);
  };

  const removeItem = (id, quantity) => {
    let index = items.indexOf({ id, quantity });
    setItems(items.splice(index, 1));
  };

  return (
    <cartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);

export default CartProvider;
