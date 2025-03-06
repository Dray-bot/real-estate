import React, { useState, useEffect } from "react";
import { PlusCircle, Eye, Star, Trash } from "lucide-react";
import { motion } from "framer-motion";

const AgentDashboard = () => {
  // Retrieve logged-in user
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const userName = loggedInUser ? loggedInUser.name : "Agent";

  // Load saved listings from localStorage
  const getSavedListings = () => {
    const storedListings = localStorage.getItem("agentListings");
    return storedListings
      ? JSON.parse(storedListings)
      : [
          {
            id: 1,
            title: "Luxury 3-Bedroom Apartment",
            location: "Lekki, Lagos",
            price: "₦120,000,000",
            views: 450,
            isFeatured: false,
          },
          {
            id: 2,
            title: "Modern Duplex with Swimming Pool",
            location: "Victoria Island, Lagos",
            price: "₦250,000,000",
            views: 320,
            isFeatured: true,
          },
        ];
  };

  const [listings, setListings] = useState(getSavedListings);

  useEffect(() => {
    localStorage.setItem("agentListings", JSON.stringify(listings));
  }, [listings]);

  const upgradeToFeatured = (id) => {
    if (window.confirm("Are you sure you want to feature this property?")) {
      setListings(
        listings.map((listing) =>
          listing.id === id ? { ...listing, isFeatured: true } : listing
        )
      );
    }
  };

  const deleteListing = (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      setListings(listings.filter((listing) => listing.id !== id));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 pt-24 min-h-screen"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <PlusCircle size={24} className="text-blue-600" /> {userName}'s Dashboard
      </h2>

      <motion.div whileHover={{ scale: 1.05 }} className="mb-6">
        <a
          href="/add-property"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 w-fit"
        >
          <PlusCircle size={18} /> Add New Property
        </a>
      </motion.div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Title</th>
              <th className="border p-3 text-left">Location</th>
              <th className="border p-3">Price</th>
              <th className="border p-3">Views</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.length > 0 ? (
              listings.map((listing) => (
                <motion.tr
                  key={listing.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center hover:bg-gray-50"
                >
                  <td className="border p-3 text-left">{listing.title}</td>
                  <td className="border p-3 text-left">{listing.location}</td>
                  <td className="border p-3">{listing.price}</td>
                  <td className="border p-3 flex justify-center items-center gap-1">
                    <Eye size={18} className="text-gray-600" /> {listing.views}
                  </td>
                  <td className="border p-3 flex justify-center items-center gap-2">
                    {!listing.isFeatured && (
                      <motion.button
                        onClick={() => upgradeToFeatured(listing.id)}
                        className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600 transition flex items-center gap-1"
                      >
                        <Star size={18} /> Feature
                      </motion.button>
                    )}
                    <motion.button
                      onClick={() => deleteListing(listing.id)}
                      className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700 transition flex items-center gap-1"
                    >
                      <Trash size={18} /> Delete
                    </motion.button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-gray-500 p-6 text-center">
                  No properties listed yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default AgentDashboard;
