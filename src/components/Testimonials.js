import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    review: "This platform helped me find my dream home in just a week! Super easy to use and trustworthy.",
    image: "https://source.unsplash.com/100x100/?man,face",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    review: "As a real estate agent, I love how simple it is to list properties and connect with buyers!",
    image: "https://source.unsplash.com/100x100/?woman,face",
    rating: 4,
  },
  {
    id: 3,
    name: "James Carter",
    review: "The best real estate marketplace I’ve ever used. Highly recommend it!",
    image: "https://source.unsplash.com/100x100/?business,man",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-gray-900 text-center mb-12"
      >
        What Our Users Say
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-xl shadow-xl text-center transition-all duration-300"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white"
            />
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            
            {/* Star Rating */}
            <div className="flex justify-center my-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-300" />
              ))}
            </div>

            <p className="text-md opacity-90">{testimonial.review}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
