import React, { useState } from 'react';
import { OrderModal } from './OrderModal';
import { Product } from '../types/product';

const products: Product[] = [
  {
    id: 1,
    name: 'Classic Pearl Milk Tea',
    price: 5.99,
    description: 'Our signature milk tea with chewy tapioca pearls',
    image: 'https://images.unsplash.com/photo-1558857563-c0c3726b2212?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    options: {
      size: ['Small', 'Medium', 'Large'],
      sugar: ['0%', '25%', '50%', '75%', '100%'],
      ice: ['No Ice', 'Less Ice', 'Regular Ice', 'Extra Ice'],
      toppings: ['Tapioca Pearls', 'Grass Jelly', 'Aloe Vera', 'Pudding']
    }
  },
  {
    id: 2,
    name: 'Taro Milk Tea',
    price: 6.49,
    description: 'Creamy taro root milk tea with a subtle nutty flavor',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    options: {
      size: ['Small', 'Medium', 'Large'],
      sugar: ['0%', '25%', '50%', '75%', '100%'],
      ice: ['No Ice', 'Less Ice', 'Regular Ice', 'Extra Ice'],
      toppings: ['Tapioca Pearls', 'Grass Jelly', 'Aloe Vera', 'Pudding']
    }
  },
  {
    id: 3,
    name: 'Brown Sugar Boba',
    price: 6.99,
    description: 'Fresh milk with brown sugar syrup and warm boba pearls',
    image: 'https://images.unsplash.com/photo-1627476455253-2c302189ea0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    options: {
      size: ['Small', 'Medium', 'Large'],
      sugar: ['0%', '25%', '50%', '75%', '100%'],
      ice: ['No Ice', 'Less Ice', 'Regular Ice', 'Extra Ice'],
      toppings: ['Tapioca Pearls', 'Grass Jelly', 'Aloe Vera', 'Pudding']
    }
  }
];

const BestSellers = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Best Sellers</h2>
          <p className="mt-4 text-xl text-gray-600">Our most loved creations</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover object-center w-full h-[300px] group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-amber-600">${product.price}</p>
                </div>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <OrderModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default BestSellers;