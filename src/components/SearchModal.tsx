import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { Product } from '../types/product';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Classic Pearl Milk Tea',
    price: 5.99,
    description: 'Our signature milk tea with chewy tapioca pearls',
    image: 'https://images.unsplash.com/photo-1558857563-c0c3726b2212?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'milk-tea'
  },
  {
    id: 2,
    name: 'Mango Green Tea',
    price: 6.49,
    description: 'Fresh mango puree with premium green tea',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'fruit-tea'
  }
];

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (product: Product) => {
    navigate('/menu');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-x-0 top-0 bg-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search drinks..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
            <button
              onClick={onClose}
              className="ml-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-4 max-h-96 overflow-y-auto">
            {filteredProducts.length === 0 ? (
              <p className="text-center text-gray-500 py-4">No drinks found</p>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer"
                    onClick={() => handleProductClick(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.description}</p>
                      <p className="text-sm font-medium text-amber-600">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;