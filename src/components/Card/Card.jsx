import Card from "react-bootstrap/Card";

function BasicCard({ product }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.item}</Card.Title>
        <Card.Text>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
