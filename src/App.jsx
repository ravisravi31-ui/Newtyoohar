import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import OrderForm from "./pages/Order";
import EnquiryForm from "./pages/Enquiry";
import Contact from "./pages/Contact";
import ThankYouOrder from "./pages/ThankYouOrder";
import ThankYouEnquiry from "./pages/ThankYouEnquiry";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/order" element={<OrderForm />} />
            <Route path="/enquiry" element={<EnquiryForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you-order" element={<ThankYouOrder />} />
            <Route path="/thank-you-enquiry" element={<ThankYouEnquiry />} />
          </Routes>
        </main>
        <footer className="bg-red-700 text-white text-center py-4 mt-8">
          <p className="text-sm">© {new Date().getFullYear()} Tyoohar Ghar. All Rights Reserved.</p>
          <p className="text-xs"><a href="mailto:tyooharghar@gmail.com" className="hover:text-yellow-300">tyooharghar@gmail.com</a> | WhatsApp: <a href="https://wa.me/919599004265" target="_blank" rel="noreferrer" className="hover:text-yellow-300">+91 9599004265</a></p>
        </footer>
      </div>
    </Router>
  );
}
