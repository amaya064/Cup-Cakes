import React from "react";
import { useParams } from "react-router-dom";

// Example drink data
const drinks = [
  {
    name: "lime Juice",
    description:
      "Freshly squeezed orange juice, packed with Vitamin C for a refreshing boost.with snack",
    price: "$3.99 (includes a small snack)",
    image: "src/images/photo11.jpg", // Replace with your image path
    id: 1,
  },
  {
    name: "watermelon Drink",
    description:
      "Pure watermelon juice made from freshly harvested watermelon, no added sugar.with some snack",
    price: "$3.50 (includes a small snack)",
    image: "src/images/photo12.jpg", // Replace with your image path
    id: 2,
  },
  {
    name: "milk Coffee",
    description:
      "A creamy and tropical milk coffee blended with fresh coffee, fresh milk and fresh yogurt.",
    price: "$4.99 (includes a small snack)",
    image: "src/images/photo13.jpg", // Replace with your image path
    id: 3,
  },
  {
    name: "Chocolate Shake",
    description:
      "A delicious mix of chocalate, blueberries, and raspberries blended into a creamy .",
    price: "$5.25 (includes a small snack)",
    image: "src/images/photo14.jpg", // Replace with your image path
    id: 4,
  },
];

export default function JuiceDetail() {
    const { id } = useParams(); // Extract the ID from the URL
    const juice = juice.find((juice) => juice.id === parseInt(id));
  
    return (
      <div className="flex flex-col min-h-screen bg-gray-100 p-6">
        {juice ? (
          <div
            className="bg-white shadow-md rounded-lg overflow-hidden mx-auto flex"
            style={{ maxWidth: "800px", height: "400px" }}
          >
            {/* Juice Image (Left Section) */}
            <img
              src={juice.image}
              alt={juice.name}
              className="w-1/2 object-cover"
              style={{ height: "100%" }}
            />
            {/* Juice Details (Right Section) */}
            <div className="p-6 w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">{juice.name}</h2>
              <p className="text-gray-600 mb-4">{juice.description}</p>
              <p className="text-blue-600 font-semibold mb-4">{juice.price}</p>
              {/* Add to Cart Button Below the Description */}
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-700 text-lg font-semibold">
            Sorry, cupcake not found!
          </p>
        )}
      </div>
    );
  }
  