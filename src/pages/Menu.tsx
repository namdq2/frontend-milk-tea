import React, { useState } from 'react';
import { OrderModal } from '../components/OrderModal';
import { Product } from '../types/product';

const categories = [
  { id: 'milk-tea', name: 'Milk Tea' },
  { id: 'fruit-tea', name: 'Fruit Tea' },
  { id: 'special', name: 'Special Drinks' },
  { id: 'coffee', name: 'Coffee' },
];

const menuItems: Product[] = [
  {
    id: 1,
    name: 'Classic Pearl Milk Tea',
    price: 5.99,
    description: 'Our signature milk tea with chewy tapioca pearls',
    image: 'https://images.unsplash.com/photo-1558857563-c0c3726b2212?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'milk-tea',
    options: {
      size: ['Small', 'Medium', 'Large'],
      sugar: ['0%', '25%', '50%', '75%', '100%'],
      ice: ['No Ice', 'Less Ice', 'Regular Ice', 'Extra Ice'],
      toppings: ['Tapioca Pearls', 'Grass Jelly', 'Aloe Vera', 'Pudding']
    }
  },
  {
    id: 2,
    name: 'Mango Green Tea',
    price: 6.49,
    description: 'Fresh mango puree with premium green tea',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'fruit-tea',
    options: {
      size: ['Small', 'Medium', 'Large'],
      sugar: ['0%', '25%', '50%', '75%', '100%'],
      ice: ['No Ice', 'Less Ice', 'Regular Ice', 'Extra Ice'],
      toppings: ['Coconut Jelly', 'Aloe Vera', 'Popping Boba']
    }
  },
  {
    id: 3,
    name: 'Brown Sugar Boba Latte',
    price: 7.99,
    description: 'Fresh milk with brown sugar syrup and warm boba pearls',
    image: 'https://images.unsplash.com/photo-1627476455253-2c302189ea0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'special',
    options: {
      size: ['Small', 'Medium', 'Large'],
      ice: ['No Ice', 'Less Ice', 'Regular Ice', 'Extra Ice'],
      toppings: ['Extra Boba', 'Cream Top']
    }
  },
  {
    id: 4,
    name: 'Vietnamese Coffee',
    price: 5.49,
    description: 'Traditional Vietnamese coffee with condensed milk',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'coffee',
    options: {
      size: ['Small', 'Medium', 'Large'],
      ice: ['No Ice', 'Regular Ice'],
      toppings: ['Extra Shot', 'Cream Top']
    }
  }
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('milk-tea');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Menu</h1>
        
        {/* Categories */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full font-medium ${
                selectedCategory === category.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-medium text-amber-600">${item.price}</span>
                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition"
                  >
                    Order Now
                  </button>
                </div>
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
    </div>
  );
};

export default Menu;