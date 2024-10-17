import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Cart() {
  const { cart, setCart, removeProduct } = useCart();
  console.log(cart);

  const addOne = (prod) => {
    const newCartData = cart.map((currProd) =>
      currProd.id === prod.id
        ? { ...currProd, quantity: prod.quantity + 1 }
        : { ...currProd }
    );
    setCart(newCartData);
  };

  const subOne = (prod) => {
    const newQuantity = prod.quantity - 1;
    if (newQuantity < 1) {
      removeProduct(prod.id);
    } else {
      const newCartData = cart.map((currProd) =>
        currProd.id === prod.id
          ? { ...currProd, quantity: newQuantity }
          : { ...currProd }
      );
      setCart(newCartData);
    }
  };

  const calculateTotal = () => {
    return cart.reduce(
      (accumulator, prod) => accumulator + prod.quantity * prod.price,
      0
    );
  };

  return (
    <>
      <h2 className="text-center text-success my-3 mt-5 text-uppercase">
        Cart
      </h2>
      <div>
        {cart.length === 0 ? (
          <p className="text-center">Cart is empty!</p>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((prod, i) => (
                  <tr key={i}>
                    <td>{prod.id}</td>
                    <td>{prod.name}</td>
                    <td>
                      <img src={prod.img} alt="" style={{ width: "50px" }} />
                    </td>
                    <td>
                      <button onClick={() => subOne(prod)}> -</button>
                      {prod.quantity}
                      <button onClick={() => addOne(prod)}> +</button>
                    </td>
                    <td> ₹ {prod.price}</td>
                    <td>₹ {prod.quantity * prod.price}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => removeProduct(prod.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className="text-end">Grand Total: ₹ {calculateTotal()}</h3>
            <div className="d-flex justify-content-end">
              {/* <Link
                to="/checkout"
                state={{ cart }}
                className="btn btn-success ms-3"
              >
                Go to Checkout
              </Link> */}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
