import { Link } from "react-router-dom";
import { Nav, Dropdown } from "react-bootstrap";
import categories from "../../products/categories";

export const CategoryNav = () =>
  categories.map((element) => {
    let category = element.category;
    let id = element.id;
    let path = "/category/";
    let newPath = path.concat(category);

    return (
      <Dropdown.Item key={id}>
        <Link>{category}</Link>
      </Dropdown.Item>
    );
  });

export default CategoryNav;
