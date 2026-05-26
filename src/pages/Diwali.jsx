import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';
import HamperGallery from '../components/HamperGallery.jsx';
import { useCart } from '../context/CartContext.jsx';

const WA_BASE = "https://wa.me/919599004265?text=";

const hampers = [
  {
    key: 'diwali-festive-box',
    name: "Diwali Mithai Box",
    price: '₹1,199',
    items: 'Assorted premium mithai · Dry fruits mix · Tealight candle · Personalised card',
    tag: 'Classic Gift',
    emoji: '🍮',
    wa: "Hi Tyoohar Ghar! I'd like to order the Diwali Mithai Box (₹1,199). Can you share details?",
  },
  {
    key: 'diwali-grand-celebration',
    name: "Festival Luxury Hamper",
    price: '₹2,299',
    items: 'Premium nuts & dates · Artisan chocolates · Scented candle · Dry fruits · Personalised card in keepsake box',
    tag: 'Most Popular',
    emoji: '🪔',
    wa: "Hi Tyoohar Ghar! I'd like to order the Festival Luxury Hamper (₹2,299) for Diwali. Can you share details?",
  },
  {
    key: 'diwali-luxury-collection',
    name: "Grand Diwali Hamper",
    price: '₹3,499',
    items: 'Luxury dry fruits & dates · Fine Belgian chocolates · Saffron · Premium scented candle set · Crystal diyas · Personalised keepsake box',
    tag: 'Premium Gift',
    emoji: '✨',
    wa: "Hi Tyoohar Ghar! I'd like to order the Grand Diwali Hamper (₹3,499). Can you share details?",
  },
];

export default function Diwali() {
  const { openModal, addToCart, openCart } = useCart();
  return (
    <>
      <SEOHead
        title="Diwali Gift Hampers India 2026 — Premium Festive Hampers"
        description="Premium Diwali gift hampers India 2026. Curated festive hampers with dry fruits, sweets, candles from ₹1,199. Corporate Diwali gifts available. Free PAN India delivery. Diwali is November 8, 2026."
        canonical="/collections/diwali"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gold-pale via-cream-200 to-rose-pale py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-gold-brand text-white font-body text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
            🪔 Diwali — November 8, 2026
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-navy-brand mb-5 leading-tight">
            Diwali Gift Hampers 2026
          </h1>
          <p className="font-body text-lg text-navy-mid max-w-2xl mx-auto mb-8 leading-relaxed">
            Light up Diwali for the people who matter most. Our premium festive hampers are crafted
            to delight — family gifts, corporate hampers, and everything in between.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WA_BASE + encodeURIComponent("Hi Tyoohar Ghar! I'd like to order a Diwali hamper. Can you help me choose?")}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-base px-7 py-3.5"
            >
              Order Diwali Hamper
            </a>
            <Link to="/corporate-gifting" className="btn-outline text-base px-7 py-3.5">
              Corporate Orders →
            </Link>
          </div>
          <p className="font-body text-sm text-navy-light mt-5">
            📦 Free PAN India delivery · ✍️ Handwritten card included · 🏢 Bulk pricing available
          </p>
        </div>
      </section>

      {/* Hampers */}
      <section id="hampers" className="bg-cream-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-navy-brand text-center mb-3">Choose Your Diwali Hamper</h2>
          <p className="font-body text-navy-mid text-center mb-10 max-w-xl mx-auto">
            Every hamper includes a personalised handwritten card with your message.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hampers.map(h => (
              <div key={h.key} className="card flex flex-col group hover-lift">
                <button
                  onClick={() => openModal(h)}
                  className="text-left w-full focus:outline-none focus:ring-2 focus:ring-rose-brand/40 rounded-t-2xl"
                  aria-label={`View ${h.name} details`}
                >
                  <HamperGallery hamperKey={h.key} emoji={h.emoji} gradient="from-gold-pale to-rose-pale" />
                </button>
                <div className="p-6 flex flex-col flex-1">
                  <button onClick={() => openModal(h)} className="text-left mb-2 group/title">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-xl text-navy-brand group-hover/title:text-rose-brand transition-colors">{h.name}</h3>
                      <span className="font-body text-xs bg-gold-pale text-gold-brand px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2 border border-gold-light">
                        {h.tag}
                      </span>
                    </div>
                  </button>
                  <p className="font-display text-2xl text-rose-brand mb-3">{h.price}</p>
                  <p className="font-body text-sm text-navy-mid mb-2 font-semibold">Inside the box:</p>
                  <p className="font-body text-sm text-navy-mid leading-relaxed mb-5 flex-1">{h.items}</p>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => { addToCart(h); openCart(); }}
                      className="inline-flex items-center justify-center gap-2 bg-navy-brand text-white font-body font-semibold px-4 py-2.5 rounded-full transition-all hover:bg-navy-mid hover:shadow-md hover:-translate-y-0.5 text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add to Cart
                    </button>
                    <a
                      href={WA_BASE + encodeURIComponent(h.wa)}
                      target="_blank" rel="noopener noreferrer"
                      className="btn-whatsapp justify-center text-sm py-2.5"
                    >
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate */}
      <section className="bg-navy-brand py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl text-white mb-4">Corporate Diwali Gifting</h2>
          <p className="font-body text-cream-300 mb-6 max-w-xl mx-auto leading-relaxed">
            Sending hampers to your team, clients, or partners? We handle bulk orders — custom branded boxes,
            personalised notes, and coordinated delivery across India.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WA_BASE + encodeURIComponent("Hi Tyoohar Ghar! I'm interested in corporate Diwali hampers. Can you share bulk pricing?")}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp px-7 py-3.5 text-base"
            >
              Get Bulk Pricing
            </a>
            <Link to="/corporate-gifting" className="btn-outline text-base px-7 py-3.5 border-white text-white hover:bg-white hover:text-navy-brand">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-cream-200 py-10 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-body text-navy-light mb-3">Also planning for</p>
          <Link to="/collections/karwa-chauth" className="font-display text-xl text-navy-brand hover:text-rose-brand transition-colors">
            Karwa Chauth Hampers — October 12 →
          </Link>
        </div>
      </section>
    </>
  );
}
