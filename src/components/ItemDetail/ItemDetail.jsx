import { useContext, createContext } from "react";
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
  addDoc,
} from "firebase/firestore";

const cartArray = createContext();

export function ItemDetail() {
  let { id } = useParams();
  const [items, setItems] = useState([]);
  const q = query(collection(db, "items"), where(documentId(), "==", id));

  const defaultValues = {
    quantity: 0,
    name: null,
  };

  const [values, setValues] = useState(defaultValues);

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
    console.log("Document written with ID: ", docRef.id);
  };
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
          <Card style={{ width: "25rem" }} key={item.id}>
            <Card.Img variant="top" src={item.image} />
            <Card.Title>{item.item}</Card.Title>
            <Card.Text>
              {item.description}
              <br />
              {item.price}
            </Card.Text>
            <form>
              <label>Please enter the number of items</label>
              <input
                type="number"
                placeholder="Quantity"
                name="quantity"
                value={quantity}
                onSubmit={setValues(item.id, quantity)}
              />
              <input type="submit" />
            </form>
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
