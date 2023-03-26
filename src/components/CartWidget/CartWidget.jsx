const CartWidget = ({ cantCart }) => {
  return (
    <>
      <button className="btn btn-dark">Cart</button>
      <p>{cantCart}</p>
    </>
  );
};

export default CartWidget;
