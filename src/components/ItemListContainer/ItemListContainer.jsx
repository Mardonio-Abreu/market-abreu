import items from "../../products/data";
import BasicCard from "../Card/Card";

function ItemListContainer() {
  const ItemList = items.map((element) => <BasicCard props={element} />);

  return ItemList;
}

export default ItemListContainer;
