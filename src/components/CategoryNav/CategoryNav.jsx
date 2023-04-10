import { Nav } from "react-bootstrap";
import categories from "../../products/categories";
import { Link } from "react-router-dom";

export const CategoryNav = () =>
  categories.map((element) => {
    let category = element.category;
    let id = element.id;
    let path = "/category/";
    let newPath = path.concat(category);

    return (
      <Nav.Link href={newPath} key={id}>
        {category}
      </Nav.Link>
    );
  });

export default CategoryNav;
