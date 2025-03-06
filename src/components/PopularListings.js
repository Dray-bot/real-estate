import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Ruler } from "lucide-react";
import { motion } from "framer-motion";
import { image } from "framer-motion/client";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated data (Replace this with API call or Firebase later)
    const fetchProperties = async () => {
      try {
        const sampleProperties = [
          {
            id: 1,
            title: "Luxury Apartment in Lagos",
            location: "Ikoyi, Lagos",
            price: "₦120,000,000",
            bedrooms: 3,
            bathrooms: 2,
            size: "200 sqm",
            image: "https://images.nigeriapropertycentre.com/properties/images/247143/1430316_247143-miami-styled-6-bedroom-luxury-house--partly-serviced--for-sale--lekki-lagos-.jpg",
          },
          {
            id: 2,
            title: "Modern Duplex in Abuja",
            location: "Maitama, Abuja",
            price: "₦85,000,000",
            bedrooms: 4,
            bathrooms: 3,
            size: "250 sqm",
            image: "https://real-estate-nigeria.beforward.jp/wp-content/uploads/2020/12/9jatolet-20201103-0356.jpg",
          },
          {
            id: 3,
            title: "Luxury Villa in Port Harcout",
            location: "GRA Phase 3, Port Harcourt",
            price: "₦150, 000, 000",
            bedrooms: 4,
            bathrooms: 3,
            size: "300 sqm",
            image: "https://images.nigeriapropertycentre.com/properties/images/1736334/06462b113a88fe-luxury-6bedroom-duplex-with-a-panthouse-detached-duplexes-for-sale-port-harcourt-rivers.jpeg"
          }
        ];
        setProperties(sampleProperties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Available Properties
      </motion.h2>
      
      {loading ? (
        <p className="text-gray-600 text-center">Loading properties...</p>
      ) : properties.length === 0 ? (
        <p className="text-gray-600 text-center">No properties available at the moment.</p>
      ) : (
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {properties.map(({ id, title, location, price, bedrooms, bathrooms, size, image }) => (
            <motion.div 
              key={id} 
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: id * 0.1 }}
            >
              <motion.img 
                src={image} 
                alt={title} 
                className="w-full h-48 object-cover" 
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <MapPin size={16} /> {location}
                </p>
                <p className="text-blue-600 text-lg font-bold mt-2">{price}</p>

                <div className="flex justify-between text-gray-600 text-sm mt-3">
                  <p className="flex items-center gap-1"><Bed size={16} /> {bedrooms} Beds</p>
                  <p className="flex items-center gap-1"><Bath size={16} /> {bathrooms} Baths</p>
                  <p className="flex items-center gap-1"><Ruler size={16} /> {size}</p>
                </div>

                <Link 
                  to={`/property/${id}`} 
                  className="block text-center bg-blue-600 text-white mt-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default PropertyList;
