import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
function ButtonDark() {
  const categories = [
    {
      category: "Hat",
      key: "Hats",
    },
    {
      category: "Hoodie",
      key: "Hoodies",
    },
    {
      category: "T-shirt",
      key: "T-shirts",
    },
    {
      category: "Tote",
      key: "Totes",
    },
  ];

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="secondary">Items</Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          {categories.map((category) => {
            return (
              <Dropdown.Item key={category.key}>
                <Link to={`/items/${category.category}`}>{category.key}</Link>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default ButtonDark;
