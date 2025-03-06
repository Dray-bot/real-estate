import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-wide">
        RealEstateX
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Navigation */}
      <nav className="hidden lg:flex gap-6">
        {["Home", "Properties", "Agent Dashboard", "Add Property", "Login", "Sign Up"].map((item, index) => (
          <Link
            key={index}
            to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
            className="relative px-3 py-2 text-lg transition-all duration-300 hover:text-yellow-300"
          >
            {item}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        ))}
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-16 left-0 w-full bg-blue-800 shadow-lg py-6 px-4"
          >
            <nav className="flex flex-col gap-4 text-center">
              {["Home", "Properties", "Agent Dashboard", "Add Property", "Login", "Sign Up"].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="block text-lg py-2 transition-all duration-300 hover:text-yellow-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
