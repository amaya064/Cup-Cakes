import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access URL params

const cupcakes = [
  {
    name: "Strawberry Cupcake",
    description:
      "A delightful treat with a moist vanilla base, topped with fresh strawberry frosting and a slice of strawberry.",
    price: 4.99, // Price as a number for calculations
    image: "/src/images/photo4.jpg",
    id: 1,
  },
  {
    name: "Vanilla Cupcake",
    description:
      "Classic and timeless, our vanilla cupcake is light, fluffy, and topped with a creamy vanilla buttercream.",
    price: 4.5,
    image: "/src/images/photo5.jpg",
    id: 2,
  },
  {
    name: "Red Velvet Cupcake",
    description:
      "Rich and velvety, this cupcake is topped with a smooth cream cheese frosting for a perfect balance.",
    price: 5.25,
    image: "/src/images/photo6.jpg",
    id: 3,
  },
  {
    name: "Chocolate Cupcake",
    description:
      "A chocolate lover’s dream, featuring a moist chocolate base and decadent chocolate ganache frosting.",
    price: 5.0,
    image: "/src/images/photo8.jpg",
    id: 4,
  },
  {
    name: "Coffee Cupcake",
    description:
      "Infused with real coffee, this cupcake is perfect for coffee enthusiasts, topped with a coffee buttercream.",
    price: 5.5,
    image: "/src/images/photo7.jpg",
    id: 5,
  },
  {
    name: "Cookie Cupcake",
    description:
      "A delightful combination of vanilla and cookie crumbles, topped with a creamy cookie-flavored frosting.",
    price: 5.75,
    image: "/src/images/photo9.jpg",
    id: 6,
  },
];

export default function CupcakeDetail() {
  const { id } = useParams(); // Extract the ID from the URL
  const cupcake = cupcakes.find((cupcake) => cupcake.id === parseInt(id));
  const [quantity, setQuantity] = useState(1); // State for quantity

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-6">
      {cupcake ? (
        <div
          className="bg-white shadow-md rounded-lg overflow-hidden mx-auto flex"
          style={{ maxWidth: "800px", height: "400px" }}
        >
          {/* Cupcake Image (Left Section) */}
          <img
            src={cupcake.image}
            alt={cupcake.name}
            className="w-1/2 object-cover"
            style={{ height: "100%" }}
          />
          {/* Cupcake Details (Right Section) */}
          <div className="p-6 w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{cupcake.name}</h2>
            <p className="text-gray-600 mb-4">{cupcake.description}</p>
            <p className="text-blue-600 font-semibold mb-4">
              Price per unit: ${cupcake.price.toFixed(2)}
            </p>
            {/* Add to Cart Button */}
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
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
                Total Price: ${(cupcake.price * quantity).toFixed(2)}
              </p>
            </div>
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
