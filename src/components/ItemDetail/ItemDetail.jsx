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
import { useParams } from "react-router-dom";

let { id } = useParams(0);
export function ItemDetail() {
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
  }, []);

  return (
    <div>
      <h1>Surprise MotherFather!</h1>
      return <BasicCard item={items} />;
    </div>
  );
}

export default ItemDetail;
