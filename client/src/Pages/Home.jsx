import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="text-center py-4 bg-blue-600 text-white text-2xl font-bold">
        Welcome to MUFFINE STORE
      </header>

      {/* Video Ad */}
      <div className="w-full p-4">
        <video
          className="w-full max-h-[400px] rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          controls
        >
          <source src="src/videos/your-ad-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Info Section */}
      <div className="w-full mt-10 p-6 flex flex-col md:flex-row justify-between items-center bg-white shadow-md rounded-lg">
        {/* Left Section */}
        <div className="flex flex-col items-start text-left pl-36">
          <p className="text-lg font-semibold text-gray-800">🔒 Secure Payment</p>
          <p className="text-sm text-gray-600">100% Secure Payment</p>
        </div>

        {/* Middle Section */}
        <div className="text-center my-4 md:my-0">
          <p className="text-lg font-semibold text-gray-800">💵 Return Money</p>
          <p className="text-sm text-gray-600">Return with Conditions</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end text-right pr-56">
          <p className="text-lg font-semibold text-gray-800">🚚 Flat Delivery Rates</p>
          <p className="text-sm text-gray-600">Affordable & Reliable</p>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="mt-30 p-6">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Our Services
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Delivery Box */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/3">
            <img
              src="src/images/delivery.jpg"
              alt="Delivery"
              className="w-full h-40 rounded-lg object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Delivery</h3>
            <p className="text-gray-600 text-sm mt-2">
              Get your favorite muffins delivered right to your doorstep.
            </p>
          </div>

          {/* Dine-In Box */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/3">
            <img
              src="src/images/dinein.jpg"
              alt="Dine-In"
              className="w-full h-40 rounded-lg object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Dine-In</h3>
            <p className="text-gray-600 text-sm mt-2">
              Enjoy a cozy dine-in experience with your loved ones.
            </p>
          </div>

          {/* Takeaway Box */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/3">
            <img
              src="src/images/takeaway.jpg"
              alt="Takeaway"
              className="w-full h-40 rounded-lg object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Takeaway</h3>
            <p className="text-gray-600 text-sm mt-2">
              Pick up your muffins on the go with our convenient takeaway option.
            </p>
          </div>
        </div>
      </div>

      {/* Muffine Description Section */}
      <div className="mt-40 p-6 flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg">
        {/* Photo on the Left */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src="src/images/photo3.jpg"
            alt="Muffine"
            className="w-full h-60 rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Text on the Right */}
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
        {/* Text on the Left */}
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Juice</h3>
          <p className="text-gray-600 text-lg">
            Refresh yourself with our freshly prepared juices. Made with the finest
            ingredients, our juices are perfect for quenching your thirst and keeping
            you energized throughout the day. Choose from a variety of flavors!
          </p>
        </div>

        {/* Photo on the Right */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src="src/images/photo10.jpg"
            alt="Juice"
            className="w-full h-60 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="mt-40 p-6">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Customer Reviews
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Review 1 */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/3">
            <img
              src="src/images/review1.jpg"
              alt="Customer Review 1"
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600 text-sm mt-2">
              "The muffins are simply amazing! So fresh and flavorful. Highly recommend!"
            </p>
          </div>

          {/* Review 2 */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/3">
            <img
              src="src/images/review2.jpg"
              alt="Customer Review 2"
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600 text-sm mt-2">
              "Loved the dine-in experience. Cozy atmosphere and great service!"
            </p>
          </div>

          {/* Review 3 */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/3">
            <img
              src="src/images/review3.jpg"
              alt="Customer Review 3"
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Sam Wilson</h3>
            <p className="text-gray-600 text-sm mt-2">
              "The juices are so refreshing! Perfect for a hot day. Will order again!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
