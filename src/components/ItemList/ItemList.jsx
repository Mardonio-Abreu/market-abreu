import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import BasicCard from "../Card/Card";

export function ItemList() {
  const [items, setItems] = useState([]);
  const q = query(collection(db, "items"));

  useEffect(() => {
    const getItems = async () => {
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    };

    getItems();
  }, []);

  return (
    <div>
      <h1>Surprise MotherFather!</h1>
      {items.map((item) => {
        return <BasicCard item={item} />;
      })}
    </div>
  );
}

export default ItemList;
