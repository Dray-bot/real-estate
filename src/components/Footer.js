import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10 mt-12"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide">RealEstateX</h2>
          <p className="mt-3 text-gray-400 max-w-sm leading-relaxed">
            Your trusted real estate marketplace. Find your dream home today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            {["Home", "Properties", "Add Property", "Agent Dashboard"].map(
              (link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link}
                  </Link>
                </motion.li>
              )
            )}
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-xl font-semibold">Connect With Us</h3>
          <div className="flex gap-5 mt-4">
            {[Facebook, Twitter, Instagram].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-gray-400 hover:text-white transition"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
          <p className="mt-5 text-gray-400 leading-relaxed">
            📍 Lagos, Nigeria <br />
            📧 support@realestatex.com <br />
            📞 +234 810 123 4567
          </p>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} RealEstateX. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
