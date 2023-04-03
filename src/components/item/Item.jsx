import items from "../../products/data";

export function Item({ number }) {
  const ItemList = items.map((element) => (
    <>
      <img src={element.image} alt="item" />
      <p>{element.description}</p>
      <p>{element.price}</p>
    </>
  ));

  return ItemList[{ number }];
}

export default Item;
