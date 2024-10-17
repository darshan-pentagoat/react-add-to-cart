import React from "react";
import { useCart } from "./CartContext";
// import { Link, useLocation } from "react-router-dom";
const Checkout = () => {
  console.log("checkout");

  // const location = useLocation();
  // const { cart } = location.state || { cart: [] };
  const { cart } = useCart();
  const total = () => {
    return cart.reduce(
      (accumulator, pro) => accumulator + pro.quantity * pro.price,
      0
    );
  };

  return (
    <>
      {/* <Link to={"/"} className="btn btn-primary">
        View Products
      </Link> */}
      <h2 className="text-success text-center text-uppercase my-3 mt-5">
        Checkout
      </h2>

      {cart.length === 0 ? (
        <p className="text-center">Go and shop now!</p>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>

            <div className="col-md-6 col-sm-12">
              <table className="table">
                <tbody>
                  {cart.map((pro, i) => (
                    <tr key={i}>
                      <td>{pro.name}</td>
                      <td>{pro.quantity} .qty</td>
                      <td>₹ {pro.quantity * pro.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h4 className="text-end">Total: ₹ {total()}</h4>
              <button
                className="btn btn-success col-12"
                disabled={cart.length === 0}
              >
                Make Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
