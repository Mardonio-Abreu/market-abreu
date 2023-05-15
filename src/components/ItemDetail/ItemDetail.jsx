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
import ProductCard from "../Product/Product";

export function ItemDetail() {
  let { id } = useParams();
  const [items, setItems] = useState([]);
  const q = query(collection(db, "items"), where(documentId(), "==", id));

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
  }, [id]);

  return (
    <>
      {items.map((item) => {
        return <ProductCard />;
      })}
      ;
    </>
  );
}

export default ItemDetail;
