import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img
        className="cart"
        src="../public/icons/carticon.svg"
        alt="cart-icon"
      />
      <div>
        <p className="qty-cart">0</p>
      </div>
    </div>
  );
};

export default CartWidget;
