import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Order from './pages/Order';
import Enquiry from './pages/Enquiry';
import About from './pages/About';
import Contact from './pages/Contact';
import ThankYouOrder from './pages/ThankYouOrder';
import ThankYouEnquiry from './pages/ThankYouEnquiry';

export default function App(){
return(<Router>
<Header/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/order" element={<Order/>}/>
<Route path="/enquiry" element={<Enquiry/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/thank-you-order" element={<ThankYouOrder/>}/>
<Route path="/thank-you-enquiry" element={<ThankYouEnquiry/>}/>
</Routes>
</Router>);
}