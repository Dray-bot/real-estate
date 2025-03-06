import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Ruler } from "lucide-react";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Simulated data (Replace this with API call or Firebase later)
    const sampleProperties = [
      {
        id: 1,
        title: "Luxury Apartment in Lagos",
        location: "Ikoyi, Lagos",
        price: "₦120,000,000",
        bedrooms: 3,
        bathrooms: 2,
        size: "200 sqm",
        image: "https://source.unsplash.com/400x300/?house",
      },
      {
        id: 2,
        title: "Modern Duplex in Abuja",
        location: "Maitama, Abuja",
        price: "₦85,000,000",
        bedrooms: 4,
        bathrooms: 3,
        size: "250 sqm",
        image: "https://source.unsplash.com/400x300/?mansion",
      },
    ];

    setProperties(sampleProperties);
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Available Properties</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
            
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{property.title}</h3>
              <p className="text-gray-600 flex items-center gap-2">
                <MapPin size={16} /> {property.location}
              </p>
              
              <p className="text-blue-600 text-lg font-bold mt-2">{property.price}</p>

              <div className="flex justify-between text-gray-600 text-sm mt-3">
                <p className="flex items-center gap-1"><Bed size={16} /> {property.bedrooms} Beds</p>
                <p className="flex items-center gap-1"><Bath size={16} /> {property.bathrooms} Baths</p>
                <p className="flex items-center gap-1"><Ruler size={16} /> {property.size}</p>
              </div>

              <Link 
                to={`/property/${property.id}`} 
                className="block text-center bg-blue-600 text-white mt-4 py-2 rounded-lg hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
