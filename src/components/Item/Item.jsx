import { useParams } from "react-router-dom";
import items from "../../products/data";

const Item = () => {
  let { id } = useParams();

  let item = items[id];

  return (
    <>
      <img src={item.image} alt="item" />
      <p>{item.description}</p>
      <p>{item.price}</p>
    </>
  );
};

export default Item;
