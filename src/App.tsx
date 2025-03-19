import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Sparkles, ShoppingCart, Menu as MenuIcon, Search, User } from 'lucide-react';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import { Cart } from './components/Cart';
import { useCartStore } from './store/useCartStore';
import Menu from './pages/Menu';
import Locations from './pages/Locations';
import About from './pages/About';
import SearchModal from './components/SearchModal';
import UserProfile from './components/UserProfile';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden"
                >
                  <MenuIcon className="h-6 w-6 text-gray-700" />
                </button>
                <div className="hidden lg:flex items-center space-x-8 ml-8">
                  <Link to="/menu" className="text-gray-700 hover:text-amber-600 transition">Menu</Link>
                  <Link to="/locations" className="text-gray-700 hover:text-amber-600 transition">Locations</Link>
                  <Link to="/about" className="text-gray-700 hover:text-amber-600 transition">About</Link>
                </div>
              </div>
              
              <Link to="/" className="flex items-center">
                <Sparkles className="h-8 w-8 text-amber-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">LuxBoba</span>
              </Link>

              <div className="flex items-center space-x-6">
                <button onClick={() => setIsSearchOpen(true)}>
                  <Search className="h-6 w-6 text-gray-700" />
                </button>
                <button onClick={() => setIsProfileOpen(true)}>
                  <User className="h-6 w-6 text-gray-700" />
                </button>
                <button 
                  className="relative"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart className="h-6 w-6 text-gray-700" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/menu"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Menu
                </Link>
                <Link
                  to="/locations"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Locations
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </div>
            </div>
          )}
        </nav>

        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <BestSellers />
                <FeaturedProducts />
              </>
            } />
            <Route path="/menu" element={<Menu />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
        
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <UserProfile isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      </div>
    </Router>
  );
}

export default App;