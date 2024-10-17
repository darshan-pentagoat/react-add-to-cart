import React, { useState } from "react";
import { products } from "./data";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import Cart from "./Cart";

const Product = () => {
  const { cart, addCart } = useCart();
  console.log("products");
  const { appStyle } = useTheme();

  return (
    <div className="container-fluid">
      <h2 className="text-center text-success text-uppercase">Products</h2>

      <div className="row">
        {products.map((product, i) => {
          return (
            <div className="col-md-3 col-sm-12" id={product.id} key={i}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={product.img}
                  className="card-img-top"
                  alt="..."
                  style={{ aspectRatio: "1/1" }}
                />
                <div className="card-body">
                  <h4 className="card-title">{product.name}</h4>
                  <h5 className="card-text">₹ {product.price}</h5>
                  <button
                    className="btn btn-primary"
                    onClick={() => addCart(product)}
                    disabled={cart.some(
                      (cartItem) => cartItem.id === product.id
                    )}
                  >
                    {cart.some((cartItem) => cartItem.id === product.id)
                      ? "Added"
                      : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
