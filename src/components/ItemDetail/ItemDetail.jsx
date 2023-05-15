import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
        return (
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Title>{item.item}</Card.Title>
            <Card.Text>
              {item.description}
              <br />
              {item.price}
            </Card.Text>
            <input type="number" placeholder="Quantity" />
            <Button variant="primary">Add to cart</Button>{" "}
            <Button variant="success">Pay</Button>
            <Link to={"/items"}>
              <Button variant="info">Keep buying</Button>
            </Link>
          </Card>
        );
      })}
      ;
    </>
  );
}

export default ItemDetail;
