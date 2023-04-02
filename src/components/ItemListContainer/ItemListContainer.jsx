import { items } from "../../products/data";

function ItemListContainer({ items }) {
  const listItems = items.map((element) => {
    return <p>{element.price}</p>;
  });
}

export default ItemListContainer;
