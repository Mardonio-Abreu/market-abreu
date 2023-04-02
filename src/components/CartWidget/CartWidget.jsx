import cartLogo from "../../logo/cartLogo.png";
const CartWidget = ({ quantity }) => {
  return (
    <>
      <button className="btn btn-dark">
        <p>
          <img src={cartLogo} />
          {quantity}
        </p>
      </button>
    </>
  );
};

export default CartWidget;
