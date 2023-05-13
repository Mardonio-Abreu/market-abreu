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
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Items
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          {categories.map((category) => {
            return (
              <Link to={`/items/${category.category}`}>
                <Dropdown.Item>{category.tag}</Dropdown.Item>
              </Link>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default ButtonDark;
