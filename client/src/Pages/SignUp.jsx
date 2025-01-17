import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/signup', { // Updated endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Submitted'); // Updated success message
        setFormData({ username: '', email: '', password: '' });
      } else {
        setMessage(data.message || 'An error occurred');
      }
    } catch (error) {
      setMessage('Error submitting the form.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="flex max-w-4xl w-full rounded-lg shadow-lg overflow-hidden">
        {/* Left Side: Photo */}
        <div
          className="w-1/2"
          style={{
            backgroundImage: "url('src/images/photo1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Right Side: Sign Up Form */}
        <div
          className="w-1/2 p-6"
          style={{
            backgroundColor: '#FFEBEE', // Light pink color
          }}
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
            >
              Sign Up
            </button>
          </form>

          {message && (
            <div className="mt-4 text-center">
              <p
                className={`text-lg ${
                  message === 'Submitted' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {message}
              </p>
            </div>
          )}
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <a href="/sign-in" className="text-indigo-500">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
