import React from "react";
import { Link } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white tracking-wide">
          Ranu<span className="text-blue-400">Portfolio</span>
        </h1>

        {/* Nav Links */}
        <ul className="flex gap-6 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            {/* <ScrollLink  to="skills"  smooth={true}  duration={500} className="hover:text-blue-400 transition">
              Skills
            </ScrollLink> */}
            <Link to="/skills" className="cursor-pointer hover:text-blue-400 transition">
           Skills
          </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-400 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
