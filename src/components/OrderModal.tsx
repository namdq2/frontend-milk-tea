import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Product } from '../types/product';
import { useCartStore } from '../store/useCartStore';

interface OrderModalProps {
  product: Product;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ product, onClose }) => {
  const addItem = useCartStore((state) => state.addItem);
  const [selectedOptions, setSelectedOptions] = useState({
    size: product.options?.size?.[0] || '',
    sugar: product.options?.sugar?.[0] || '',
    ice: product.options?.ice?.[0] || '',
    toppings: [] as string[],
  });

  const handleAddToCart = () => {
    addItem(product, selectedOptions);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          {product.options?.size && (
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Size</h3>
              <div className="flex gap-2">
                {product.options.size.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-full ${
                      selectedOptions.size === size
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedOptions({ ...selectedOptions, size })}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.options?.sugar && (
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Sugar Level</h3>
              <div className="flex gap-2 flex-wrap">
                {product.options.sugar.map((sugar) => (
                  <button
                    key={sugar}
                    className={`px-4 py-2 rounded-full ${
                      selectedOptions.sugar === sugar
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedOptions({ ...selectedOptions, sugar })}
                  >
                    {sugar}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.options?.ice && (
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Ice Level</h3>
              <div className="flex gap-2 flex-wrap">
                {product.options.ice.map((ice) => (
                  <button
                    key={ice}
                    className={`px-4 py-2 rounded-full ${
                      selectedOptions.ice === ice
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedOptions({ ...selectedOptions, ice })}
                  >
                    {ice}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.options?.toppings && (
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Toppings</h3>
              <div className="flex gap-2 flex-wrap">
                {product.options.toppings.map((topping) => (
                  <button
                    key={topping}
                    className={`px-4 py-2 rounded-full ${
                      selectedOptions.toppings.includes(topping)
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() =>
                      setSelectedOptions({
                        ...selectedOptions,
                        toppings: selectedOptions.toppings.includes(topping)
                          ? selectedOptions.toppings.filter((t) => t !== topping)
                          : [...selectedOptions.toppings, topping],
                      })
                    }
                  >
                    {topping}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-6">
          <button
            onClick={handleAddToCart}
            className="w-full bg-amber-600 text-white py-3 rounded-full hover:bg-amber-700 transition"
          >
            Add to Cart - ${product.price.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
};