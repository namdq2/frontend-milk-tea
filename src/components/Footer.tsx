import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold">LuxBoba</h3>
            <p className="mt-4 text-gray-400 max-w-md">
              Premium bubble tea crafted with passion and precision. Experience the perfect blend of
              tradition and innovation in every cup.
            </p>
            <div className="mt-6 flex space-x-6">
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white transition" />
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white transition" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white transition" />
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Menu</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Locations</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Careers</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-gray-400">123 Tea Street</li>
              <li className="text-gray-400">Beverly Hills, CA 90210</li>
              <li className="text-gray-400">contact@luxboba.com</li>
              <li className="text-gray-400">(555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} LuxBoba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;