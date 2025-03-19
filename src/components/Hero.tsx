import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Bubble Tea"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Discover the Art of
            <span className="text-amber-400"> Premium Bubble Tea</span>
          </h1>
          <p className="mt-6 text-xl text-gray-200">
            Indulge in our meticulously crafted bubble tea, where tradition meets innovation.
            Experience luxury in every sip.
          </p>
          <div className="mt-10 flex space-x-4">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-700 transition">
              Order Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;