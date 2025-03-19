import React, { useState } from 'react';
import { X } from 'lucide-react';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement actual login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">
              {isLoggedIn ? 'My Profile' : 'Login'}
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {isLoggedIn ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-amber-100 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h3 className="mt-4 text-xl font-medium">{email}</h3>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Order History</h4>
                  <p className="text-gray-500 text-center py-4">No orders yet</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Saved Addresses</h4>
                  <p className="text-gray-500 text-center py-4">No addresses saved</p>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-2 rounded-full hover:bg-amber-700 transition"
                >
                  Login
                </button>

                <p className="text-center text-sm text-gray-500">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    className="text-amber-600 hover:text-amber-700"
                    onClick={() => {/* Implement sign up logic */}}
                  >
                    Sign up
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;