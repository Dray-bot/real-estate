import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center bg-cover bg-center text-white bg-[url('https://surelandrealtors.com/wp-content/uploads/2024/02/noble-ville-3d-flyer.jpeg')]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide">
          Find Your <span className="text-yellow-400">Dream Home</span>
        </h1>
        <p className="mt-3 text-lg md:text-xl opacity-90">
          Discover top listings from verified agents & secure your future.
        </p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 flex items-center justify-center w-full"
        >
          <input
            type="text"
            placeholder="Search by location, price, or property type..."
            className="p-3 w-80 md:w-[400px] rounded-l-full text-gray-900 outline-none shadow-lg focus:ring-2 focus:ring-yellow-400"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-r-full font-semibold transition-all duration-300 shadow-lg">
            Search
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
