import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { id: 1, text: "Verified Agents & Secure Transactions" },
  { id: 2, text: "Easy Property Search with Advanced Filters" },
  { id: 3, text: "Get Notified When New Listings Match Your Criteria" },
  { id: 4, text: "Seamless Direct Communication with Agents" },
];

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-gray-900 text-center mb-12"
      >
        Why Choose Us?
      </motion.h2>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-xl shadow-lg transition-all duration-300"
          >
            <CheckCircle className="w-7 h-7 text-yellow-300 mr-4" />
            <p className="text-lg font-medium">{benefit.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
