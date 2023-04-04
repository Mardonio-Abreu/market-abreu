import items from "../../products/data";

const Item = () => {
  const ItemList = items.map((element) => (
    <>
      <img src={element.image} alt="item" />
      <p>{element.description}</p>
      <p>{element.price}</p>
    </>
  ));

  return ItemList;
};

export default Item;
