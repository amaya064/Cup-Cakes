import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-lightgray p-6">
      {/* Store Description Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-md rounded-lg p-6 mb-8">
        {/* Description on the Left */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Muffin Store</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to Muffin Heaven, your one-stop destination for the most delicious and freshly baked muffins in town. 
            Our store offers a wide variety of flavors, from classic blueberry to innovative creations like chocolate 
            lava and savory cheddar jalapeño. We pride ourselves on using high-quality, locally-sourced ingredients 
            to ensure every bite is a taste of perfection.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you're grabbing a quick snack, hosting an event, or simply treating yourself, Muffin Heaven is here 
            to make your day sweeter. Stop by to experience the joy of freshly baked goodness!
          </p>
        </div>
        {/* Photo on the Right */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src="url('src/images/photo3.jpg')"
            alt="Muffins Display"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Chef Information Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet Our Chef</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Chef Photo */}
          <div className="w-full md:w-1/3 p-4">
            <img
              src="url('src/images/photo2.png')"
              alt="Chef Portrait"
              className="rounded-full shadow-lg w-48 h-48 mx-auto md:mx-0 object-cover"
            />
          </div>
          {/* Chef Details */}
          <div className="w-full md:w-2/3 p-4">
            <p className="text-gray-700 leading-relaxed mb-4">
              Our muffins are brought to life by the incredible Chef Alexandra Baker. With over 15 years of experience 
              in the culinary world, Chef Alexandra combines traditional baking techniques with modern flavor innovations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Chef Alexandra's passion for baking started in her grandmother's kitchen and has since evolved into a 
              lifelong dedication to creating baked goods that bring people joy. Her attention to detail, creativity, 
              and love for experimenting with unique ingredients are what make Muffin Heaven's muffins stand out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
