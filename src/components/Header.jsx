// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-red-700 text-white fixed w-full z-50 top-0 left-0 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/src/assets/logo.webp"
            alt="Tyoohar Ghar Logo"
            className="h-10 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-xl font-semibold tracking-wide">
              Tyoohar Ghar
            </span>
            <span className="text-sm text-yellow-200 -mt-1">
              Your One-Stop Festive Shop
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-yellow-200 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-200 transition">
            About
          </Link>
          <Link to="/order" className="hover:text-yellow-200 transition">
            Order Now
          </Link>
          <Link to="/enquiry" className="hover:text-yellow-200 transition">
            Corporate Enquiry
          </Link>
          <Link to="/contact" className="hover:text-yellow-200 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
