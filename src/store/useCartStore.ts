import { create } from 'zustand';
import { Product } from '../types/product';

interface CartItem extends Product {
  quantity: number;
  selectedOptions?: {
    size?: string;
    sugar?: string;
    ice?: string;
    toppings?: string[];
  };
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Product, options?: CartItem['selectedOptions']) => void;
  removeItem: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  total: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item, options) => {
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.id === item.id && 
        JSON.stringify(i.selectedOptions) === JSON.stringify(options)
      );

      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i === existingItem
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }

      return {
        items: [...state.items, { ...item, quantity: 1, selectedOptions: options }],
      };
    });
  },
  removeItem: (itemId) => {
    set((state) => ({
      items: state.items.filter((i) => i.id !== itemId),
    }));
  },
  updateQuantity: (itemId, quantity) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      ),
    }));
  },
  total: () => {
    const items = get().items;
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
}));