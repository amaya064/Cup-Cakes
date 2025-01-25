import React from "react";
import { useLocation } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const { state } = location;

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Shopping Cart and Billing Information */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Payment Information</h1>
          {/* Cart Items */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Cart Items</h2>
            {state.cartItems.length === 0 ? (
              <p className="text-gray-600">No items in cart.</p>
            ) : (
              <ul>
                {state.cartItems.map((item, index) => (
                  <li key={index} className="flex justify-between py-2">
                    <div>
                      <span className="text-gray-700">{item.name}</span>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <span className="text-gray-800">${item.totalPrice.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Billing Information */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Billing Information</h2>
            <p>Name: {state.firstName} {state.lastName}</p>
            <p>Address: {state.address}</p>
            <p>Phone: {state.phone}</p>
            <p>Email: {state.email}</p>
          </div>
          {/* Total */}
          <div className="mt-4 border-t pt-3">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Total Price:</span>
              <span className="font-semibold text-blue-600">${state.totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Card Details */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Card Details</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-1">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                maxLength="16"
                pattern="\d{16}"
                title="Card number should be exactly 16 digits."
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  maxLength="5"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-700 font-medium mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  maxLength="3"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
            >
              Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
