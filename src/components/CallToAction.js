import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto py-16 px-6 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl shadow-2xl relative overflow-hidden"
    >
      {/* Soft Glow Effect */}
      <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-extrabold mb-5 relative z-10"
      >
        Ready to Find Your Dream Home?
      </motion.h2>

      {/* Subtext */}
      <p className="text-lg opacity-90 mb-8 relative z-10">
        Join thousands of users searching for properties or list your own with ease.
      </p>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-5 relative z-10">
        {/* Agent Signup Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/signup")}
          className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition-all"
        >
          Sign Up as an Agent <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* Property Search Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/properties")}
          className="flex items-center gap-2 bg-gray-100 text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition-all"
        >
          Find a Property <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CallToAction;
