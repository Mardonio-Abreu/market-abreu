import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import BasicCard from "../Card/Card";

export function Category() {
  let { category } = useParams();
  const [items, setItems] = useState([]);
  const q = query(collection(db, "items"), where("item", "==", category));

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
  }, [category]);

  return items.map((item) => {
    return <BasicCard item={item} />;
  });
}

export default Category;
