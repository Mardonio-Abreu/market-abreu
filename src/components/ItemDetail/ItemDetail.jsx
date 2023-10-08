import Purchase from "../Purchase/Purchase";
import Form from "react-bootstrap/Form";
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
        <div className="container">
          <div className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.item}</Card.Title>
                <Card.Text>
                  {item.description}
                  <br />
                  Price ${item.price}
                </Card.Text>
                <Purchase />
                <Form.Select aria-label="Default select example">
                  <option>Quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Card.Body>
            </Card>
          </div>
        </div>
      ) : (
        <p>The item doesn't exist...</p>
      )}
    </div>
  );
}

export default ItemDetail;
