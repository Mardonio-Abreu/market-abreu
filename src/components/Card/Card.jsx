import Card from "react-bootstrap/Card";
import OutlinedButton from "../Button/Button";

export default function BasicCard({ props }) {
  let index = props.index;
  let image = props.image;
  let item = props.item;
  let description = props.description;
  let price = props.price;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{item}</Card.Title>
        <Card.Text>
          {description}
          <br />
          {price}
        </Card.Text>
      </Card.Body>
      <OutlinedButton number={props.index} />
    </Card>
  );
}
