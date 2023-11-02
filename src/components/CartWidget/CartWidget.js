import cart from "./assets/cart.svg";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

function CartWidget() {
  const { cantItems } = useContext(CartContext);

  return (
    <NavLink to={`/cart`}>
      <div className="columns">
        <img src={cart} alt="cart-widget" className="image is-32x32" />
        <span className="tag is-info is-medium">{cantItems}</span>
      </div>
    </NavLink>
  );
}

export default CartWidget;
