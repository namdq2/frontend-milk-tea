import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { OrderModal } from './OrderModal';
import { Product } from '../types/product';

const FeaturedProducts = () => {
  const [showOrderModal, setShowOrderModal] = useState(false);

  const featuredProduct: Product = {
    id: 4,
    name: 'Golden Dragon Pearl Milk Tea',
    price: 8.99,
    description: 'Our signature milk tea blend infused with premium black tea leaves, topped with golden pearls and a delicate cream crown.',
    image: 'https://images.unsplash.com/photo-1625576011411-2e7649551eaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    options: {
      size: ['Small', 'Medium', 'Large'],
      sugar: ['0%', '25%', '50%', '75%', '100%'],
      ice: ['No Ice', 'Less Ice', 'Regular Ice', 'Extra Ice'],
      toppings: ['Golden Pearls', 'Cream Crown', 'Grass Jelly', 'Red Bean']
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-900">Signature Collection</h2>
            <p className="mt-4 text-xl text-gray-600">
              Discover our carefully curated selection of premium bubble teas
            </p>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="bg-amber-50 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="rounded-xl w-full h-[400px] object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-gray-900">{featuredProduct.name}</h3>
                <p className="mt-4 text-lg text-gray-600">{featuredProduct.description}</p>
                <div className="mt-8">
                  <span className="text-2xl font-bold text-amber-600">${featuredProduct.price}</span>
                  <button
                    onClick={() => setShowOrderModal(true)}
                    className="ml-6 bg-amber-600 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-700 transition"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showOrderModal && (
        <OrderModal
          product={featuredProduct}
          onClose={() => setShowOrderModal(false)}
        />
      )}
    </section>
  );
};

export default FeaturedProducts;