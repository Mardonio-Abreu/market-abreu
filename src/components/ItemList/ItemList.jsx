import { useState, useEffect, useParam } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import BasicCard from "../Card/Card";
import { Container, Row, Col } from "react-bootstrap";

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
    <>
      {items.map((item) => {
        return <BasicCard item={item} />;
      })}
    </>
  );
}

export default ItemList;
