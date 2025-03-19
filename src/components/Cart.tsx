import React from 'react';
import { X } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <p className="text-center text-gray-500 mt-4">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        {item.selectedOptions?.size && `Size: ${item.selectedOptions.size}`}
                        {item.selectedOptions?.sugar && `, Sugar: ${item.selectedOptions.sugar}`}
                        {item.selectedOptions?.ice && `, Ice: ${item.selectedOptions.ice}`}
                      </p>
                      {item.selectedOptions?.toppings && item.selectedOptions.toppings.length > 0 && (
                        <p className="text-sm text-gray-500">
                          Toppings: {item.selectedOptions.toppings.join(', ')}
                        </p>
                      )}
                      <div className="flex items-center mt-2">
                        <button
                          className="text-gray-500 hover:text-gray-700"
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="text-gray-500 hover:text-gray-700"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${total().toFixed(2)}</span>
            </div>
            <button
              className="w-full bg-amber-600 text-white py-3 rounded-full hover:bg-amber-700 transition"
              onClick={() => {
                // Handle checkout
                alert('Proceeding to checkout...');
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};