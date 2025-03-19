import React from 'react';

interface Location {
  id: number;
  name: string;
  address: string;
  hours: string;
  phone: string;
  image: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: 'Beverly Hills',
    address: '123 Tea Street, Beverly Hills, CA 90210',
    hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
    phone: '(555) 123-4567',
    image: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    name: 'Santa Monica',
    address: '456 Ocean Ave, Santa Monica, CA 90401',
    hours: 'Mon-Sun: 9:00 AM - 11:00 PM',
    phone: '(555) 234-5678',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    name: 'Downtown LA',
    address: '789 Spring St, Los Angeles, CA 90014',
    hours: 'Mon-Sun: 8:00 AM - 9:00 PM',
    phone: '(555) 345-6789',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

const Locations = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Locations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{location.name}</h3>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">{location.address}</p>
                  <p className="text-gray-600">{location.hours}</p>
                  <p className="text-gray-600">{location.phone}</p>
                </div>
                <div className="mt-6">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;