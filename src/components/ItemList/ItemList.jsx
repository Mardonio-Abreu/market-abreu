import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

function ItemList() {
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
  });
}

export default ItemList;
