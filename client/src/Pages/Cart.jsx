import React from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const address = form.address.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();

    // Name validation - only letters and spaces
    if (!/^[a-zA-Z\s]+$/.test(firstName)) {
      alert("First name should only contain letters and spaces.");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(lastName)) {
      alert("Last name should only contain letters and spaces.");
      return;
    }

    // Phone validation - only numbers and should be 10 digits
    if (!/^\d{10}$/.test(phone)) {
      alert("Phone number should only contain 10 digits.");
      return;
    }

    // Email validation - only valid email pattern
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Store email in localStorage for easy access in Payment page
    localStorage.setItem("email", email);

    // If all validation passes, navigate to Payment page
    navigate("/payment", {
      state: {
        cartItems: cart.items,
        totalQuantity: cart.totalQuantity,
        totalPrice: cart.totalPrice,
        firstName,
        lastName,
        address,
        phone,
        email,
      },
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Shopping Cart Box */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Shopping Cart</h1>
          {cart.items.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-600 text-lg font-semibold">Your cart is empty!</p>
            </div>
          ) : (
            <div>
              <ul className="divide-y divide-gray-200">
                {cart.items.map((item, index) => (
                  <li key={index} className="flex justify-between items-center py-3">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-800 font-semibold">
                        ${item.totalPrice.toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="text-red-600 font-semibold hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t pt-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-base font-semibold text-gray-700">Total Quantity:</span>
                  <span className="text-base font-semibold text-gray-800">{cart.totalQuantity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base font-semibold text-gray-700">Total Price:</span>
                  <span className="text-base font-semibold text-blue-600">
                    ${cart.totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Billing Information Box */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Billing Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                pattern="^[a-zA-Z\s]+$"
                title="First name should only contain letters and spaces"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                pattern="^[a-zA-Z\s]+$"
                title="Last name should only contain letters and spaces"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 font-medium mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                pattern="^\d{10}$"
                title="Phone number should be exactly 10 digits."
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              {/* Read-only email input */}
              <input
                type="email"
                id="email"
                name="email"
                value={localStorage.getItem("email")}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                readOnly
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
