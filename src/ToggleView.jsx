import React, { useState } from "react";
import Product from "./Product";
import { useCart } from "./CartContext";
import Cart from "./Cart";
import Checkout from "./Checkout";
import { useTheme } from "./ThemeContext";

const ToggleView = () => {
  const [view, setView] = useState("products");
  const { cart } = useCart();
  const { theme, appStyle, mode } = useTheme();

  return (
    <div style={appStyle}>
      <button onClick={() => setView("products")} className="btn btn-primary">
        Products
      </button>{" "}
      <button
        onClick={() => setView("cart")}
        className="position-relative btn btn-primary"
      >
        Cart
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cart.length}
        </span>
      </button>{" "}
      <button
        onClick={mode}
        className={
          theme ? "btn btn-secondary float-end" : "btn btn-light float-end"
        }
      >
        {theme ? "Dark Mode" : "Light Mode"}
      </button>
      <button onClick={() => setView("checkout")} className="btn btn-primary">
        Checkout
      </button>
      {view === "products" && <Product />}
      {view === "cart" && <Cart />}
      {view === "checkout" && <Checkout />}
    </div>
  );
};

export default ToggleView;
