import React from "react";
import { useNavigate } from "react-router-dom"; // Import useParams to access URL params

// Example cupcake data (with corrected image paths)
const cupcakes = [
  {
    name: "Strawberry Cupcake",
    description:
      "A delightful treat with a moist vanilla base, topped with fresh strawberry frosting and a slice of strawberry.",
    price: "$4.99 (includes a small snack)",
    image: "src/images/photo4.jpg",
    id: 1,
  },
  {
    name: "Vanilla Cupcake",
    description:
      "Classic and timeless, our vanilla cupcake is light, fluffy, and topped with a creamy vanilla buttercream.",
    price: "$4.50 (includes a small snack)",
    image: "src/images/photo5.jpg",
    id: 2,
  },
  {
    name: "Red Velvet Cupcake",
    description:
      "Rich and velvety, this cupcake is topped with a smooth cream cheese frosting for a perfect balance.",
    price: "$5.25 (includes a small snack)",
    image: "src/images/photo6.jpg",
    id: 3,
  },
  {
    name: "Chocolate Cupcake",
    description:
      "A chocolate lover’s dream, featuring a moist chocolate base and decadent chocolate ganache frosting.",
    price: "$5.00 (includes a small snack)",
    image: "src/images/photo7.jpg",
    id: 4,
  },
  {
    name: "Coffee Cupcake",
    description:
      "Infused with real coffee, this cupcake is perfect for coffee enthusiasts, topped with a coffee buttercream.",
    price: "$5.50 (includes a small snack)",
    image: "src/images/photo8.jpg",
    id: 5,
  },
  {
    name: "Cookie Cupcake",
    description:
      "A delightful combination of vanilla and cookie crumbles, topped with a creamy cookie-flavored frosting.",
    price: "$5.75 (includes a small snack)",
    image: "src/images/photo9.jpg",
    id: 6,
  },
];

export default function CupcakeDetail() {
  const { id } = useNavigate(); // Get the cupcake ID from the URL
  const cupcake = cupcakes.find((cupcake) => cupcake.id === parseInt(id));

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-6">
      {cupcake ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl mx-auto">
          {/* Cupcake Image */}
          <img
            src={cupcake.image}
            alt={cupcake.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            {/* Cupcake Name */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">{cupcake.name}</h2>
            {/* Cupcake Description */}
            <p className="text-gray-600 mb-4">{cupcake.description}</p>
            {/* Price */}
            <p className="text-blue-600 font-semibold">{cupcake.price}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-700 text-lg font-semibold">
          Sorry, cupcake not found!
        </p>
      )}
      {/* Add to Cart Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-md">
        {cupcake ? (
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        ) : (
          <button
            className="w-full bg-gray-400 text-white py-2 px-4 rounded-lg cursor-not-allowed"
            disabled
          >
            Item Not Available
          </button>
        )}
      </div>
    </div>
  );
}
