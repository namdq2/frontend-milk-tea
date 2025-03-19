import React from 'react';

const About = () => {
  return (
    <div className="pt-16">
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1545759843-c62537a08481?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Tea preparation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Our Story</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Crafting Premium Bubble Tea Since 2020</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                LuxBoba was born from a passion for creating the perfect bubble tea experience. Our journey
                began in Beverly Hills, where we set out to combine traditional tea-making techniques with
                innovative flavors and premium ingredients.
              </p>
              <p>
                Every drink is crafted with carefully selected tea leaves, fresh ingredients, and
                house-made toppings. Our pearls are made fresh daily, and we use organic milk and
                natural sweeteners to ensure the highest quality in every cup.
              </p>
              <p>
                We're committed to sustainability and supporting local communities. Our tea leaves are
                ethically sourced, and we use eco-friendly packaging materials.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Tea preparation"
              className="rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1523920290228-4f321a939b4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Bubble tea varieties"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍃</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">Only the finest ingredients and traditional brewing methods</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Constantly creating new and exciting flavor combinations</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">Committed to eco-friendly practices and ethical sourcing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;