import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    totalQuantity: 0,
    totalPrice: 0,
    items: [], // Add an array to store item details
  });

  const addToCart = (name, quantity, price) => {
    setCart((prev) => {
      const existingItem = prev.items.find((item) => item.name === name);

      if (existingItem) {
        // Update the existing item's quantity and total price
        const updatedItems = prev.items.map((item) =>
          item.name === name
            ? {
                ...item,
                quantity: item.quantity + quantity,
                totalPrice: item.totalPrice + price * quantity,
              }
            : item
        );

        return {
          ...prev,
          items: updatedItems,
          totalQuantity: prev.totalQuantity + quantity,
          totalPrice: prev.totalPrice + price * quantity,
        };
      } else {
        // Add a new item to the cart
        return {
          ...prev,
          items: [
            ...prev.items,
            { name, quantity, totalPrice: price * quantity },
          ],
          totalQuantity: prev.totalQuantity + quantity,
          totalPrice: prev.totalPrice + price * quantity,
        };
      }
    });
  };

  // Add a function to remove an item from the cart
  const removeFromCart = (name) => {
    setCart((prev) => {
      // Filter out the item that matches the name
      const updatedItems = prev.items.filter((item) => item.name !== name);
      
      // Calculate new totalQuantity and totalPrice based on the updatedItems
      const newTotalQuantity = updatedItems.reduce((total, item) => total + item.quantity, 0);
      const newTotalPrice = updatedItems.reduce((total, item) => total + item.totalPrice, 0);

      return {
        ...prev,
        items: updatedItems,
        totalQuantity: newTotalQuantity,
        totalPrice: newTotalPrice,
      };
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
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
