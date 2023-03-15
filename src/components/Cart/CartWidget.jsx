import { Link } from "react-router-dom";
import styled from "styled-components";

const CartWidget = () => {
  const Img = styled.img`
    margin-top: 8px;
  `;
  return (
    <div className="cart-widget">
      <Link to="/cart">
        <Img
          className="cart"
          src="/assets/carticon.svg"
          alt="cart-icon"
        />
      </Link>
    </div>
  );
};

export default CartWidget;
