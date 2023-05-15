import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
function ButtonDark() {
  const categories = [
    {
      category: "Hat",
      tag: "Hats",
    },
    {
      category: "Hoodie",
      tag: "Hoodies",
    },
    {
      category: "T-shirt",
      tag: "T-shirts",
    },
    {
      category: "Tote",
      tag: "Totes",
    },
  ];

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="secondary">Items</Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          {categories.map((category) => {
            return (
              <Dropdown.Item>
                <Link to={`/items/${category.category}`}>{category.tag}</Link>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default ButtonDark;
