import Card from "react-bootstrap/Card";
export default function ProductCard({ item }) {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Title>{item.item}</Card.Title>
      <Card.Text>
        {item.description}
        <br />
        {item.price}
        <h1>Surprise MotherFather!</h1>
      </Card.Text>
    </Card>
  );
}
