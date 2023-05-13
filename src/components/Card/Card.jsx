import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function BasicCard({ item }) {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Title>{item.item}</Card.Title>
      <Card.Text>
        {item.description}
        <br />
        {item.price}
      </Card.Text>
    </Card>
  );
}
