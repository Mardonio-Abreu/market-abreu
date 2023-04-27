import React, { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import BasicCard from "../Card/Card";

function ItemListContainer() {
  const [items, setProducts] = useState(null);
  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection).then((snapshot) => {
      setProducts(
        snapshot.docs.map((producto) => ({
          id: producto.id,
          ...producto.data(),
        }))
      );
    });
    return;
  }, []);
}

export default ItemListContainer;
