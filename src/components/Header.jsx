import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp"; // make sure logo.webp exists in /src/assets/

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-red-700 text-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Tyoohar Ghar Logo"
            className="h-10 w-auto rounded-lg"
          />
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition"
          >
            Tyoohar Ghar
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300">
            About
          </Link>
          <Link
            to="/order"
            className="hover:text-yellow-300 font-semibold border border-yellow-400 px-3 py-1 rounded-md"
          >
            Order Now
          </Link>
          <Link to="/enquiry" className="hover:text-yellow-300">
            Corporate Enquiry
          </Link>
          <Link to="/contact" className="hover:text-yellow-300">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-red-600 px-6 py-4 space-y-3 text-lg">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-200"
          >
            About
          </Link>
          <Link
            to="/order"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-200"
          >
            Order Now
          </Link>
          <Link
            to="/enquiry"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-200"
          >
            Corporate Enquiry
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-200"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
