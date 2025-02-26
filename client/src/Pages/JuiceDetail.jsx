import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext";

// Example drink data
const drinks = [
  {
    name: "lime Juice",
    description:
      "Freshly squeezed orange juice, packed with Vitamin C for a refreshing boost.with snack",
    price: 3.99,
    image: "/src/images/photo11.jpg", // Corrected image path
    id: 1,
  },
  {
    name: "watermelon Drink",
    description:
      "Pure watermelon juice made from freshly harvested watermelon, no added sugar.with some snack",
    price: 3.5,
    image: "/src/images/photo12.jpg", // Corrected image path
    id: 2,
  },
  {
    name: "milk Coffee",
    description:
      "A creamy and tropical milk coffee blended with fresh coffee, fresh milk and fresh yogurt.",
    price: 4.99,
    image: "/src/images/photo13.jpg", // Corrected image path
    id: 3,
  },
  {
    name: "Chocolate Shake",
    description:
      "A delicious mix of chocolate, blueberries, and raspberries blended into a creamy.",
    price: 5.25,
    image: "/src/images/photo14.jpg", // Corrected image path
    id: 4,
  },
];

export default function JuiceDetail() {
  const { id } = useParams(); // Extract the ID from the URL
  const juice = drinks.find((drink) => drink.id === parseInt(id));
  const [quantity, setQuantity] = useState(1); // State to track quantity
  const { addToCart } = useCart();

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Add to Cart handler
  const handleAddToCart = () => {
    if (juice) {
      addToCart(juice.name, quantity, juice.price * quantity); // Add item to cart
      alert(`${quantity} ${juice.name}(s) added to cart!`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-6">
      {juice ? (
        <div
          className="bg-white shadow-md rounded-lg overflow-hidden mx-auto flex"
          style={{ maxWidth: "800px", height: "400px" }}
        >
          <img
            src={juice.image}
            alt={juice.name}
            className="w-1/2 object-cover"
            style={{ height: "100%" }}
          />
          <div className="p-6 w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{juice.name}</h2>
            <p className="text-gray-600 mb-4">{juice.description}</p>
            <p className="text-blue-600 font-semibold mb-4">
              Price per unit: ${juice.price.toFixed(2)}
            </p>
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
            {/* Specify Quantity Section */}
            <div className="mt-4">
              <p className="text-gray-800 font-semibold mb-2">Specify Quantity</p>
              <div className="flex items-center justify-between">
                <button
                  onClick={handleDecrease}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  +
                </button>
              </div>
              {/* Dynamic Price Display */}
              <p className="mt-4 text-gray-800 font-semibold">
                Total Price: ${(juice.price * quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-700 text-lg font-semibold">
          Sorry, drink not found!
        </p>
      )}
    </div>
  );
}
