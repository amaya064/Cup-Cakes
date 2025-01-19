import React from "react";
import { Link } from "react-router-dom";

// Example cupcake data
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
    image: "src/images/photo8.jpg",
    id: 4,
  },
  {
    name: "Coffee Cupcake",
    description:
      "Infused with real coffee, this cupcake is perfect for coffee enthusiasts, topped with a coffee buttercream.",
    price: "$5.50 (includes a small snack)",
    image: "src/images/photo7.jpg",
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

export default function CupCakes() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Our Cupcakes</h1>
      <div className="flex flex-col gap-8">
        {cupcakes.map((cupcake, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start transition-transform transform hover:scale-105 max-w-4xl mx-auto"
          >
            {/* Link to the detailed page of the cupcake */}
            <Link to={`/cupcakeDetail/${cupcake.id}`} className="w-full flex md:flex-row">

              {/* Cupcake Image (on the left for larger screens) */}
              <img
                src={cupcake.image}
                alt={cupcake.name}
                className="w-full md:w-1/3 h-48 object-cover"
              />
              <div className="p-4 md:w-2/3">
                {/* Cupcake Name */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{cupcake.name}</h2>
                {/* Cupcake Description */}
                <p className="text-gray-600 mb-4">{cupcake.description}</p>
                {/* Price */}
                <p className="text-blue-600 font-semibold">{cupcake.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
