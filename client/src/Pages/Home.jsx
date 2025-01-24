import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
<header className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white">
  <div className="container mx-auto flex flex-col items-center py-6 px-4">
    {/* Store Title */}
    <h1 className="text-4xl font-extrabold tracking-wide">
      Welcome to <span className="text-yellow-300">MUFFINE STORE</span>
    </h1>
    <p className="mt-2 text-lg font-medium">
      Your one-stop shop for delightful muffins and refreshing treats!
    </p>

    {/* Decorative Line */}
    <div className="mt-4 w-16 h-1 bg-yellow-300 rounded"></div>
  </div>
</header>


      {/* Image Ad */}
      <div className="w-full p-4">
        <img
          src="src/images/photo18.jpg"
          alt="Ad Banner"
          className="w-full max-h-[600px] rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="w-full mt-0 p-6 flex flex-col md:flex-row justify-between items-center bg-white shadow-md rounded-lg">
        <div className="flex flex-col items-start text-left pl-36">
          <p className="text-lg font-semibold text-gray-800">🔒 Secure Payment</p>
          <p className="text-sm text-gray-600">100% Secure Payment</p>
        </div>
        <div className="text-center my-4 md:my-0">
          <p className="text-lg font-semibold text-gray-800">💵 Return Money</p>
          <p className="text-sm text-gray-600">Return with Conditions</p>
        </div>
        <div className="flex flex-col items-end text-right pr-56">
          <p className="text-lg font-semibold text-gray-800">🚚 Flat Delivery Rates</p>
          <p className="text-sm text-gray-600">Affordable & Reliable</p>
        </div>
      </div>


      {/* Muffine Description Section */}
<div className="mt-20 p-6 flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg">
  <div className="w-full md:w-1/2 p-4">
    <img
      src="src/images/photo3.jpg"
      alt="Muffine"
      className="w-full h-60 rounded-lg object-cover shadow-lg transform transition duration-500 hover:scale-110 hover:rotate-3"
    />
  </div>
  <div className="w-full md:w-1/2 p-4 text-center md:text-left">
    <h3 className="text-2xl font-bold text-gray-800 mb-4">Muffine</h3>
    <p className="text-gray-600 text-lg">
      Muffine is not just a dessert; it’s an experience. Whether it’s a special
      occasion or a simple indulgence, our muffins are crafted to bring joy and
      satisfaction with every bite. Try our wide range of flavors today!
    </p>
  </div>
</div>

{/* Juice Description Section */}
<div className="mt-10 p-6 flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg">
  <div className="w-full md:w-1/2 p-4 text-center md:text-left">
    <h3 className="text-2xl font-bold text-gray-800 mb-4">Juice</h3>
    <p className="text-gray-600 text-lg">
      Refresh yourself with our freshly prepared juices. Made with the finest
      ingredients, our juices are perfect for quenching your thirst and keeping
      you energized throughout the day. Choose from a variety of flavors!
    </p>
  </div>
  <div className="w-full md:w-1/2 p-4">
    <img
      src="src/images/photo10.jpg"
      alt="Juice"
      className="w-full h-60 rounded-lg object-cover shadow-lg transform transition duration-500 hover:scale-110 hover:rotate-3"
    />
  </div>
</div>


      {/* Our Services Section */}
      <div className="mt-40 p-6">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Our Services
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Delivery Box */}
          <div className="relative group flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 overflow-hidden">
            <img
              src="src/images/photo15.jpg"
              alt="Delivery"
              className="w-full h-80 rounded-lg object-cover mb-4 transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold text-white">Delivery</h3>
              <p className="text-white text-sm mt-2 px-4">
                Get your favorite muffins delivered right to your doorstep.Our delivery service ensures that your favorite muffins are brought straight to your doorstep, 
                fresh and delicious every time. Whether you're at home, in the office, or at a special event, we make it easy for you to enjoy our delightful treats without stepping out. 
                With quick and reliable delivery, we guarantee satisfaction in every bite. Place your order now and experience convenience at its finest!
              </p>
            </div>
          </div>

          {/* Dine-In Box */}
          <div className="relative group flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 overflow-hidden">
            <img
              src="src/images/photo16.jpg"
              alt="Dine-In"
              className="w-full h-80 rounded-lg object-cover mb-4 transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold text-white">Dine-In</h3>
              <p className="text-white text-sm mt-2 px-4">
                Enjoy a cozy dine-in experience with your loved ones.Step into our cozy and inviting ambiance for a delightful dine-in experience.
                Whether you’re catching up with friends, celebrating a special moment, or simply enjoying some "me-time," our dine-in service is designed to make you feel right at home.
                Savor our freshly baked muffins and refreshing beverages in a relaxing setting, paired with exceptional service that makes every visit memorable. 
                Come and enjoy the perfect combination of flavor and comfort!
              </p>
            </div>
          </div>

          {/* Takeaway Box */}
          <div className="relative group flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 overflow-hidden">
            <img
              src="src/images/photo17.jpg"
              alt="Takeaway"
              className="w-full h-80 rounded-lg object-cover mb-4 transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold text-white">Takeaway</h3>
              <p className="text-white text-sm mt-2 px-4">
                Pick up your muffins on the go with our convenient takeaway option.On the go? No problem! Our convenient takeaway service lets you grab your favorite muffins and beverages quickly and effortlessly. 
                Perfect for busy mornings, lunch breaks, or a sweet treat on your commute, our takeaway option ensures you never have to compromise on quality or taste. 
                Freshly prepared and neatly packed, our muffins are ready to bring a smile to your day, wherever you are. 
                Stop by and pick up your treats today!
              </p>
            </div>
          </div>
        </div>
      </div>

      

      
{/* Customer Reviews Section */}
<div className="mt-20 p-6">
  <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
    Customer Reviews
  </h2>
  <div className="flex flex-col md:flex-row justify-center gap-6">
    {/* Review 1 */}
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/3">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">John Doe</h3>
      <p className="text-gray-600 text-sm mb-4 text-center">
        "The muffins are simply amazing! So fresh and flavorful. Highly recommend!"
      </p>
      <p className="text-gray-500 text-xs text-center">
        John is a regular customer who always orders our signature blueberry muffins.
      </p>
    </div>

    {/* Review 2 */}
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/3">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Jane Smith</h3>
      <p className="text-gray-600 text-sm mb-4 text-center">
        "Loved the dine-in experience. Cozy atmosphere and great service!"
      </p>
      <p className="text-gray-500 text-xs text-center">
        Jane frequently visits our store for weekend brunch with friends.
      </p>
    </div>

    {/* Review 3 */}
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/3">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Sam Wilson</h3>
      <p className="text-gray-600 text-sm mb-4 text-center">
        "The juices are so refreshing! Perfect for a hot day. Will order again!"
      </p>
      <p className="text-gray-500 text-xs text-center">
        Sam enjoys our freshly squeezed orange juice and visits us during lunch breaks.
      </p>
    </div>
  </div>
 </div>

    </div>
  );
}
