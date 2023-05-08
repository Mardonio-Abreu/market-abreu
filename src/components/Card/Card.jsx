import Card from "react-bootstrap/Card";

export default function BasicCard({ item }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.item}</Card.Title>
        <Card.Text>
          {item.description}
          <br />
          {item.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
