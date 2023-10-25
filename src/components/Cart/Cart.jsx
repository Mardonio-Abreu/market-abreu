//TODO: display the list and quantity of puchased products
import { useCart } from "../Context/CartContextProvider";

export function Cart({ purchasesArray }) {
  const { getCart, removeItem } = useCart();

  const itemsArray = getCart(1);

  console.log(itemsArray);

  return (
    <>
      <h1>Surprise MotherFather!</h1>
    </>
  );
}
