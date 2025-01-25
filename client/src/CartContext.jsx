import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ totalQuantity: 0, totalPrice: 0 });

  const addToCart = (quantity, price) => {
    setCart((prev) => ({
      totalQuantity: prev.totalQuantity + quantity,
      totalPrice: prev.totalPrice + price,
    }));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
