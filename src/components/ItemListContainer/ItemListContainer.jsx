import React, { useEffect, useState } from "react";
import { getFirestore, getDocs, collection, doc } from "firebase/firestore";
import BasicCard from "../Card/Card";

function ItemListContainer() {
  const [items, setProducts] = useState(null);
  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection).then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return console.log({ items });

  // let ItemList = [];

  /* for (let i = 0; i < items.length; i++) {
    ItemList[i] = items[i].map((element) => <BasicCard props={element} />);
  } */

  //return ItemList;
}

export default ItemListContainer;
