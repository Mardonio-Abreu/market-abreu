import items from "../../products/data";
import BasicCard from "../Card/Card";

function ItemListContainer() {
  let ItemList = [];

  for (let i = 0; i < items.length; i++) {
    ItemList[i] = items[i].map((element) => <BasicCard props={element} />);
  }

  return ItemList;
}

export default ItemListContainer;
