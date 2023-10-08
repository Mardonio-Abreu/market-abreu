import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const docRef = doc(db, "items", id);

  useEffect(() => {
    const getItems = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      setItem(docSnap.data());
    };

    getItems();
    console.log(item);
  }, []);

  return (
    <div>
      {item ? (
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.item}</Card.Title>
              <Card.Text>
                {item.description}
                <br />
                Price ${item.price}
              </Card.Text>
              <Form.Select aria-label="Default select example">
                <option>Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
              <Button variant="primary">Buy me!</Button>
            </Card.Body>
          </Card>
        </>
      ) : (
        <p>The item doesn't exist...</p>
      )}
    </div>
  );
}

export default ItemDetail;
