import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function BasicCard({ props }) {
  let supIndex = props.supIndex;
  let index = props.index;
  let image = props.image;
  let item = props.item;
  let description = props.description;
  let price = props.price;

  return (
    <Link to={`/${props.supIndex}/${props.index}`}>
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
      </Card>
    </Link>
  );
}
