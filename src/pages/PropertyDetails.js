import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapPin, Bed, Bath, Ruler, Phone, Waves, ParkingCircle, ShieldCheck, UserCircle } from "lucide-react";
import { motion } from "framer-motion";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Simulated property data (Replace with API or Firebase later)
    const sampleProperties = [
      {
        id: 1,
        title: "Luxury Apartment in Lagos",
        location: "Ikoyi, Lagos",
        price: "₦120,000,000",
        bedrooms: 3,
        bathrooms: 2,
        size: "200 sqm",
        description:
          "This luxury apartment offers stunning ocean views, modern interiors, and top-notch security in a prime location.",
        features: ["Swimming Pool", "24/7 Security", "Parking Space"],
        agent: {
          name: "John Doe",
          phone: "+234 812 345 6789",
          email: "johndoe@example.com",
          image: "https://source.unsplash.com/100x100/?man",
        },
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
        description:
          "A stunning modern duplex in Abuja with spacious rooms, a swimming pool, and a private garden.",
        features: ["Swimming Pool", "Gated Security", "Spacious Parking"],
        agent: {
          name: "Jane Smith",
          phone: "+234 802 987 6543",
          email: "janesmith@example.com",
          image: "https://source.unsplash.com/100x100/?woman",
        },
        image: "https://real-estate-nigeria.beforward.jp/wp-content/uploads/2020/12/9jatolet-20201103-0356.jpg",
      },
      {
        id: 3,
        title: "Luxury Villa in Port Harcourt",
        location: "GRA Phase 3, Port Harcourt",
        price: "₦150, 000, 000",
        bedrooms: 4,
        bathrooms: 3,
        size: "300 sqm",
        description:
        "A luxurious villa in Port Harcourt with a private pool, gym, and a beautiful garden.",
        features: ["Swimming Pool", "24/7 Security", "Gym", "Parking Space"],
        agent: {
          name: "Williams James",
          phone: "+234 809 123 4567",
          email: "williamsjames@example.com",
          image: "https://source.unsplash",
        },
        image: "https://images.nigeriapropertycentre.com/properties/images/1736334/06462b113a88fe-luxury-6bedroom-duplex-with-a-panthouse-detached-duplexes-for-sale-port-harcourt-rivers.jpeg",
      }
    ];

    const selectedProperty = sampleProperties.find(
      (prop) => prop.id === parseInt(id)
    );
    setProperty(selectedProperty);
  }, [id]);

  if (!property) {
    return <div className="text-center text-gray-600 text-xl p-10">Property not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.img
        src={property.image}
        alt={property.title}
        className="w-full h-72 object-cover rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h2 className="text-3xl font-bold text-gray-800 mt-4">{property.title}</h2>
      <p className="text-gray-600 flex items-center gap-2 mt-1">
        <MapPin size={18} /> {property.location}
      </p>
      <p className="text-blue-600 text-2xl font-bold mt-2">{property.price}</p>

      <div className="flex gap-6 text-gray-600 text-lg mt-4">
        <p className="flex items-center gap-2">
          <Bed size={20} /> {property.bedrooms} Beds
        </p>
        <p className="flex items-center gap-2">
          <Bath size={20} /> {property.bathrooms} Baths
        </p>
        <p className="flex items-center gap-2">
          <Ruler size={20} /> {property.size}
        </p>
      </div>

      <p className="text-gray-700 mt-4">{property.description}</p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Property Features</h3>
        <div className="grid grid-cols-2 gap-4">
          {property.features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg shadow-sm"
            >
              {feature.includes("Parking") && <ParkingCircle size={20} />}
              {feature.includes("Security") && <ShieldCheck size={20} />}
              {feature.includes("Swimming Pool") && <Waves size={20} />} {/* Updated Icon */}
              <p>{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800">Agent Details</h3>
        <div className="flex items-center gap-4 mt-3">
          <img
            src={property.agent.image}
            alt={property.agent.name}
            className="w-16 h-16 rounded-full shadow-md"
          />
          <div>
            <p className="text-gray-800 font-semibold text-lg">{property.agent.name}</p>
            <p className="text-gray-600 flex items-center gap-2">
              <Phone size={18} /> {property.agent.phone}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <UserCircle size={18} /> {property.agent.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;