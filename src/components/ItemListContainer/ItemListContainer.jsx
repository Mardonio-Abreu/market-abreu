import items from "../../products/data";
import BasicCard from "../Card/Card";

function ItemListContainer() {
  let ItemList = [];

  console.log(items[1][0]);

  for (let i = 0; i < items.length; i++) {
    ItemList[i] = items[i].map((element) => <BasicCard props={element} />);
  }

  return ItemList;
}

export default ItemListContainer;
