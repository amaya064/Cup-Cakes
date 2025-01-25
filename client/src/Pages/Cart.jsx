import React from "react";
import { useCart } from "../CartContext"; // Import useCart

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <p>Total Quantity: {cart.totalQuantity}</p>
      <p>Total Price: ${cart.totalPrice.toFixed(2)}</p>
    </div>
  );
}
