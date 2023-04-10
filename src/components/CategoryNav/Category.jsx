import { useParams } from "react-router-dom";
import items from "../../products/data";

export const Category = () => {
  let { category, id } = useParams();

  let item = items[category][id];

  let path = "../../";

  let newPath = path.concat(`${item.image}`);

  console.log(category);

  {
    <>
      <img src={newPath} alt="item" />
      <p>{item.description}</p>
      <p>{item.price}</p>
    </>;
  }
};

export default Category;
