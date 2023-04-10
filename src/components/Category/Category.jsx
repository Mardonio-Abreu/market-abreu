import { useParams } from "react-router-dom";
import items from "../../products/data";

const Item = () => {
  let { category, id } = useParams();

  let item = items[category][id];

  let path = "../../";

  let newPath = path.concat(`${item.image}`);

  return (
    <>
      <img src={newPath} alt="item" />
      <p>{item.description}</p>
      <p>{item.price}</p>
    </>
  );
};

export default Item;
