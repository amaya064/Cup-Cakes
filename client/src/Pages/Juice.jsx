import React from "react";

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
    name: "watermelon Juice",
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

export default function Juice() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Our Drinks</h1>
      <div className="flex flex-col gap-8">
        {drinks.map((drink, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start transition-transform transform hover:scale-105 max-w-4xl mx-auto"
          >
            <div className="w-full flex md:flex-row">
              {/* Drink Image (on the left for larger screens) */}
              <img
                src={drink.image}
                alt={drink.name}
                className="w-full md:w-1/3 h-48 object-cover"
              />
              <div className="p-4 md:w-2/3">
                {/* Drink Name */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{drink.name}</h2>
                {/* Drink Description */}
                <p className="text-gray-600 mb-4">{drink.description}</p>
                {/* Price */}
                <p className="text-blue-600 font-semibold">{drink.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
