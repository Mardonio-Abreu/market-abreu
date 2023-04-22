import { useEffect, useState } from "react";
import { doc, getFirestore, getDocs, collection } from "firebase/firestore";
import items from "../../products/data";
import BasicCard from "../Card/Card";

function ItemListContainer() {
  const [itemsCollection, setProducts] = useState();
  useEffect(() => {
    const db = getFirestore();

    const items = collection(db, "items");

    getDocs(itemsCollection).then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id: snapshot.item_id,
          item: snapshot.item,
          description: snapshot.description,
          image: snapshot.image,
          price: snapshot.price,
          data: snapshot.data(),
        }))
      );
    });
  }, []);

  // let ItemList = [];

  /* for (let i = 0; i < items.length; i++) {
    ItemList[i] = items[i].map((element) => <BasicCard props={element} />);
  } */

  //return ItemList;
}

export default ItemListContainer;
