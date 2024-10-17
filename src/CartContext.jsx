import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    setCart((cur) => [...cur, { ...product, quantity: 1 }]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const removeProduct = (productId) => {
    setCart((cur) => cur.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addCart, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
