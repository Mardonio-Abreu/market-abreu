import cartLogo from "../../logo/iconmonstr-shopping-cart.svg";
const CartWidget = ({ quantity }) => {
  return (
    <>
      <button className="btn">
        <p>
          <img src={cartLogo} />
          {quantity}
        </p>
      </button>
    </>
  );
};

export default CartWidget;
