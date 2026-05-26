import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import Navbar          from './components/Navbar.jsx';
import Footer          from './components/Footer.jsx';
import WhatsAppButton  from './components/WhatsAppButton.jsx';
import HamperModal     from './components/HamperModal.jsx';
import CartDrawer      from './components/CartDrawer.jsx';
import Home            from './pages/Home.jsx';
import Collections     from './pages/Collections.jsx';
import FathersDay      from './pages/FathersDay.jsx';
import Rakhi           from './pages/Rakhi.jsx';
import Diwali          from './pages/Diwali.jsx';
import Holi            from './pages/Holi.jsx';
import GenericFestival from './pages/GenericFestival.jsx';
import Rituals         from './pages/Rituals.jsx';
import RitualPage      from './pages/RitualPage.jsx';
import Corporate       from './pages/Corporate.jsx';
import About           from './pages/About.jsx';
import FAQ             from './pages/FAQ.jsx';
import Blog            from './pages/Blog.jsx';
import BlogFathersDay  from './pages/BlogFathersDay.jsx';
import Contact         from './pages/Contact.jsx';
import NotFound        from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Navbar />
      <main className="pt-16 min-h-screen">
        <Routes>
          <Route path="/"                       element={<Home />} />
          <Route path="/collections"                              element={<Collections />} />
          <Route path="/collections/fathers-day"                  element={<FathersDay />} />
          <Route path="/collections/rakhi"                        element={<Rakhi />} />
          <Route path="/collections/diwali"                       element={<Diwali />} />
          <Route path="/collections/holi"                         element={<Holi />} />
          <Route path="/collections/navratri"       element={<GenericFestival festival="Navratri"         emoji="🪔" date="October 2, 2026" />} />
          <Route path="/collections/ganesh-chaturthi" element={<GenericFestival festival="Ganesh Chaturthi" emoji="🐘" date="August 27, 2026" />} />
          <Route path="/collections/lohri"          element={<GenericFestival festival="Lohri"            emoji="🔥" date="January 13, 2027" />} />
          <Route path="/collections/eid"            element={<GenericFestival festival="Eid"              emoji="🌙" date="March 2027" />} />
          <Route path="/collections/bhai-dooj"      element={<GenericFestival festival="Bhai Dooj"        emoji="🪢" date="November 2, 2026" />} />
          <Route path="/collections/karwa-chauth"   element={<GenericFestival festival="Karwa Chauth"     emoji="🌙" date="October 12, 2026" />} />
          <Route path="/collections/christmas"      element={<GenericFestival festival="Christmas"        emoji="🎄" date="December 25, 2026" />} />
          <Route path="/collections/wedding"        element={<GenericFestival festival="Wedding"          emoji="💍" date="Year-round" />} />
          <Route path="/collections/baby-shower"    element={<GenericFestival festival="Baby Shower"      emoji="🍼" date="Year-round" />} />
          <Route path="/rituals"                element={<Rituals />} />
          <Route path="/rituals/mehndi"         element={<RitualPage ritual="mehndi" />} />
          <Route path="/rituals/haldi"          element={<RitualPage ritual="haldi" />} />
          <Route path="/rituals/sangeet"        element={<RitualPage ritual="sangeet" />} />
          <Route path="/rituals/tilak"          element={<RitualPage ritual="tilak" />} />
          <Route path="/rituals/baraat"         element={<RitualPage ritual="baraat" />} />
          <Route path="/rituals/vidai"          element={<RitualPage ritual="vidai" />} />
          <Route path="/rituals/griha-pravesh"  element={<RitualPage ritual="griha-pravesh" />} />
          <Route path="/rituals/annaprashan"    element={<RitualPage ritual="annaprashan" />} />
          <Route path="/rituals/mundan"         element={<RitualPage ritual="mundan" />} />
          <Route path="/corporate-gifting"      element={<Corporate />} />
          <Route path="/about"                  element={<About />} />
          <Route path="/faq"                    element={<FAQ />} />
          <Route path="/blog"                   element={<Blog />} />
          <Route path="/blog/fathers-day-gift-hampers-india-2026" element={<BlogFathersDay />} />
          <Route path="/contact"                element={<Contact />} />
          <Route path="*"                       element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <HamperModal />
      <CartDrawer />
    </CartProvider>
  );
}
