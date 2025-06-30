import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-blue-600">Pranchal Agarwal</h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-blue-600">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4 text-xl text-gray-600 ml-6">
          <a
            href="https://github.com/Pranchal15"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pranchalagarwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:pranchal.agarwal@gmail.com"
            className="hover:text-blue-600"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden text-2xl text-gray-700">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4">
          <ul className="space-y-3 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-blue-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-start space-x-4 pt-4 border-t border-gray-100 text-xl text-gray-600">
            <a
              href="https://github.com/Pranchal15"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pranchalagarwal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:pranchal.agarwal@gmail.com"
              className="hover:text-blue-600"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
